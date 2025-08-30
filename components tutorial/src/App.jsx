import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Card from './components/Card'


const App = () => {
//  const user = "Sarthak"
const users = [
  {
    "name": "Aarav Mehta",
    "age": 24,
    "city": "Mumbai",
    "profession": "Software Developer",
    "profile_photo": "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    "name": "Riya Sharma",
    "age": 22,
    "city": "Bangalore",
    "profession": "Graphic Designer",
    "profile_photo": "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    "name": "Kabir Singh",
    "age": 29,
    "city": "Delhi",
    "profession": "Marketing Manager",
    "profile_photo": "https://randomuser.me/api/portraits/men/56.jpg"
  },
  {
    "name": "Ananya Verma",
    "age": 26,
    "city": "Pune",
    "profession": "Data Analyst",
    "profile_photo": "https://randomuser.me/api/portraits/women/62.jpg"
  },
  {
    "name": "Devansh Kapoor",
    "age": 31,
    "city": "Hyderabad",
    "profession": "Entrepreneur",
    "profile_photo": "https://randomuser.me/api/portraits/men/77.jpg"
  }
]

  return (
    <>
      <Navbar />
      <div>
        {users.map(function(user) {
          return (
            <Card key={user.name} user={user.name} age={user.age} city={user.city} profile_photo={user.profile_photo} profession={user.profession} />
          );
        })}
      </div>
      <Footer />
    </>
  )
}

export default App

    
