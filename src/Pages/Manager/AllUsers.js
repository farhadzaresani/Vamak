import React from 'react'

export default function AllUsers({single}) {
    const reports=[
        {
          title:'فرهاد زارع',
          num:'29563',
          phone:'09104803777',
          date:'1400/03/01',
          cost:'5/000/00',
        },
        {
          title:'فرهاد زارع',
          num:'29563',
          phone:'09104803777',
          date:'1400/03/01',
          cost:'5/000/00',
        },
        {
          title:'فرهاد زارع',
          num:'29563',
          phone:'09104803777',
          date:'1400/03/01',
          cost:'5/000/00',
        },
        {
          title:'فرهاد زارع',
          num:'29563',
          phone:'09104803777',
          date:'1400/03/01',
          cost:'5/000/00',
        },
        {
          title:'فرهاد زارع',
          num:'29563',
          phone:'09104803777',
          date:'1400/03/01',
          cost:'5/000/00',
        },
      ]
  return (
    <div>
        <div className='bg-white rounded-lg flex flex-col justify-between space-y-4  my-5 w-[76vw] h-[30vh]'> 
      
      <div className='w-[43vw] m-5 flex justify-between'>
        <input   type='text' placeholder='نام و نام خوانوادگی' className='border-[1px] w-[16vw] h-[7vh] rounded-md'/>
      
      </div>
      <div className='flex justify-between pb-[10px] m-5'>
          <label>نام و نام خوانوادگی</label>
          <label>کد ملی</label>
          <label>شماره تلفن</label>
          <label>تاریخ ثبت نام</label>
          <label>مبلغ موجودی</label>
      </div>
      <div>
        {
        reports.map((item,i)=>{
          return(
            <div onClick={single}  key={i} className='cursor-pointer flex justify-between items-center px-5 h-[10vh]  even:bg-white odd:bg-slate-50'>
            <p>{item.title}</p>
            <p className='mr-[4vw]'>{item.num}</p>
            <p className=''>{item.phone}</p>
            <p className='ml-[2vw]'>{item.date}</p>
            <p>{item.cost}</p>
          </div>
            )
        })

        }
      </div>
    </div>
    </div>
  )
}
