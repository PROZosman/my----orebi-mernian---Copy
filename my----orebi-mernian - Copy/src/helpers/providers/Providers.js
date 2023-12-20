"use client"
import store from '@/features/store/store'
import React from 'react'
import { Provider } from 'react-redux'

const Providers = ({Children}) => {
  return (
    <Provider store={store}>{Children}</Provider>
  )
}

export default Providers;