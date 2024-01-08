import React from 'react'
import type { FC, ReactNode } from 'react'
import { HotRecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'

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
      <div className="hot_recommend">
        {recommends.map((item) => {
          return (
            <div className="item" key={item.id}>
              {item.name}
            </div>
          )
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default HotRecommend
