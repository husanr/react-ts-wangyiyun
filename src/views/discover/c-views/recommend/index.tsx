import { useAppDispatch } from '@/store'
import React, { useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import {
  fetchBannerThunk,
  fetchHotRecommendThunk,
  fetchNewAlbumThunk
} from './store'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerThunk())
    dispatch(fetchHotRecommendThunk())
    dispatch(fetchNewAlbumThunk())
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default Recommend
