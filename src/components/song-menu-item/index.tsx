import React from 'react'
import type { FC, ReactNode } from 'react'
import { SongMenuItemWrapper } from './style'
import { formatCount, getImgSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}

const SongMenuItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <SongMenuItemWrapper>
      <div className="top">
        <img src={getImgSize(itemData.picUrl, 140)} alt={itemData.name} />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </SongMenuItemWrapper>
  )
}

export default SongMenuItem
