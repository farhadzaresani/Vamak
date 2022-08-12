import React from 'react'
import { Link,useLocation } from "react-router-dom";

export default function UserSidebar() {

  const location=useLocation()
  console.log(location.pathname)

  return (
    <div className='bg-[#313757] w-[13vw] h-[100vh] flex justify-between fixed right-0 top-0'>
      <div className='flex flex-col my-5 items-end justify-between'>

          <div className='ml-4 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="131" height="80" viewBox="0 0 161 89">
            <g id="Group_346" data-name="Group 346" transform="translate(-12.17 -16)">
              <g id="logoipsum-logo-50" transform="translate(93.17 16)">
                <path id="Path_81" data-name="Path 81" d="M.879,50.537V9.394L23.1,20.823v18.4L40.879,48.48l17.778-9.257v-18.4L80.879,9.394V50.537l-40,20.572Z" transform="translate(-0.879 17.891)" fill="#fff"/>
                <path id="Path_82" data-name="Path 82" d="M11.99,27.512.879,21.531,40.879,0l40,21.531L69.768,27.512v31.7L40.879,75.358,11.99,59.209Zm56.574.648-9.908,5.333v-.12L40.879,23.684,23.1,33.373v.12L13.194,28.16V58.547L40.879,74.022,68.564,58.547Z" transform="translate(-0.879)" fill="#ff8000" fillRule="evenodd"/>
              </g>
              <text id="وامک" transform="translate(44.17 66)" fill="#fff" fontSize="28" fontFamily="SegoeUI, Segoe UI"><tspan x="-31.568" y="0">وامک</tspan></text>
            </g>
          </svg>
          </div>

          <div className='text-white flex flex-col space-y-10 items-end'>

            <div>
              <Link className={`${(location.pathname==='/UserDashboard')?'text-orange-500':''}`} to="">خانه</Link>
            </div>
            <div>
              <Link className={`${(location.pathname==='/UserDashboard/Profile')?'text-orange-500':''}`} to="Profile">پروفایل</Link>
            </div>
            <div>
              <Link className={`${(location.pathname==='/UserDashboard/MyAccount')?'text-orange-500':''}`} to="MyAccount">حساب من</Link>
            </div>
            <div>
              <Link className={`${(location.pathname==='/UserDashboard/MyLoans')?'text-orange-500':''}`} to="MyLoans">وام</Link>
            </div>
            <div>
              <Link className={`${(location.pathname==='/UserDashboard/Report')?'text-orange-500':''}`} to="Report">گزارشات</Link>
            </div>

          </div>

          <div className='text-white'>
            <Link to="/">خروج از حساب</Link>
          </div>
      </div>
    </div>
  )
}
