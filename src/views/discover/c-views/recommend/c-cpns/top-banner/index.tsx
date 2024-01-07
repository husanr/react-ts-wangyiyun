import React from 'react'
import type { FC, ReactNode } from 'react'
import { BannerWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  return <BannerWrapper>TopBanner</BannerWrapper>
}

export default TopBanner
