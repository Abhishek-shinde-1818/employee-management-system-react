import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import EmpDetails from './components/EmpDetails.jsx'
import Employee from './components/Employee.jsx'
const App = () => {
  const obj={
    text:"ays software solution",
  }
  return (
    <div className="demo">
      <Navbar obj={obj}/>
      <div className='main'>
      <Employee/>
      <EmpDetails/>
      </div>
     
                  
    </div>
  )
}

export default App