import React from 'react'
import { Login } from './Form/Login'
import { Sign } from './Form/Sign'
import './Style/Layout.css'

export const Layout = () => {
  return (
    <div className='container'>
      <Login />
      {/* <Sign /> */}
    </div>
  )
}
