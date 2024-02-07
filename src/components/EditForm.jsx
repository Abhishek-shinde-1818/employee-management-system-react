import React, { useState } from 'react'

const EditForm = (props) => {

const[editedEmpobj,setEditedEmpobj]=useState({})
const[editedName,setEditedName]=useState(props.selectedEmp.name)
const[editedSalary,seteditedSalary]=useState(props.selectedEmp.salary)
const[editedDept,setEditeddept]=useState(props.selectedEmp.dept)
function editedata(e)
{
 if(e.target.id==="1")
 {
  setEditedName(e.target.value)
 }
 else if(e.target.id==="2")
 {
  seteditedSalary(e.target.value)
 }
 else{
  setEditeddept(e.target.value)
 }
 
let temp= JSON.parse(JSON.stringify(editedEmpobj))
temp[e.target.name]= e.target.value
setEditedEmpobj(temp)
}
  return (
    <div className='empform'>
      
        <label>
          Name:
          <input
            id="1"
            type="text"
            name="name"
            value={editedName}
            onChange={editedata}
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
            value={editedSalary}
            onChange={editedata}
            required
          />
        </label>
        <br />
        
        <label>
          Department:
          <select
          id="4"
            name="dept"
            value={editedDept}
            onChange={editedata}
            required
          >
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            
          </select>
        </label>
        <br />
        <button onClick={()=>props.editEmployee(editedEmpobj)}>Submit</button>
       
    </div>
  )
}

export default EditForm