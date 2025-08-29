import React, { useState } from 'react'


const App = () => {

  const [Number, setNumber] = useState(0)

  return (
    <div>
      <h2 className='text-5xl bg-pink-700 text-black'>Number is {Number}</h2>
      <button onClick={function(){
        setNumber(Number + 1)
      }}>Increment</button>
      <button onClick={function(){
        setNumber(Number - 1)
      }}>Decrement</button>
    </div>
  )
}

export default App

