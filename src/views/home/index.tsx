import React, { Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { decrementAction, incrementAction } from '@/store/modules/home'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const { count } = useAppSelector(
    (state) => ({
      count: state.home.counter
    }),
    shallowEqual
  )

  //
  const dispatch = useAppDispatch()
  const handleIncrement = () => {
    // 加法
    dispatch(incrementAction(1))
  }
  const handleDecrement = () => {
    // 减法
    dispatch(decrementAction(1))
  }
  return (
    <div>
      <h2>Home page</h2>
      <p>当前计数：{count}</p>
      <p>
        <button onClick={handleDecrement}>-1</button>
        <button onClick={handleIncrement}>+1</button>
      </p>
      <Link to="/home/mine">mine </Link>
      <Link to="/home/like"> like</Link>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default Home
