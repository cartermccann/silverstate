import { createBrowserRouter, RouterProvider, Outlet } from 'react-router'
import PageLayout from './layouts/PageLayout'
import { routes } from './routes'

function RootLayout() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
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
