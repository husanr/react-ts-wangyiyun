import React from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AppHeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  return (
    <AppHeaderWrapper>
      <nav className="nav_content wrap_v1">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </nav>
    </AppHeaderWrapper>
  )
}

export default AppHeader
