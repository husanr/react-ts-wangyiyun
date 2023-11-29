import React from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
// import Home from '@/views/home'
const Home = React.lazy(() => import('@/views/home'))
const Mine = React.lazy(() => import('@/views/home/c-views/mine'))
const Like = React.lazy(() => import('@/views/home/c-views/like'))

const Demo = React.lazy(() => import('@/views/demo'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home/mine',
        element: <Mine />
      },
      {
        path: '/home/like',
        element: <Like />
      }
    ]
  },
  {
    path: '/demo',
    element: <Demo name="demo" age={20} />
  }
]

export default routes
