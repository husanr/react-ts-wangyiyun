import React, { useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { BarControl, BarFavor, BarInfo, PlayerBarWrapper } from './style'
import { Link } from 'react-router-dom'
import { Slider } from 'antd'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { getImgSize } from '@/utils/format'
import { getPlayUrl } from '@/utils/player'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong
    }),
    shallowEqual
  )

  // 副作用
  useEffect(() => {
    // 播放音乐
    audioRef.current!.src = getPlayUrl(2101373186)
    // audioRef.current
    //   ?.play()
    //   .then(() => {
    //     console.log('播放成功')
    //     setIsPlaying(true)
    //   })
    //   .catch((error) => {
    //     setIsPlaying(false)
    //     console.log('播放失败', error)
    //   })

    // 设置总时长
    setDuration(currentSong.dt)
  }, [currentSong])

  const handlePlayBtnClick = () => {
    console.log(isPlaying ? '播放' : '暂停')
    // 播放和暂停
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    console.log('update')
    const currentTime = audioRef.current!.currentTime * 1000
    const progress = (currentTime / duration) * 100
    setProgress(progress)
  }

  const handleTimeEnded = () => {
    console.log('ended')
  }
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button className="btn sprite_playbar prev"></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarInfo>
          <Link to="/player">
            <img
              className="image"
              src={getImgSize(currentSong.al.picUrl, 34)}
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song_name">{currentSong.name}</span>
              <span className="singer_name">{currentSong.ar[0].name}</span>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                step={0.5}
                tooltip={{ formatter: null }}
              />
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
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleTimeEnded}
      />
    </PlayerBarWrapper>
  )
}

export default AppPlayerBar
