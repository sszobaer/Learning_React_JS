import React, { useState } from 'react'

const UseStateHook = () => {
    const [num, setNum] = useState(0)
  return (
    <div className=' '>
    <h1 className='m-3 text-xl font-semibold'>The Number is {num}</h1>
    <button className='m-3 px-4 py-3 text-xl font-semibold bg-gray-600 rounded' onClick={()=>{
      setNum(num+10)
    }}>Increment</button>
    
    <button className='m-3 px-4 py-3 text-xl font-semibold bg-red-600 rounded' onClick={()=>{
      if(num<=0){
        setNum(num)
        return
      } else{
        setNum(num-10)
      }
    }}>Decrement</button>
    <button className='m-3 px-4 py-3 text-xl font-semibold bg-green-600 rounded' onClick={
      () =>{
        setNum(0)
      }
    }>Reset</button>
    </div> 
  )
}

export default UseStateHook
