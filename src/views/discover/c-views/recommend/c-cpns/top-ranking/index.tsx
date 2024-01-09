import React from 'react'
import type { FC, ReactNode } from 'react'
import { TopRankingWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  return (
    <TopRankingWrapper>
      <AreaHeaderV1 title="榜单" morelink="/discover/ranking" />
      <div className="content"></div>
    </TopRankingWrapper>
  )
}

export default TopRanking
