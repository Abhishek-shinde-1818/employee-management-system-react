import React from 'react'
import './employee.css'
import EmpForm from './EmpForm'
import EditForm from './EditForm'



const EmpDetails = (props) => {
  function display(){
    
  if(props.selectedCentre==="1") 
  {
    
    return(<EmpForm updateData={props.updateData} addemp={props.addemp} empobj={props.empobj}/>)
    
  }
  else if(props.selectedCentre==="2")
  {
    return(<EditForm selectedEmp={props.selectedEmp}/>)
  }
  else if(props.selectedCentre==="3") {
    return(<EmpTable selectedEmp={props.selectedEmp} displayCentre={props.displayCentre} delEmp={props.delEmp}/>)
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
  <button id="2" className='edit' onClick={props.displayCentre}>edit</button>
  <button id="3" className='delete' onClick={props.delEmp}>delete</button>
  </div>
  </>
  )
}

export default EmpDetails