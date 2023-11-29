import React, { Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return (
    <div>
      <h2>Home page</h2>
      <Link to="/home/mine">mine </Link>
      <Link to="/home/like"> like</Link>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default Home
