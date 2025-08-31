import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
      <div className="py-7 px-10 bg-emerald-400 text-white flex items-center justify-between">
        <h2 className="text-2xl font-bold">Bhavay <input className='bg-emerald-300 text-black' /></h2>
        <div className='flex gap-10'>
            {/* <a className='text-xl underline' href='/'>Home</a>
            <a className='text-xl underline' href='/about'>About</a>
            <a className='text-xl underline' href='/product'>Product</a>
            <a className='text-xl underline' href='/contact'>Contact</a> */}

            <Link to="/contact" className='text-xl underline'>Contact</Link>
            <Link to="/about" className='text-xl underline'>About</Link>
            <Link to="/product" className='text-xl underline'>Product</Link>
            <Link to="/" className='text-xl underline'>Home</Link>
        </div>
      </div>
      
    
  )
}

export default Header
