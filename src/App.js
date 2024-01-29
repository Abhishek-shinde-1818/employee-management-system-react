import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import EmpDetails from './components/EmpDetails.jsx'
import Employee from './components/Employee.jsx'
const App = () => {
  const obj={
    text:"ays software solution",
  }
  const employees=[
    {
      id:1,
      name:"abhi",
      salary:30000,
      dept:"IT"
    },
    {
      id:2,
      name:"rohan",
      salary:35000,
      dept:"ENGG"
    }
  ]
  return (
    <div className="demo">
      <Navbar obj={obj}/>
      <div className='main'>
      <Employee emparr={employees}/>
      <EmpDetails/>
      </div>
     
                  
    </div>
  )
}

export default App