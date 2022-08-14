import React from 'react'

export default function Others() {
    const reports=[
 
        {
          name:'فرهاد زارع',
          code:'2616',
          title:'جهیزیه',
          cost:'5/000/00',
          phone:'09104803777',
          late:'12',
          
        },
        {
          name:'فرهاد زارع',
          code:'2616',
          title:'جهیزیه',
          cost:'5/000/00',
          phone:'09104803777',
          late:'12',
          
        },
        {
          name:'فرهاد زارع',
          code:'2616',
          title:'جهیزیه',
          cost:'5/000/00',
          phone:'09104803777',
          late:'12',
          
        },
        {
          name:'فرهاد زارع',
          code:'2616',
          title:'جهیزیه',
          cost:'5/000/00',
          phone:'09104803777',
          late:'12',
          
        },
        {
          name:'فرهاد زارع',
          code:'2616',
          title:'جهیزیه',
          cost:'5/000/00',
          phone:'09104803777',
          late:'12',
          
        },
        {
          name:'فرهاد زارع',
          code:'2616',
          title:'جهیزیه',
          cost:'5/000/00',
          phone:'09104803777',
          late:'12',
          
        },
      ]
  return (
    <div>
       <div>
        <div className='bg-white rounded-lg flex flex-col justify-between space-y-4  my-5 w-[76vw] h-[30vh]'> 
      
  
      <div className='flex justify-between pb-[10px] m-5'>
          <label>نام و نام خوانوادگی</label>
          <label>کد ملی</label>
          <label>عنوان</label>
          <label>مبلغ</label>
          <label>شماره</label>
          <label>دیرکرد</label>
      </div>
      <div>
        {
        reports.map((item,i)=>{
          return(
            <div   key={i} className='cursor-pointer flex justify-between items-center px-5 h-[10vh]  even:bg-white odd:bg-slate-50'>
            <p>{item.name}</p>
            <p className='mr-[7vw]'>{item.code}</p>
            <p className='mr-[3vw]'>{item.title}</p>
            <p>{item.cost}</p>
            <p>{item.phone}</p>
            <p>{item.late} روز</p>
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
