import React, { useState } from 'react'

const App = () => {
const submitHandler = (e)=>{
  e.preventDefault();
  console.log("submitted :D")
  console.log(name)
  setname("")
}

const [name, setname] = useState(" aryan bhai body builder ")

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input
        value = {name}
        onChange = {(e)=>{
          // console.log(e.target.value)
          setname(e.target.value)
        }}
        className='px-4 py-3 rounded text-xl m-5' type='text' placeholder='Enter your name here' />
        <button className='px-4 py-3 m-5 bg-blue-500 text-xl font-semibold text-white ml-2'>Submit</button>
      </form>
    </div>
  )
}

export default App
