import React from 'react'
import type { FC, ReactNode } from 'react'
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
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeftWrapper>
          <Carousel autoplay effect="fade">
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
          <button className="btn left"></button>
          <button className="btn right"></button>
        </BannerControlWrapper>
      </div>
    </BannerWrapper>
  )
}

export default TopBanner
