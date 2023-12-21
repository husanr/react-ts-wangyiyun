import apiRequest from '@/service'
import React, { useEffect } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Mine: FC<IProps> = () => {
  useEffect(() => {
    apiRequest.get({ url: '/banner' }).then((res) => {
      console.log(res)
    })
  }, [])
  return <div>Mine</div>
}

export default Mine
