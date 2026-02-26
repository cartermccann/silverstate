/**
 * Server-side pre-rendering build script for Silver State SPA.
 *
 * Renders each route to static HTML so crawlers receive full page content
 * in the initial document.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderToString } from 'react-dom/server'
import { Fragment, createElement, isValidElement, type ReactNode } from 'react'
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
  Outlet,
  useLocation,
  type RouteObject,
} from 'react-router'
import { routes, routePaths } from '../src/routes'
import type { MetaTag } from '../src/utils/meta'
import Nav from '../src/components/Nav'
import ScrollProgress from '../src/components/ScrollProgress'
import Breadcrumb from '../src/components/Breadcrumb'
import ErrorBoundary from '../src/components/ErrorBoundary'
import TrustBadges from '../src/components/TrustBadges'
import CtaBand from '../src/components/CtaBand'
import Footer from '../src/components/Footer'
import CookieConsent from '../src/components/CookieConsent'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const siteUrl = (import.meta.env?.VITE_SITE_URL || 'https://www.silverstatetreatment.com').replace(
  /\/+$/,
  '',
)

function PrerenderLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const isHomepage = pathname === '/'

  return createElement(
    Fragment,
    null,
    createElement(ScrollProgress, { color: 'var(--sage)' }),
    createElement(Nav, null),
    !isHomepage ? createElement(Breadcrumb, null) : null,
    createElement('main', { id: 'main-content' }, createElement(ErrorBoundary, null, children)),
    createElement(TrustBadges, null),
    createElement(CtaBand, null),
    createElement(Footer, null),
    createElement(CookieConsent, null),
  )
}

type LazyComponentType = {
  _payload: unknown
  _init: (payload: unknown) => unknown
}

type LazyPayload = {
  _status: number
  _result: unknown
}

function isLazyComponentType(type: unknown): type is LazyComponentType {
  return (
    typeof type === 'object' &&
    type !== null &&
    '_payload' in type &&
    '_init' in type &&
    typeof (type as { _init: unknown })._init === 'function'
  )
}

function unwrapSuspenseShell(element: RouteObject['element']): RouteObject['element'] {
  if (!isValidElement(element)) {
    return element
  }

  const child = element.props?.children
  if (isValidElement(child)) {
    return child
  }

  return element
}

function buildSsrRoutes(routeList: RouteObject[]): RouteObject[] {
  return routeList.map((route) => ({
    ...route,
    element: unwrapSuspenseShell(route.element),
    children: route.children ? buildSsrRoutes(route.children) : route.children,
  }))
}

async function preloadLazyType(lazyType: LazyComponentType): Promise<void> {
  try {
    lazyType._init(lazyType._payload)
  } catch (thrown) {
    if (thrown && typeof (thrown as { then?: unknown }).then === 'function') {
      await thrown
    } else {
      throw thrown
    }
  }

  // Second call returns the resolved module/component once loaded.
  lazyType._init(lazyType._payload)
}

async function preloadLazyComponents(routeList: RouteObject[]): Promise<void> {
  for (const route of routeList) {
    if (isValidElement(route.element) && isLazyComponentType(route.element.type)) {
      await preloadLazyType(route.element.type)
    }

    if (route.children) {
      await preloadLazyComponents(route.children)
    }
  }
}

const ssrRoutes = buildSsrRoutes(routes)

const dataRoutes: RouteObject[] = [
  {
    id: 'root',
    path: '/',
    element: createElement(PrerenderLayout, null, createElement(Outlet, null)),
    children: ssrRoutes,
  },
]

const staticHandler = createStaticHandler(dataRoutes)

function injectRenderedApp(template: string, appHtml: string): string {
  return template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function serializeHeadTags(meta: MetaTag[]): string {
  const tags: string[] = []

  for (const tag of meta) {
    if (tag.title) {
      tags.push(`<title>${escapeHtml(tag.title)}</title>`)
      continue
    }

    if (tag.tagName === 'link' && tag.rel && tag.href) {
      tags.push(`<link rel="${escapeHtml(tag.rel)}" href="${escapeHtml(tag.href)}" />`)
      continue
    }

    if (tag.name && tag.content) {
      tags.push(`<meta name="${escapeHtml(tag.name)}" content="${escapeHtml(tag.content)}" />`)
      continue
    }

    if (tag.property && tag.content) {
      tags.push(
        `<meta property="${escapeHtml(tag.property)}" content="${escapeHtml(tag.content)}" />`,
      )
      continue
    }

    if (tag['script:ld+json']) {
      tags.push(
        `<script type="application/ld+json">${JSON.stringify(tag['script:ld+json'])}</script>`,
      )
    }
  }

  return tags.join('')
}

function injectHeadMeta(template: string, meta: MetaTag[]): string {
  if (meta.length === 0) {
    return template
  }

  const serialized = serializeHeadTags(meta)
  if (!serialized) {
    return template
  }

  const shouldReplaceDefaultTitle = meta.some((tag) => Boolean(tag.title))
  const templateWithoutDefaultTitle = shouldReplaceDefaultTitle
    ? template.replace(/<title>[\s\S]*?<\/title>/, '')
    : template

  return templateWithoutDefaultTitle.replace('</head>', `${serialized}</head>`)
}

function hasSuspenseArtifacts(html: string): boolean {
  return (
    html.includes('<!--$?-->') ||
    html.includes('<template id="B:0"></template>') ||
    html.includes('id="S:0"')
  )
}

function isMetaTagArray(value: unknown): value is MetaTag[] {
  return Array.isArray(value)
}

function findRoute(pathname: string): RouteObject | undefined {
  return ssrRoutes.find((route) => route.path === pathname)
}

function readResolvedRouteMeta(pathname: string): MetaTag[] {
  const route = findRoute(pathname) ?? findRoute('*')
  if (!route || !isValidElement(route.element) || !isLazyComponentType(route.element.type)) {
    return []
  }

  const payload = route.element.type._payload as LazyPayload
  if (payload._status !== 1 || typeof payload._result !== 'object' || payload._result === null) {
    return []
  }

  const moduleExports = payload._result as { meta?: unknown }
  return isMetaTagArray(moduleExports.meta) ? moduleExports.meta : []
}

async function renderRoute(pathname: string): Promise<string> {
  const request = new Request(`${siteUrl}${pathname}`)
  const context = await staticHandler.query(request)

  if (context instanceof Response) {
    throw new Error(`Unexpected response while rendering "${pathname}" (${context.status})`)
  }

  const router = createStaticRouter(staticHandler.dataRoutes, context)
  return renderToString(createElement(StaticRouterProvider, { router, context, hydrate: false }))
}

async function prerender() {
  const template = readFileSync(join(distDir, 'index.html'), 'utf-8')
  await preloadLazyComponents(ssrRoutes)

  for (const route of routePaths) {
    const appHtml = await renderRoute(route)
    if (hasSuspenseArtifacts(appHtml)) {
      throw new Error(`Route "${route}" still contains Suspense streaming artifacts`)
    }
    const routeMeta = readResolvedRouteMeta(route)
    const html = injectRenderedApp(injectHeadMeta(template, routeMeta), appHtml)

    const routePath = route === '/' ? '' : route
    const outDir = join(distDir, routePath)
    const outFile = join(outDir, 'index.html')

    if (!existsSync(outDir)) {
      mkdirSync(outDir, { recursive: true })
    }

    writeFileSync(outFile, html)
    console.log(`  Pre-rendered: ${route} -> ${outFile}`)
  }

  // Render catch-all as /404 output for static hosts.
  const notFoundHtml = injectRenderedApp(
    injectHeadMeta(template, readResolvedRouteMeta('/__404__')),
    await renderRoute('/__404__'),
  )
  const notFoundFile = join(distDir, '404.html')
  writeFileSync(notFoundFile, notFoundHtml)
  console.log(`  Pre-rendered: 404 -> ${notFoundFile}`)

  console.log(`\n\u2713 Pre-rendered ${routePaths.length} route(s) + 404.html`)
}

prerender().catch((err) => {
  console.error('Pre-render failed:', err)
  process.exit(1)
})
