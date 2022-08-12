import React from 'react'

export default function Tips() {
  return (
    <div className=' bg-white rounded-lg w-[67vw] mb-10 '>
      <div className='border-b-[4px] border-[#F8F8F8]'>
        <div className='flex justify-end items-center m-2 space-x-2'>
            <h1 className='font-bold'>قسط های پیش رو</h1>
            <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>
        </div>
        <div className='flex justify-between my-6 items-center mx-6'>
            <button>پرداخت</button>
            <button>دیرکرد اقساط</button>
            <button>مبلغ قسط</button>
            <button>اقساط باقی مانده</button>
            <button>تاریخ زمان پرداخت</button>
            <button>عنوان وام</button>
        </div>
      </div>
      <div className='h-[40vh] flex justify-center items-center '>
        <h1 className='mb-20 opacity-60'>شما وام فعالی ندارید</h1>
      </div>
      <div></div>
    </div>
  )
}
