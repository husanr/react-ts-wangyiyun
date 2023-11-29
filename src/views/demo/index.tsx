import React from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  name: string
  age: number
  height?: string
}

const Demo: FC<IProps> = (props) => {
  return (
    <div>
      <h2>demo</h2>
      <div>
        {props.name}---{props.age}---{props.height || 180}
        {props.children}
      </div>
    </div>
  )
}

export default Demo
