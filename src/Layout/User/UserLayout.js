import React from 'react'
import UserNavbar from './UserNavbar'
import UserSidebar from './UserSidebar'
import {Outlet} from "react-router-dom";

export default function UserLayout() {
  return (
    <div>
         <UserNavbar/>
      <UserSidebar />
      <Outlet/>
    </div>
  )
}
