import React, { useEffect, useState } from 'react'
import Done from '../../Components/Loans/Done'
import {Link} from 'react-router-dom'

export default function LoanManeger() {

  const[loanName,setLoanName]=useState()
  const[loanPrice,setLoanPrice]=useState()
  const[loanDebt,setLoanDebt]=useState()
  const[loanInfo,setLoanInfo]=useState()
  const [loanData, setLoanData] = useState([])
  const [done,setDone]=useState(false)

  const loanRequest=()=>{
    const clone = [...loanData]
    clone.push(
      {
        loanName,
        loanPrice,
        loanDebt,
        loanInfo
      }
    )
    setLoanData(clone)
    setDone(true)
    
  }
  const closeDone= ()=>{
    setDone(false)
  }

  return (
<>
{
  done
  ?
  <Done
  closeDone={closeDone}
  />
  :
  null
}

    <div dir="rtl" className='mr-[13vw] flex justify-between bg-[#F8F8F8]'>
      <div className='bg-white rounded-lg flex flex-col items-center justify-between my-5 mr-20 w-[27vw] h-[90vh]'> 
        <div className='w-[25vw] flex jusify-center items-center mt-5 '>
          <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>
          <h1>درخواست جدید</h1>
        </div>
        <div className='flex flex-col space-y-5 mt-5'>
          <div className='flex flex-col '>
              <label>عنوان</label>
              <input onChange={(e)=>setLoanName(e.target.value)} className='w-[25vw] h-[6vh] rounded-[5px] border-[1px]'/>
          </div>
          <div className='flex flex-col '>
              <label>مبلق وام:</label>
              <input onChange={(e)=>setLoanPrice(e.target.value)}  className='w-[25vw] h-[6vh] rounded-[5px] border-[1px]'/>
              <label className='absolute mt-7 mr-[22vw] text-orange-400'> ریال</label>
          </div>
          <div className='flex flex-col '>
              <label>تعداد اقساط:</label>
              <input onChange={(e)=>setLoanDebt(e.target.value)}  className='w-[25vw] h-[6vh] rounded-[5px] border-[1px]'/>
              <label className='absolute mt-8 mr-[23vw] text-orange-400'> ماه</label>
          </div>
          <div className='flex flex-col '>
              <label>توضیحات:</label>
              <textarea onChange={(e)=>setLoanInfo(e.target.value)}  className='w-[25vw] h-[20vh] rounded-[5px] border-[1px]'/>
          </div>

        </div>
        <div className=' flex justify-end pb-5 mt-20'>
          <button disabled={!loanName||!loanPrice||!loanDebt||!loanInfo} onClick={()=>loanRequest(loanName,loanPrice,loanDebt,loanInfo)} className='disabled:opacity-50 bg-[#6873AC] w-[25vw] h-[6vh] rounded-sm left-5 text-white'>ثبت</button>
        </div>
      </div>
      <div className='bg-white rounded-md ml-20 mt-5 w-[46vw]'>
        <div className='flex flex-col'>
          <div className='flex jusify-center items-center m-3 '>
            <div className='bg-orange-400 w-[10px] h-[10px] rounded-full ' ></div>
            <h1>تاریخچه وام ها</h1>
          </div>
          <div className='flex justify-between mx-10 mt-5'>
            <button>عنوان وام</button>
            <button>مبلغ کل</button>
            <button> تعداد اقساط</button>
            <button> وضعیت</button>
          </div>
          <div className='h-1 bg-[#F8F8F8] w-[46vw] mt-3'></div>
        </div>
        {

          loanData.length===0
          ?
          <div className='flex justify-center mt-10'>
            <h1 className='text-[22px] opacity-50'>شما تا اکنون هیچ درخواستی برای وام صادر نکرده اید</h1>
          </div>
        :
        <div className=' w-[46vw] mt-5'>

        {loanData.map((item,i)=>{
          
       
          return(
            
            <Link to="/UserDashboard/SingleLoan" key={i} className='hover:border-2  px-10 h-[10vh] flex justify-between items-center odd:bg-white even:bg-slate-50'>

            <p className='' >{item.loanName}</p>
            <p className='' >{item.loanPrice}</p>
            <p className='' >{item.loanDebt}</p>
            <p className='' >{item.loanInfo}</p>
            </Link>
           
            )
          }
        )}
          </div>
        }
      </div>
    </div>
    </>
  )
}
