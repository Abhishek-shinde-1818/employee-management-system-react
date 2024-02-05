import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import EmpDetails from './components/EmpDetails.jsx'
import Employee from './components/Employee.jsx'

const App = () => {
  
  

  const obj={
    text:"ays software solution",
  }
  const[employees,updatedEmployees] = useState([])
 
  const[selectedEmp,setSelectedEmp] = useState({})
  function selectEmployee(employee){
    setSelectedEmp(employee)
    
  }
  
  useEffect(()=>{
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log("get respone",response)
        return response.json();
      })
      .then((result) => {
        updatedEmployees(result)
        
      })
      .catch((error)=>{
        console.log("ddddddddddddddddddddddddddddd",error);
      })
},[]);

  function addemp(newEmpobj)
  {
    setSelectedEmp({})
    let empId=employees.length + 1
    let temp=JSON.parse(JSON.stringify(employees))
    newEmpobj["id"]=empId
    temp.push(newEmpobj)
    console.log("ok",newEmpobj);
    updatedEmployees(temp)
    setSelectedCentre("")
  }
  function delEmp()
  {
    let tempArr=JSON.parse(JSON.stringify(employees))
    tempArr=tempArr.filter(employee => {
      
      return employee.id !== selectedEmp.id;
    });
    updatedEmployees(tempArr)
    setSelectedCentre("")
  }
  
  
  
  //selected employee state
  
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
      <EmpDetails selectedEmp={selectedEmp} selectedCentre={selectedCentre} addemp={addemp} displayCentre={displayCentre} setSelectedEmp={setSelectedEmp} delEmp={delEmp} />
      
      </div>
     
                  
    </div>
  )
}

export default App