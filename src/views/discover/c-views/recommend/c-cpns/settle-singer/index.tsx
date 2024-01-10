import React from 'react'
import type { FC, ReactNode } from 'react'
import { SettleSingerWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { useAppSelector } from '@/store'
import { getImgSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = () => {
  const { settleSingers } = useAppSelector((state) => ({
    settleSingers: state.recommend.settleSingers
  }))
  return (
    <SettleSingerWrapper>
      <AreaHeaderV2
        title="入驻歌手"
        moreText="查看更多 &gt;"
        moreLink="#/discover/singer"
      />
      <ul className="artists">
        {settleSingers.map((item) => {
          return (
            <li className="item" key={item.id}>
              <img src={getImgSize(item.picUrl, 80)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="alias">{item.alias.join()}</div>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="apply_for">
        <a href="#">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  )
}

export default SettleSinger
