import React from 'react'

export default function Done({closeDone}) {
  return (
    <>
    <div onClick={closeDone} className='fixed z-10 opacity-50 top-0  right-0 bg-black w-[100%] h-[100vh]' ></div>
    <div className=' absolute z-20 bg-white rounded-lg left-[25vw] top-[35vh] w-[40vw] h-[30vh]  ' > 
        <div className='flex flex-col items-center justify-between h-[20vh] my-5'>
        <h1>اطلاعات شما به موفقیت ثبت شد</h1>
        <button onClick={closeDone} className='bg-[#35EB28] w-[6vw] h-[5vh] rounded-sm text-white '>تایید</button>
        </div>
    </div>
  </>
  )
}
