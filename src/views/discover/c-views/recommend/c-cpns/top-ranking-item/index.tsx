import React from 'react'
import type { FC, ReactNode } from 'react'
import { TopRankItemWrapper } from './style'

interface IProps {
  children?: ReactNode
  itemData: any
}

const TopRankingItem: FC<IProps> = () => {
  return <TopRankItemWrapper>TopRankingItem</TopRankItemWrapper>
}

export default TopRankingItem
