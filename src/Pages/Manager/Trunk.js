import React from 'react'
import Chart from '../../ManagerComponent/Trunk/Chart'
import MgBalance from '../../ManagerComponent/Trunk/MgBalance'
import Transfer from '../../ManagerComponent/Trunk/Transfer'

export default function Trunk() {
  return (
    <div className='bg-[#F8F8F8] flex flex-col mr-[13vw]'>
    <div className='flex my-10 mx-16 justify-between'>
    <Transfer/>
    <MgBalance/>
    </div>
    <div className='flex justify-center'>
    <Chart/>
    </div>
  </div>
  )
}
