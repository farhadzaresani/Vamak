import React from 'react'
import AllUsers from './AllUsers'
import CheckOut from './CheckOut'
import CreatUse from './CreatUse'
import Others from './Others'
import UserPage from './UserPage'

export default function Catalog({single,editProf,switchPg}) {

    {if (switchPg==='0')
        return (
    <div>
       {
           editProf
      ?
      <UserPage
      single={single}
      />
      :
      <AllUsers
      single={single}
      />
         }
    </div>
  )
}
{if (switchPg==='1')
return(
    <CreatUse 
    />
)}
{if(switchPg==='2')
return(
    <CheckOut
    single={single}
    />
)}
{if(switchPg==='3')
return (
    <Others
    single={single}
    />
)}

}
