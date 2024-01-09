import React from 'react'
import type { FC, ReactNode } from 'react'
import { NewAlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架" morelink="/discover/album" />
      <div className="content">
        <button className="sprite_02 arrow arrow_left"></button>
        <button className="sprite_02 arrow arrow_right"></button>
      </div>
    </NewAlbumWrapper>
  )
}

export default NewAlbum
