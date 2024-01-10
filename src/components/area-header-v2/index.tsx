import React from 'react'
import type { FC, ReactNode } from 'react'
import { AraeHeaderV2Wrapper } from './style'

interface IProps {
  children?: ReactNode
  title?: string
  moreText?: string
  moreLink?: string
}

const AreaHeaderV2: FC<IProps> = (props) => {
  const { title, moreText, moreLink } = props
  return (
    <AraeHeaderV2Wrapper>
      <h3 className="title">{title}</h3>
      <a href={moreLink}>{moreText}</a>
    </AraeHeaderV2Wrapper>
  )
}

export default AreaHeaderV2
