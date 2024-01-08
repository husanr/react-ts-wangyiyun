import React from 'react'
import type { FC, ReactNode } from 'react'
import { AreaHeaderV1Wrapper } from './style'

interface IProps {
  children?: ReactNode
}

const AreaHeaderV1: FC<IProps> = () => {
  const hots = ['华语', '流行', '摇滚']
  return (
    <AreaHeaderV1Wrapper className="sprite_02">
      <div className="left">
        <h3 className="title">热门推荐</h3>
        <div className="keywords">
          {hots.map((item) => {
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
        <span className="more">更多</span>
        <i className="icon sprite_02"></i>
      </div>
    </AreaHeaderV1Wrapper>
  )
}

export default AreaHeaderV1
