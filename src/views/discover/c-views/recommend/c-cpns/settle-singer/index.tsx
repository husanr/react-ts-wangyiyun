import React from 'react'
import type { FC, ReactNode } from 'react'
import { SettleSingerWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = () => {
  return (
    <SettleSingerWrapper>
      <AreaHeaderV2
        title="入驻歌手"
        moreText="查看更多 &gt;"
        moreLink="#/discover/singer"
      />
    </SettleSingerWrapper>
  )
}

export default SettleSinger
