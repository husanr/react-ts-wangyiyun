import React, { useState } from 'react'
import type { FC, ReactNode } from 'react'
import { BarControl, BarFavor, BarInfo, PlayerBarWrapper } from './style'
import { Link } from 'react-router-dom'
import { Slider } from 'antd'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play"></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarInfo>
          <Link to="/player">
            <img
              className="image"
              src="http://p1.music.126.net/6NPQ6TfoXlu9c-JHokhtOg==/109951169067700687.jpg?param=34y34"
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song_name">The Last Train To Milky Way</span>
              <span className="singer_name">鲸鱼马戏团</span>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="current">00:11</span>
                <span className="divider">/</span>
                <span className="duration">07:14</span>
              </div>
            </div>
          </div>
        </BarInfo>
        <BarFavor>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarFavor>
      </div>
    </PlayerBarWrapper>
  )
}

export default AppPlayerBar
