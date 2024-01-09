import React from 'react'
import type { FC, ReactNode } from 'react'
import { HotRecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import SongMenuItem from '@/components/song-menu-item'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const keywords = ['华语', '流行', '摇滚', '民谣', '电子']

  const { recommends } = useAppSelector((state) => ({
    recommends: state.recommend.hotRecommend
  }))
  return (
    <HotRecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={keywords}
        moretext="更多"
        morelink="/discover/songs"
      />
      <div className="recommend_list">
        {recommends.map((item) => {
          return <SongMenuItem key={item.id} itemData={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default HotRecommend
