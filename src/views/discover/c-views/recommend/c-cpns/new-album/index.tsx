import React, { useRef } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import { NewAlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { Carousel } from 'antd'
import { useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const { albums } = useAppSelector((state) => ({
    albums: state.recommend.newAlbums
  }))

  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const handlePrevClick = () => {
    bannerRef.current?.prev()
  }
  const handleNextClick = () => {
    bannerRef.current?.next()
  }
  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架" morelink="/discover/album" />
      <div className="content">
        <button
          className="sprite_02 arrow arrow_left"
          onClick={handlePrevClick}
        ></button>
        <div className="banner">
          <Carousel dots={false} speed={1200} ref={bannerRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album_list">
                    {albums.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <NewAlbumItem key={album.id} itemData={album} />
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow_right"
          onClick={handleNextClick}
        ></button>
      </div>
    </NewAlbumWrapper>
  )
}

export default NewAlbum
