import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'

const StoreAppWrapper = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default StoreAppWrapper