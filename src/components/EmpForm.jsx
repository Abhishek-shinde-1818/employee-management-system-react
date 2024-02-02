import React, { useState } from 'react'
import './empdetails.css'
const EmpForm = (props) => {
  const[newEmpobj,setNewEmpobj]=useState({})
  
  function updateData(e)
  {
let temp= JSON.parse(JSON.stringify(newEmpobj))
temp[e.target.name]= e.target.value
setNewEmpobj(temp)
    
  }
  
  function onsubmit()
  {
   
    if(newEmpobj.name!==undefined && newEmpobj.salary!==undefined && newEmpobj.dept!==undefined)
    {
      props.addemp(newEmpobj)
    }
    
  }
  
  return (
    <div className='empform'>
      <form >
        <label>
          Name:
          <input
            id="1"
            type="text"
            name="name"
            onChange={updateData}  
            required
          />
          
        </label>
        <br />
        <label>
          Salary:
          <input
          id="2"
            type="number"
            name="salary"
            onChange={updateData}
            required
          />
        </label>
        <br />
        
        <label>
          Department:
          <select
          id="4"
            name="dept"
            onChange={updateData}
          >
            
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            
          </select>
        </label>
        <br />
        <button onClick={onsubmit}>Submit</button>
      </form>   
    </div>
  )
}

export default EmpForm