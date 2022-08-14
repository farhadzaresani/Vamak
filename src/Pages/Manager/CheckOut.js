import React from 'react'

export default function CheckOut() {
    const reports=[
        {
          title:'فرهاد زارع',
          phone:'09104803777',
          cost:'5/000/00',
          num:'5022-2913-0713-5895',
          
        },
        {
          title:'فرهاد زارع',
          phone:'09104803777',
          cost:'5/000/00',
          num:'5022-2913-0713-5895',
          
        },
        {
          title:'فرهاد زارع',
          phone:'09104803777',
          cost:'5/000/00',
          num:'5022-2913-0713-5895',
          
        },
        {
          title:'فرهاد زارع',
          phone:'09104803777',
          cost:'5/000/00',
          num:'5022-2913-0713-5895',
          
        },
        {
          title:'فرهاد زارع',
          phone:'09104803777',
          cost:'5/000/00',
          num:'5022-2913-0713-5895',
          
        },
      ]
  return (
    <div>
       <div>
        <div className='bg-white rounded-lg flex flex-col justify-between space-y-4  my-5 w-[76vw] h-[30vh]'> 
      
      <div className='w-[43vw] m-5 flex justify-between'>
        <input   type='text' placeholder='نام و نام خوانوادگی' className='border-[1px] w-[16vw] h-[7vh] rounded-md'/>
      
      </div>
      <div className='flex justify-between pb-[10px] m-5'>
          <label>نام و نام خوانوادگی</label>
          <label>شماره </label>
          <label> موجودی</label>
          <label>شماره کارت</label>
          <label>وضعیت</label>
      </div>
      <div>
        {
        reports.map((item,i)=>{
          return(
            <div  key={i} className='cursor-pointer flex justify-between items-center px-5 h-[10vh]  even:bg-white odd:bg-slate-50'>
            <p>{item.title}</p>
            <p className='mr-[5vw]'>{item.phone}</p>
            <p>{item.cost}</p>
            <p className=''>{item.num}</p>
            <div className='flex gap-3 text-blue-700'>
                <button>تایید</button>
                <button>لغو</button>
            </div>
          </div>
            )
        })

        }
      </div>
    </div>
    </div>
    </div>
  )
}
