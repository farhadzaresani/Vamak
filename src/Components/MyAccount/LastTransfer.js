import React from 'react'

export default function LastTransfer() {
  return (
    <div className='bg-white rounded-lg w-[50%] h-[55vh] mt-10 ml-[6vw]'>
      <div className='flex justify-end items-center m-5 space-x-2'>
        <h1>انتقالات آخر</h1>
        <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>
      </div>
      <div className='flex justify-center items-center h-[60%]  '>
        <p className='opacity-50 text-[25px]'>شما تا اکنون انتقالی نداشته اید</p>
      </div>
    </div>
  )
}
