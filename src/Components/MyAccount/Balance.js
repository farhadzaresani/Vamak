import React from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Balance() {
    const percentage = 10;


    
  return (
    <div className='bg-white rounded-md w-[50%] h-[55vh] m-10 mr-[6vw]'>
        <div className=' flex justify-between'>
            <div className=' m-6'>
                {/* <div className='w-[16vw] h-[35vh] bg-[#F8F8F8] flex justify-center items-center rounded-full'>
                <div className='w-[13vw] h-[28vh] bg-white rounded-full font-bold flex flex-col justify-center items-center' >
                    <p>0</p>
                    <p>ریال</p>
                </div>
                </div> */}


<CircularProgressbar value={percentage} text={`${percentage}%`}
strokeWidth={12}
styles={buildStyles({
    textSize: "10px",
    textColor: "#000000",
    pathColor: "#313757",
    trailColor: "#FC8B18",
  })}
/>;
            </div>
            <div className='mt-5'>
            <div className='flex justify-end items-center m-5 space-x-2 '>
                <h1 className='font-bold text-[20px]'>موجودی</h1>
                <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>
            </div>
                <div className='mr-5 space-y-5   '>

                    <div className='flex justify-end items-center space-x-[9vw]'>
                        <div className='flex justify-end items-center  '>
                            <p>ریال</p>
                            <p>0</p>
                        </div>
                        <div className='flex justify-end items-center space-x-2 '>
                            <h1>:حق عضویت</h1>
                            <div className='bg-[#313757] w-[10px] h-[10px] rounded-full ' ></div>
                        </div>
                    </div> 

                    <div className='flex justify-end w-[20vw] items-center space-x-[11vw] ' >
                        <div className='flex justify-end items-center  '>
                            <p>ریال</p>
                            <p>0</p>
                        </div>
                        <div className=' flex justify-end  items-center space-x-2 '>
                            <h1>:پس انداز</h1>
                            <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        <div className='flex items-center justify-between mx-5  '>
            <div><div className='flex text-[12px]'>ریال<div className='text-orange-500'>1/000/000</div>:مبلغ قابل پرداخت برای حق عضویت در سامانه  </div></div>
            <div><div className='flex text-[12px]'>روز<div className='text-orange-500'>30</div>:زمان پرداخت حق عضویت</div></div>
        </div>
        <div className='flex justify-end m-5 text-[12px]'>
            <p>1400 / 01 / 15</p>
            <p>:تاریخ ثبت حساب</p>
        </div>
    </div>
  )
}
