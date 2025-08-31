import React from 'react'
import Header from './components/header.jsx'
import Section from './components/section.jsx'
import Footer from './components/footer.jsx'
// import { use } from 'react'
import { DataContext } from './context/UserContext.jsx'
import { useContext } from 'react'


const App = () => {
  const data = useContext(DataContext)
  console.log(data)
  return (
    <div>
      <h1>This is app.jsx {data}</h1>
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App
