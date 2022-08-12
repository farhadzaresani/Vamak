import React from 'react'

export default function LastActions() {
  return (
    <div className='bg-white rounded-lg w-[20vw] h-[45vh] mt-10 ml-[10vw]'>
      <div className='flex justify-end items-center m-5 space-x-2'>
        <h1>رویداد آخر</h1>
        <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>
      </div>
      <div className='flex justify-center items-center h-[60%]  '>
        <p className='opacity-50 text-[25px]'>رویدادی رخ نداده است</p>
      </div>
    </div>
  )
}
