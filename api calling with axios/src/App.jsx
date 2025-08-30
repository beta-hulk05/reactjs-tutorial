import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    // Function to fetch data from API
    console.log("Hello")
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
    console.log(response) // this is a form of promise data i.e. ascnchronous form mein data aayega
    // without async await, console will print "promise pending"

    const data = response.data
    console.log(data) // this will print the actual data from the API
    setData(data)
  }
  // automatically chal jayega
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='p-8'>
      {/* <button onClick={getData} className='bg-teal-600 text-white font-semibold text-2xl py-3 px-6 rounded active:scale-90'>Get Data</button> */}

      <div className='mt-5 p-5 bg-gray-950 rounded'>
        {data.map(function(elem, idx){
          return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
            <img src={elem.download_url} alt={elem.author} className='h-40' />
            <h1 className='text-2xl font-bold'>{elem.author}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
