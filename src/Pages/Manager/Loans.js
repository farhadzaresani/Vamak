import React from 'react'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

export default function Loans() {
  const reports=[
    {
      name:'فرهاد زارع',
      num:'29563',
      loanTitle:'جهیزیه',
      cost:'5/000/00',
      date:'1400/03/01',
      type:"در حال بررسی"
    },
    {
      name:'فرهاد زارع',
      num:'29563',
      loanTitle:'جهیزیه',
      cost:'5/000/00',
      date:'1400/03/01',
      type:"در حال بررسی"
    },
    {
      name:'فرهاد زارع',
      num:'29563',
      loanTitle:'جهیزیه',
      cost:'5/000/00',
      date:'1400/03/01',
      type:"در حال بررسی"
    },
    {
      name:'فرهاد زارع',
      num:'29563',
      loanTitle:'جهیزیه',
      cost:'5/000/00',
      date:'1400/03/01',
      type:"در حال بررسی"
    },
    {
      name:'فرهاد زارع',
      num:'29563',
      loanTitle:'جهیزیه',
      cost:'5/000/00',
      date:'1400/03/01',
      type:"در حال بررسی"
    },
  ]
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div dir='rtl' className='w-[98vw] h-[40vw] flex flex-col justify-between bg-[#F8F8F8]'>
      <div className='w-[73vw] h-[15vw] bg-white mt-5 mr-[19vw] rounded-md '>
        <div>
          <div className='flex justify-between m-5'>
            <div className='flex jusify-center items-center '>
              <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>
              <h1>تاریخچه وام ها</h1>
            </div>
            <div className='flex'>
              <input placeholder='نام و نام خوانوادگی' className='  w-[15vw] h-[7vh] rounded-md border-[1px]'/>
            
                <select className='w-[10vw] mr-3 h-[7vh] rounded-md border-[1px]'>
                  <option>وام ها</option>
                  <option>در حال بررسی</option>
                  <option>در انتظار پرداخت</option>
                </select>
              
            </div>
          </div>
          <div className='flex justify-between m-5'>
            <h1>نام و نام خوانوادگی</h1>
            <h1>کد ملی</h1>
            <h1>عنوان وام</h1>
            <h1>مبلغ وام</h1>
            <h1>تاریخ درخواست</h1>
            <h1>وضعیت</h1>
          </div>
        </div>
        <div>
        {
        reports.map((item,i)=>{
          return(
            <Link to={'/ManagerDashboard/MSingleLoan'}  key={i} className='cursor-pointer flex justify-between items-center px-5 h-[10vh]  even:bg-white odd:bg-slate-50'>
            <p>{item.name}</p>
            <p className='mr-[5vw]'>{item.num}</p>
            <p className='mr-[1vw]'>{item.loanTitle}</p>
            <p className='mr-[2vw]'>{item.cost}</p>
            <p className='mr-[]'>{item.date}</p>
            <p>{item.type}</p>
          </Link>
            )
        })

        }
        </div>
      </div>
      <div className=' flex justify-end'>
        <div className=' text-[20px] ml-[6vw] mb-8 bg-white rounded-md mt-8  w-[24vw] flex justify-between items-center h-[6vh]'>
          <button>{'<'}</button>
          <button>1</button>
          <button>...</button>
          <button>2</button>
          <button>3</button>
          <button className='bg-blue-800 text-white w-[3vw] h-[6vh] '>4</button>
          <button>5</button>
          <button>6</button>
          <button>...</button>
          <button>15</button>
          <button>{">"}</button>
        </div>
      </div>
    </div>
  )
}
