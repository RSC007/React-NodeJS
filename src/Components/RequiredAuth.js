import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router'
import useAuth from '../hooks/useAuth'

export const RequiredAuth = () => {
    const { auth } = useAuth()
    const location = useLocation()
  return (
    auth?.username ? 
    <Outlet/>
    : <Navigate to='/login' state={{ from: location }} replace />
  )
}
