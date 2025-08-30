import React from 'react'

const Card = (props) => {

  

    // console.log(props.user);
  return (
    <div className='bg-white text-black inline-block text-center border p-6 rounded'>
      <img className='w-24 h-24 rounded-full mx-auto' src={props.profile_photo} alt='Profile' />
      <h1 className='text-2xl font-semibold mb-4'>{props.user}</h1>
      <h2 className='text-2xl font-semibold mb-4'>{props.city}, {props.age}</h2>
      <h3 className='text-2xl font-semibold mb-4'>{props.profession}</h3>
      <button className='bg-emerald-500 text-white py-2 px-4 rounded'>Add friend</button>
    </div>
  )
}

export default Card
