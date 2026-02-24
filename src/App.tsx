import { createBrowserRouter, RouterProvider, Outlet } from 'react-router'
import SmoothScroll from './components/SmoothScroll'
import ScrollProgress from './components/ScrollProgress'
import { routes } from './routes'

function RootLayout() {
  return (
    <SmoothScroll>
      <ScrollProgress color="#5A7A6E" />
      <Outlet />
    </SmoothScroll>
  )
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: routes,
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
