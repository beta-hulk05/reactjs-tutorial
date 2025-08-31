import React, { createContext } from 'react'

export const DataContext = createContext()

const UserContext = ({children}) => {
    // console.log(children)
    const userName = "Sarthak"
  return (
    <div>
        <DataContext.Provider value={userName}>
          {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext
