import { useAppDispatch } from '@/store'
import React, { useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchBannerThunk } from './store'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerThunk())
  }, [])
  return <div>Recommend</div>
}

export default Recommend
