import React from 'react'

export default function Blance() {
  return (
    <div className='bg-white rounded-md w-[45vw] h-[45vh] m-10 mr-[10vw]'>
      <div className='flex justify-end items-center m-5 space-x-2'>
        <h1>موجودی</h1>
        <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-green-700 text-[40px]'>0</h1>
        <p>ریال</p>
      </div>
      <div className='flex items-center justify-between my-5  '>
        <div><div className='flex text-[12px]'>روز<div className='text-orange-500'>30</div>:زمان پرداخت حق عضویت</div></div>
        <div><div className='flex text-[12px]'>ریال<div className='text-orange-500'>1/000/000</div>:مبلغ قابل پرداخت برای حق عضویت در سامانه  </div></div>
      </div>
      <div className='flex justify-center items-center'>
        <button className='text-green-600 border-[1divx] border-green-600 rounded-lg w-[18vw] h-[7vh]'>واریز</button>
      </div>
    </div>
  )
}
