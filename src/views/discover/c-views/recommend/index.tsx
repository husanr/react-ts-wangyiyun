import { useAppDispatch } from '@/store'
import React, { useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchBannerThunk } from './store'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerThunk())
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">left</div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default Recommend
