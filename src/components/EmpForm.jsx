import React from 'react'
import './empdetails.css'
const EmpForm = () => {
  return (
    <div className='empform'>
      <form >
        <label>
          Name:
          <input
            type="text"
            name="name"
            
            
            required
          />
        </label>
        <br />
        <label>
          Salary:
          <input
            type="number"
            name="salary"
           
            required
          />
        </label>
        <br />
        <label>
          Designation:
          <input
            type="text"
            name="designation"
           
            required
          />
        </label>
        <br />
        <label>
          Department:
          <select
            name="department"
           
          >
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            {/* Add more departments as needed */}
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>   
    </div>
  )
}

export default EmpForm