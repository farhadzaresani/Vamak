import React from 'react'

export default function Reports() {
  const reports=[
    {
      title:'قسط شماره یک',
      num:'29563',
      date:'1400/03/01',
      cost:'5/000/00',
      type:'واریز'
    },
    {
      title:'قسط شماره یک',
      num:'29563',
      date:'1400/03/01',
      cost:'5/000/00',
      type:'واریز'
    },
    {
      title:'قسط شماره یک',
      num:'29563',
      date:'1400/03/01',
      cost:'5/000/00',
      type:'واریز'
    },
    {
      title:'قسط شماره یک',
      num:'29563',
      date:'1400/03/01',
      cost:'5/000/00',
      type:'واریز'
    },
    {
      title:'قسط شماره یک',
      num:'29563',
      date:'1400/03/01',
      cost:'5/000/00',
      type:'واریز'
    },
  ]
  return (
    <div dir="rtl" className='mr-[13vw] w-[98vw] h-[100vh] flex  justify-center bg-[#F8F8F8]'>
      <div className='bg-white rounded-lg flex flex-col justify-between space-y-4 mr-[13vw] my-5 w-[70vw] h-[30vh]'> 
        <div className='w-[65vw] flex jusify-center items-center m-5 '>
          <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>
          <h1>گزارشات</h1>
        </div>
        <div className='w-[43vw] m-5 flex justify-between'>
          <input   type='date' className='border-[1px] w-[16vw] h-[7vh] rounded-md'/>
          <input   type='date' className='border-[1px] w-[16vw] h-[7vh] rounded-md'/>
          <button className='border-[1px] border-[#6873AC] text-[#6873AC] w-[8vw] h-[7vh] rounded-md'>اعمال فیلتر</button>
        </div>
        <div className='flex justify-between pb-[10px] m-5'>
            <label>عنوان گردش</label>
            <label>شماره پیگیری</label>
            <label>تاریخ گردش مالی</label>
            <label>مبلغ انتقال یافته</label>
            <label>وضعیت گردش</label>
        </div>
        <div>
          {
          reports.map((item,i)=>{
            return(
              <div key={i} className='flex justify-between items-center px-5 h-[10vh]  odd:bg-white even:bg-slate-50'>
              <p>{item.title}</p>
              <p>{item.num}</p>
              <p>{item.date}</p>
              <p>{item.cost}</p>
              <p className='text-green-500'>{item.type}</p>
            </div>
              )
          })

          }
        </div>
      </div>
    </div>
  )
}
