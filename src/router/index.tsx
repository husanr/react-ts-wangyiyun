import React from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
// import Home from '@/views/home'
const Home = React.lazy(() => import('@/views/home'))
// const Mine = React.lazy(() => import('@/views/home/c-views/mine'))
// const Like = React.lazy(() => import('@/views/home/c-views/like'))

const Demo = React.lazy(() => import('@/views/demo'))
const Discover = React.lazy(() => import('@/views/discover'))
const Recommend = React.lazy(() => import('@/views/discover/c-views/recommend'))
const Ranking = React.lazy(() => import('@/views/discover/c-views/ranking'))
const Songs = React.lazy(() => import('@/views/discover/c-views/songs'))
const Djradio = React.lazy(() => import('@/views/discover/c-views/djradio'))
const Artist = React.lazy(() => import('@/views/discover/c-views/artist'))
const Album = React.lazy(() => import('@/views/discover/c-views/album'))

const Mine = React.lazy(() => import('@/views/mine'))
const Focus = React.lazy(() => import('@/views/focus'))
const Download = React.lazy(() => import('@/views/download'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      // {
      //   path: '/home/mine',
      //   element: <Mine />
      // },
      // {
      //   path: '/home/like',
      //   element: <Like />
      // }
    ]
  },
  {
    path: '/demo',
    element: <Demo name="demo" age={20} />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
