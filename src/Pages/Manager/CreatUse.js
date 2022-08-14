import React from 'react'

export default function CreatUse() {
  return (
    <div  dir="rtl"  className='bg-white w-[76vw] rounded-md my-5'>
    <div className='flex justify-between m-5 '>
      <div className='flex jusify-center items-center '>
        <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>
        <h1>پروفایل</h1>
      </div>
      <div className='flex'>

      <h1 className='underline text-orange-400 ml-5'>ویرایش</h1>
      
      </div>
    </div>
    <div>
      <div className=' flex justify-between items-center  mx-[5vw] mt-10'>
        <div className='space-y-10 '>
          <div className='flex flex-col '>
            <label>:نام</label>
            <input className='w-[30vw] h-[6vh] rounded-sm border-[1px]'/>
          </div>
          <div className='flex flex-col'>
            <label>:نام</label>
            <input className='w-[30vw] h-[6vh] rounded-sm border-[1px]'/>
          </div>
          <div className='flex flex-col '>
            <label>شماره تلفن:</label>
            <input className='w-[30vw] h-[6vh] rounded-sm border-[1px]'/>
          </div>
          <div className='flex flex-col'>
            <label>:آدرس محل سکونت</label>
            <input className='w-[30vw] h-[6vh] rounded-sm border-[1px]'/>
          </div>
        </div>
        <div className='space-y-10'>
          <div className='flex flex-col'>
            <label>:نام</label>
            <input className='w-[30vw] h-[6vh] rounded-sm border-[1px]'/>
          </div>
          <div className='flex flex-col'>
            <label>:کد ملی</label>
            <input className='w-[30vw] h-[6vh] rounded-sm border-[1px]'/>
          </div>
          <div className='flex flex-col'>
            <label>:شماره تلفن ثابت</label>
            <input className='w-[30vw] h-[6vh] rounded-sm border-[1px]'/>
          </div>
          <div className='flex flex-col'>
            <label>:کد پستی</label>
            <input className='w-[30vw] h-[6vh] rounded-sm border-[1px]'/>
          </div>
        </div>
      </div>

      <div> 
          <div className='flex flex-col mr-5 mt-10'>
            <label>:رمز عبور</label>
            <div className='flex'>
              <button  className='absolute mt-1 mr-[22vw] text-orange-400'>تغییر رمز عبور</button>
              <input type="password" className='w-[30vw] h-[6vh] rounded-sm border-[1px]'/>
            </div>
          </div>
      </div>

    </div>

    <div className=' flex justify-end'>
      <button  className='bg-[#6873AC] w-[9vw] h-[7vh] rounded-sm left-5 ml-5 my-10 text-white'>ثبت</button>
    </div>
  </div>  
  )
}
