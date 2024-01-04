import React from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { AppHeaderWrapper, HeaderLeft, HeaderRight } from './style'
import titles from '@/assets/json/header-titles.json'

interface IProps {
  children?: ReactNode
}
function showTitle(item: any) {
  if (item.type === 'path') {
    return (
      <NavLink to={item.link}>
        {item.title}
        <i className="icon sprite_01"></i>
      </NavLink>
    )
  } else {
    return (
      <a href={item.href} target="_blank" rel="noreferrer">
        {item.title}
      </a>
    )
  }
}

const AppHeader: FC<IProps> = () => {
  return (
    <AppHeaderWrapper>
      <nav className="nav_content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="titles_ul">
            {titles.map((item) => {
              return (
                <div className="title_item" key={item.title}>
                  {showTitle(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </nav>
      <div className="divider"></div>
    </AppHeaderWrapper>
  )
}

export default AppHeader
