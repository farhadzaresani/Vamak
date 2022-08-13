import React from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function MgBalance() {
    const percentage = 10;
  return (
    <div className='bg-white rounded-md w-[40vw] h-[55vh] m-10 mr-[6vw]'>
    <div className=' flex flex-col items-center'>
    <div className=''>
        <div className=' w-[35vw] flex justify-end items-center m-5 space-x-2 '>
            <h1 className='font-bold text-[20px]'>موجودی</h1>
            <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>
        </div>
            <div className='mr-5 space-y-5   '>

            </div>
        </div>
        <div className='  w-[15vw]'>
            <CircularProgressbar value={percentage} text={`${percentage}%`}
            strokeWidth={12}
            styles={buildStyles({
            textSize: "10px",
            textColor: "#000000",
            pathColor: "#313757",
            trailColor: "#FC8B18",
            
            })}
            />
        </div>
     
    
    </div>
    <div className='my-5'>
    <div className='flex items-center justify-between mx-5  '>
        <div><div className='flex items-center text-[12px]'>ریال<div className='text-orange-500'>10/000/000</div>:مبلغ ثابت <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>  </div></div>
        <div><div className='flex items-center text-[12px]'>ریال<div className='text-orange-500'>5/000/000</div>:مجموع موجودی کاربران <div className='bg-[#313757] w-[10px] h-[10px] rounded-full ' ></div></div></div>
    </div>
    
    </div>
    <div className='flex justify-center m-5 text-[12px]'>
    <div><div className='flex items-center text-[12px]'>ریال<div className='text-orange-500'>10/000/000</div>:مبلغ وام داده شده </div></div>
    
    </div>
</div>
  )
}
