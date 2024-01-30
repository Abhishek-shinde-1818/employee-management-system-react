import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import EmpDetails from './components/EmpDetails.jsx'
import Employee from './components/Employee.jsx'
const App = () => {
  const obj={
    text:"ays software solution",
  }
  const[employees,u_employees] = useState([
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
    },
    {
      id:3,
      name:"bhargav",
      salary:50000,
      dept:"ENGG"
    }
  ])
  const[selected,ch_sel] = useState({})
  function change_selection(change){
    ch_sel(change)
  }
  return (
    <div className="demo">
      <Navbar obj={obj}/>
      <div className='main'>
      <Employee emparr={employees} selected={selected} change_selection={change_selection}/>
      <EmpDetails selectedemp={selected}/>
      </div>
     
                  
    </div>
  )
}

export default App