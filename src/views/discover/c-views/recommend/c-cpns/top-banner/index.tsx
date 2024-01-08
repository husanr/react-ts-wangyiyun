import React, { useRef } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import {
  BannerControlWrapper,
  BannerLeftWrapper,
  BannerRightWrapper,
  BannerWrapper
} from './style'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { Carousel } from 'antd'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  // 获取ref
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  // 获取banner数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  // 切换轮播
  const handlePrevClick = () => {
    bannerRef.current?.prev()
  }
  const handleNextClick = () => {
    bannerRef.current?.next()
  }
  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeftWrapper>
          <Carousel autoplay effect="fade" ref={bannerRef}>
            {banners.map((item) => {
              return (
                <div key={item.encodeId} className="banner-item">
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeftWrapper>
        <BannerRightWrapper></BannerRightWrapper>
        <BannerControlWrapper>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControlWrapper>
      </div>
    </BannerWrapper>
  )
}

export default TopBanner
