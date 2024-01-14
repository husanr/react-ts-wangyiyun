import React, { useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { BarControl, BarFavor, BarInfo, PlayerBarWrapper } from './style'
import { Link } from 'react-router-dom'
import { Slider, message } from 'antd'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { formatPlayTime, getImgSize } from '@/utils/format'
import { getPlayUrl } from '@/utils/player'
import { changeLyricIndexAction } from '../store'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState<number>(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setIsSliding] = useState(false)

  const { currentSong, lyrics, lyricIndex } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex
    }),
    shallowEqual
  )
  const dispatch = useAppDispatch()

  // 副作用
  useEffect(() => {
    // 播放音乐
    audioRef.current!.src = getPlayUrl(currentSong.id)
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

  // 音乐播放
  const handlePlayBtnClick = () => {
    // console.log(isPlaying ? '播放' : '暂停')
    // 播放和暂停
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    // console.log('update')
    const currentTime = audioRef.current!.currentTime * 1000
    if (!isSliding) {
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)
    }

    // 匹配歌词
    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]
      if (lyric.time > currentTime) {
        index = i - 1
        break
      }
    }

    // 避免进度更新时重复匹配歌词
    if (lyricIndex === index || index === -1) return
    dispatch(changeLyricIndexAction(index))

    message.open({
      content: lyrics[index].text,
      key: 'lyric',
      duration: 0
    })
  }

  const handleTimeEnded = () => {
    console.log('ended')
  }

  // 操作进度条
  const handleSliderChanging = (value: number) => {
    // console.log(value)
    setIsSliding(true)
    setProgress(value)
    const current = (value / 100) * duration
    setCurrentTime(current)
  }
  const handleSliderChanged = (value: number) => {
    // console.log(value)
    const current = (value / 100) * duration
    // 设置进度
    setCurrentTime(current)
    setProgress(value)
    setIsSliding(false)
    audioRef.current!.currentTime = current / 1000
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
              src={getImgSize(currentSong.al?.picUrl, 34)}
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song_name">{currentSong.name}</span>
              <span className="singer_name">{currentSong.ar?.[0].name}</span>
            </div>
            <div className="progress">
              <Slider
                step={0.5}
                value={progress}
                tooltip={{ formatter: null }}
                onChange={handleSliderChanging}
                onChangeComplete={handleSliderChanged}
              />
              <div className="time">
                <span className="current">{formatPlayTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatPlayTime(duration)}</span>
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
