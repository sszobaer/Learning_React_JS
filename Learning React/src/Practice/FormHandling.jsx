import React, { useState } from 'react'

const FormHandling = () => {

    const [name, setname] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(name)
        setname('') // Clear the input field after submission
    }

  return (
    <div>
      <form 
      className='flex flex-col'
      onSubmit={(e)=>{
        submitHandler(e) // Call the submit handler
      }}> 
        <input 
        value={name}
        onChange={(e)=>{
            setname(e.target.value)
            console.log(e.target.value) // Log the input value
        }}
        className = 'px-4 py-3 text-xl m-3 rounded' 
        type="text" placeholder='Enter Your Name' />
        <button className='m-3 px-4 py-3 text-xl bg-green-600 rounded'>Submit</button>
      </form>
    </div>
  )
}

export default FormHandling
