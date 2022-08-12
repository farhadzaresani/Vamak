import React from 'react'
import Blance from '../../Components/UserHome/Blance'
import LastActions from '../../Components/UserHome/LastActions'
import Tips from '../../Components/UserHome/Tips'

export default function HomeManager() {
  return (
    <div className='bg-[#F8F8F8] flex flex-col mr-[13vw]'>
      <div className='flex justify-between'>
      <LastActions/>
      <Blance/>
      </div>
      <div className='flex justify-center'>
      <Tips/>
      </div>
    </div>
  )
}
