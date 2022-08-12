import React from 'react'

export default function SingleLoan() {
    console.log('object')
  return (
    <div dir='rtl' className='bg-[#F8F8F8] w-[98vw] flex h-[100vh]'>

    <div className=' bg-white rounded-md  w-[80vw] ml-[7vw] mr-[20vw] my-3'>
        <div className='flex  flex-col mx-3 my-3 items-center'>
            <div className='w-[67vw] flex justify-between'>
                <div className=' flex jusify-center items-center'>
                    <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>
                    <h1>اقساط وام جهیزیه</h1>
                </div>
                <button className='w-[10vw] h-[7vh] border-[1px] rounded-md text-[12px] border-[#6873AC] text-[#6873AC]'>تاریخچه وام ها</button>
            </div>
            <div className='flex w-[65vw] justify-between items-center mt-10'>
                <p className='text-[#6873AC]'>درحال بررسی</p>
                <p className='text-orange-400'>- - - - - - - - - - - - - - - -</p>
                <p className='text-orange-400'>تایید شده</p>
                <p className='opacity-10'>- - - - - - - - - - - - - - - -</p>
                <p className='opacity-10'>درحال پرداخت</p>
                <p className='opacity-10'>- - - - - - - - - - - - - - - -</p>
                <p className='opacity-10'>پرداخت شده</p>
            </div>
            <div className='flex justify-between w-[67vw] my-10 '>
                <div className='flex '>
                    <p className='ml-2'>مبلغ وام:</p>
                    <p>5000 ریال</p>
                </div>
                <div className='flex '>
                    <p className='ml-2'>مبلغ وام:</p>
                    <p>5000 ریال</p>
                </div>
                <div className='flex '>
                    <p className='ml-2'>مبلغ وام:</p>
                    <p>5000 ریال</p>
                </div>
                <div className='flex '>
                    <p className='ml-2'>مبلغ وام:</p>
                    <p>5000 ریال</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex justify-between px-10 py-5 w-[100%] border-[#F8F8F8] border-y-[2px]'>
                <h1>شماره</h1>
                <h1>شماره</h1>
                <h1>شماره</h1>
                <h1>شماره</h1>
                <h1>شماره</h1>
            </div>
            <div className='mt-20'>
                <h1 className='text-xl opacity-30'>شما هنوز وام خورد را دریافت نکرده اید</h1>
            </div>
        </div>
    </div>
    </div>
  )
}
