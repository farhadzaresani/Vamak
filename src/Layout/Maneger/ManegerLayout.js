import React from 'react' 
import { Outlet } from 'react-router-dom'
import ManegerNavbar from './ManegerNavbar'
import ManegerSidebar from './ManegerSidebar'
export default function ManegerLayout() {
  return (
    <div>
      <ManegerNavbar/>
      <ManegerSidebar/>
      <Outlet/>
    </div>
  )
}
