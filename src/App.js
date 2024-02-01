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
    },
    {
      id:4,
      name:"abhishek",
      salary:30000,
      dept:"IT"
    },
    {
      id:5,
      name:"bhairav",
      salary:30000,
      dept:"IT"
    }
  ])
  
  
  function addemp(newEmpobj)
  {
    let empId=employees.length + 1
    let temp=JSON.parse(JSON.stringify(employees))
    newEmpobj["id"]=empId
    temp.push(newEmpobj)
    console.log("ok",newEmpobj);
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
      <Employee empArr={employees} selectedEmp={selectedEmp} selectEmployee={selectEmployee} displayCentre={displayCentre}/>
      <EmpDetails selectedEmp={selectedEmp} selectedCentre={selectedCentre} addemp={addemp} displayCentre={displayCentre} />
      
      </div>
     
                  
    </div>
  )
}

export default App