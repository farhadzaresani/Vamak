import React from 'react'
import Balance from '../../Components/MyAccount/Balance'
import LastTransfer from '../../Components/MyAccount/LastTransfer'
import Request from '../../Components/MyAccount/Request'

export default function MyAccountManeger() {
  return (
    <div className='bg-[#F8F8F8] flex flex-col mr-[13vw]'>
      <div className='flex justify-between'>
      <LastTransfer/>
      <Balance/>
      </div>
      <div className='flex justify-center'>
      <Request/>
      </div>
    </div>
  )
}
