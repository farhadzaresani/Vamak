import React from 'react'

export default function MSingleLoan() {
  return (
    <div dir='rtl' className='w-[98vw] flex flex-col space-y-6 pb-5 bg-[#F8F8F8]'>
      <div className='bg-white flex justify-between items-center w-[70vw] h-[13vh] rounded-md mt-5 mr-[21vw] '>
        <div className='flex jusify-center items-center mr-5 '>
          <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>
          <h1>گزارش وام فرهاد</h1>
        </div>
        <button className='ml-5 border-[1px] w-[10vw] h-[8vh] rounded-md border-[#6873AC] text-[#6873AC]'>تاریخچه وام ها</button>
      </div>


      <div className='flex justify-between items-center w-[70vw] mr-[21vw]'>
        <div className='bg-white w-[26vw] flex flex-col justify-between items-center py-5  rounded-md h-[90vh]'>


          <div className='flex flex-col '>
              <label>نام :</label>
              <input className='w-[25vw] h-[7vh] rounded-[5px] border-[1px]'/>
            
          </div>
          <div className='flex flex-col '>
              <label>مبلغ :</label>
              <input className='w-[25vw] h-[7vh] rounded-[5px] border-[1px]'/>
              <label className='absolute mt-8 mr-[22vw] text-orange-400'> ریال</label>
          </div>
          <div className='flex flex-col '>
              <label>تعداد اقساط :</label>
              <input className='w-[25vw] h-[7vh] rounded-[5px] border-[1px]'/>
              <label className='absolute mt-8 mr-[22vw] text-orange-400'> ماه</label>
          </div>
          <div>
            <select className='w-[25vw] h-[7vh] rounded-[5px] border-[1px]'>
              <option>همه ی وام ها</option>
              <option>در حال بررسی</option>
              <option>تایید شده</option>
              <option>در حال پرداخت</option>
              <option>تکمیل پرداخت</option>
              <option>لقو</option>
            </select>
          </div>
          <div className='flex flex-col '>
              <label>توضیحات :</label>
              <textarea className='w-[25vw] h-[25vh] rounded-[5px] border-[1px]'/>
          </div>
        </div>
        <div className=' w-[42vw] flex flex-col justify-between rounded-md h-[90vh]'>
          <div className='flex flex-col bg-white rounded-md'>
            <div className='m-3 text-[18px]'><h1>وام جهیزیه</h1></div>
            <div className='m-5 flex justify-between'>
              <p>تاریخ قسط</p>
              <p>مبلغ قسط</p>
              <p>دیرکرد</p>
              <p>وضعیت</p>
            </div>
          </div>
          <div className='bg-white rounded-md h-[71vh] flex justify-center'>
            <h1 className='opacity-30 text-[25px] mt-20'>این وام هنوز تایید نشده است</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
