import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Catalog from './Catalog'


export default function Users() {
  const[editProf, setEditProf]=useState(false)



  const single= ()=>{
    setEditProf(!editProf)
  }

  const [switchPg,setSwitchPg]=useState('0')


  return (

<div dir="rtl" className='mr-[13vw] w-[98vw] h-[100vh] flex   justify-center bg-[#F8F8F8]'>
      <div className='flex flex-col mr-[13vw]'>

      
        <div className='w-[76vw] flex mt-3 justify-between'>
          <button onClick={()=>setSwitchPg('0')} className={`w-[16vw] h-[9vh] rounded-md bg-white ${(switchPg==='0')?'text-orange-500 border-[1px] border-orange-500':''}`}>فهرست</button>
          <button onClick={()=>setSwitchPg('1')} className={`w-[16vw] h-[9vh] rounded-md bg-white ${(switchPg==='1')?'text-orange-500 border-[1px] border-orange-500':''}`}>ساخت کاربر جدید</button>
          <button onClick={()=>setSwitchPg('2')} className={`w-[16vw] h-[9vh] rounded-md bg-white ${(switchPg==='2')?'text-orange-500 border-[1px] border-orange-500':''}`}>در خواست تسویه</button>
          <button onClick={()=>setSwitchPg('3')} className={`w-[16vw] h-[9vh] rounded-md bg-white ${(switchPg==='3')?'text-orange-500 border-[1px] border-orange-500':''}`}>مبالغ دیرکرد</button>
        </div>

   <Catalog
   single={single}
   editProf={editProf}
   switchPg={switchPg}
   />
      </div>
    </div>
  )
}
