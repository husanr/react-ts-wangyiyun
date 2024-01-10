import { useAppDispatch } from '@/store'
import React, { useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import {
  fetchBannerThunk,
  fetchHotRecommendThunk,
  fetchNewAlbumThunk,
  fetchRankingThunk,
  fetchSingersThunk
} from './store'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerThunk())
    dispatch(fetchHotRecommendThunk({ limit: 8 }))
    dispatch(fetchNewAlbumThunk())
    dispatch(fetchRankingThunk())
    dispatch(fetchSingersThunk({ limit: 5 }))
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">
          <UserLogin />
          <SettleSinger />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default Recommend
