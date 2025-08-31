import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext' // Replace with the actual path to your DataContext file

const Header = () => {
    const data = useContext(DataContext)
  return (
    <div>
      <h1>This is header.jsx {data}</h1>
    </div>
  )
}

export default Header
