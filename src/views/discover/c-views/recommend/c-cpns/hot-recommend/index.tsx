import React from 'react'
import type { FC, ReactNode } from 'react'
import { HotRecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  return (
    <HotRecommendWrapper>
      <AreaHeaderV1></AreaHeaderV1>
    </HotRecommendWrapper>
  )
}

export default HotRecommend
