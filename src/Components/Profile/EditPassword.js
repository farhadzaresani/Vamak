import React, { useState } from 'react'
import EnterNumber from './EnterNumber'
import GetCode from './GetCode'

export default function EditPassword({closeEditModal}) {
  
    const[getCode,setGetCode]=useState(false)
    const[inputNum,setInputNum]=useState()

    const nextStep=()=>{
        setGetCode(true) 
    }

  return (
    <>



    {
        getCode
        ?
        <GetCode 
        closeEditModal={closeEditModal}
        inputNum={inputNum}
        />
        :
        <EnterNumber
        closeEditModal={closeEditModal}
        nextStep={nextStep}
        inputNum={inputNum}
        setInputNum={setInputNum}
        />
    }
    
  </>
  )
}
