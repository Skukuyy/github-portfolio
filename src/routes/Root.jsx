import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
    <Sidebar />
    <Outlet />
    </>
  )
}
