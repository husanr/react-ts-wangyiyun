import React, { useRef, useState } from 'react'
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
  const [currentIndex, setCurrentIndex] = useState(0)

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
  const handleAfterChange = (current: number) => {
    setCurrentIndex(current)
  }

  let bgImgUrl = banners[currentIndex]?.imageUrl
  if (bgImgUrl) {
    bgImgUrl += '?imageView&blur=40x20'
  }
  return (
    <BannerWrapper
      style={{
        background: `url('${bgImgUrl}') center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeftWrapper>
          <Carousel
            autoplay
            effect="fade"
            dots={false}
            ref={bannerRef}
            afterChange={handleAfterChange}
          >
            {banners.map((item) => {
              return (
                <div key={item.imageUrl} className="banner-item">
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={`item ${currentIndex === index ? 'active' : ''}`}
                  ></span>
                </li>
              )
            })}
          </ul>
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
