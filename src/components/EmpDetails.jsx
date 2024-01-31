import React from 'react'
import './employee.css'
import EmpForm from './EmpForm'



const EmpDetails = (props) => {
  function display(){
  if(props.selectedCentre==="1") 
  {
    return(<EmpForm updateData={props.updateData} addemp={props.addemp} empobj={props.empobj}/>)
  }
  else {
    return(<EmpTable selectedEmp={props.selectedEmp}/>)
  }
} 
  return (
    <div className='empdetails'>
    {
       display()
    }
    
    </div> 
  )
}
const EmpTable = (props) => {
  return(
    <>
    <table>
    <tbody>
      <tr>
        <td>Name:</td>
        <td>{props.selectedEmp.name}</td>
      </tr>
      <tr>
        <td>Salary:</td>
        <td>{props.selectedEmp.salary}</td>
      </tr>
      <tr>
        <td>Department:</td>
        <td>{props.selectedEmp.dept}</td>
      </tr>
    </tbody>
  </table>
    
  <div className='buttons'>
  <button className='edit'>edit</button>
  <button className='delete'>delete</button>
  </div>
  </>
  )
}

export default EmpDetails