import React from 'react'
import type { FC, ReactNode } from 'react'
import { HotRecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const keywords = ['华语', '流行', '摇滚', '民谣', '电子']
  return (
    <HotRecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={keywords}
        moretext="更多"
        morelink="/discover/songs"
      />
    </HotRecommendWrapper>
  )
}

export default HotRecommend
