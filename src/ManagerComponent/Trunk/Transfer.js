import React, { useState } from 'react'

export default function Transfer() {


    const[pill,setPill]=useState(false)
    const change=()=>{
        setPill(true)
    }
    const changeTwo=()=>{
        setPill(false)
    }


  return (
    <div className='bg-white flex flex-col justify-between items-center rounded-md w-[37vw] h-[55vh]  '>
      <div>
        <div className='flex '>
            <div className={`w-[50%] flex justify-center border-b-2  text-[24px] ${pill?'border-orange-500 text-orange-500':'opacity-50' }  `}>
                <button onClick={change} className={`${pill?'':'opacity-50'}`}>دریافت</button>
            </div>
            <div className={`w-[50%] flex justify-center border-b-2 ${!pill?'border-orange-500 text-orange-500':'opacity-50' } text-[24px] `}>
                <button className={`${!pill?'':'opacity-50'}`} onClick={changeTwo} >واریز</button>
            </div>
        </div>
        <div>
        <div className='flex flex-col justify-center items-center  mt-5 '>
              <label className='w-[30vw] flex justify-end'>:مبلغ</label>
              <input   className='w-[30vw] h-[7vh] rounded-[5px] border-[1px]'/>
              <label className='absolute mt-6 mr-[26vw] text-orange-400'> ریال</label>
          </div>
        </div>
      </div>
      
      <div>
        <button className='border-[1px] w-[30vw] h-[7vh] rounded-md text-green-500 border-green-500'>پرداخت</button>
      </div>
    </div>
  )
}
