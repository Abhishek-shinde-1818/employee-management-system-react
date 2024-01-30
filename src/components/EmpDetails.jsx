import React from 'react'
import './employee.css'


const EmpDetails = (props) => {
  
  return (
    <div className='empdetails'>
    
    {
      <table>
      <tbody>
        <tr>
          <td>Name:</td>
          <td>{props.selectedemp.name}</td>
        </tr>
        <tr>
          <td>Salary:</td>
          <td>{props.selectedemp.salary}</td>
        </tr>
        <tr>
          <td>Department:</td>
          <td>{props.selectedemp.dept}</td>
        </tr>
      </tbody>
    </table>
    }
    <div className='buttons'>
    <button className='edit'>edit</button>
    <button className='delete'>delete</button>
    </div>
    </div>
  )
}

export default EmpDetails