import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import EmpDetails from './components/EmpDetails.jsx'
import Employee from './components/Employee.jsx'
const App = () => {
  const obj={
    text:"ays software solution",
  }
  const[employees,updatedEmployees] = useState([
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
  
  
  function addemp(newEmpobj)
  {
    
    let temp=JSON.parse(JSON.stringify(employees))
    
    temp.push(newEmpobj)
    updatedEmployees(temp)
    setSelectedCentre("")
  }
  
  
  
  //selected employee state
  const[selectedEmp,setSelectedEmp] = useState({})
  function selectEmployee(employee){
    setSelectedEmp(employee)
    
  }
  // state for centre div
  const[selectedCentre,setSelectedCentre]=useState("")
  function displayCentre(e)
  {
    setSelectedCentre(e.target.id)
  }
  return (
    <div className="demo">
      <Navbar obj={obj} displayCentre={displayCentre} />
      <div className='main'>
      <Employee empArr={employees} selectedEmp={selectedEmp} selectEmployee={selectEmployee} />
      <EmpDetails selectedEmp={selectedEmp} selectedCentre={selectedCentre} addemp={addemp}  />
      </div>
     
                  
    </div>
  )
}

export default App