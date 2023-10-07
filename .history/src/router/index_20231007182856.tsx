import { useRoutes, RouteObject } from 'react-router-dom'
import Home from '@/views/home'

const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
]

const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router
