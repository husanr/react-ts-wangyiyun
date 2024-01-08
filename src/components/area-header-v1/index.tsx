import React from 'react'
import type { FC, ReactNode } from 'react'
import { AreaHeaderV1Wrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  moretext?: string
  morelink?: string
}

const AreaHeaderV1: FC<IProps> = (props) => {
  const {
    title = '默认标题',
    keywords = [],
    moretext = '更多',
    morelink = '/'
  } = props
  return (
    <AreaHeaderV1Wrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link className="more" to={morelink}>
          {moretext}
        </Link>
        <i className="icon sprite_02"></i>
      </div>
    </AreaHeaderV1Wrapper>
  )
}

export default AreaHeaderV1
