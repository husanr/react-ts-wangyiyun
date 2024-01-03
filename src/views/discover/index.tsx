import apiRequest from '@/service'
import React, { Suspense, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet, Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  useEffect(() => {
    apiRequest.get({ url: '/banner' }).then((res) => {
      console.log(res)
    })
  }, [])
  return (
    <div>
      <div>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/songs">歌单</Link>
        <Link to="/discover/djradio">主播电台</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/album">新碟上架</Link>
      </div>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default Discover
