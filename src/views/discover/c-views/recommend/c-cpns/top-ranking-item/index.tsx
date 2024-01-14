import React from 'react'
import type { FC, ReactNode } from 'react'
import { TopRankItemWrapper } from './style'
import { getImgSize } from '@/utils/format'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongDetailThunk } from '@/views/player/store'

interface IProps {
  children?: ReactNode
  itemData: any
}

const TopRankingItem: FC<IProps> = (props) => {
  const { itemData } = props
  const { tracks = [] } = itemData

  const dispatch = useAppDispatch()
  const handlePlayMusic = (id: number) => {
    dispatch(fetchCurrentSongDetailThunk(id))
  }
  return (
    <TopRankItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getImgSize(itemData.coverImgUrl, 100)} alt="" />
          <a href="" className="sprite_cover header_cover"></a>
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <div>
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="item" key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="title">
                <div className="song_name">{item.name}</div>
                <div className="operator">
                  <button
                    className="btn sprite_02 play"
                    onClick={() => handlePlayMusic(item.id)}
                  ></button>
                  <button className="btn sprite_icon2 add"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">
        <a href="#/discover/ranking">查看全部&gt;</a>
      </div>
    </TopRankItemWrapper>
  )
}

export default TopRankingItem
