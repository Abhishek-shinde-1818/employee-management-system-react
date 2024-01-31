import React from 'react'
import './navbar.css'
import EmpDetails from './EmpDetails'
const Navbar = (props) => {
  
  
  return (
    <div className='navbar'>
      <h1>{props.obj.text} </h1>
      <button id="1" className='addemp' type='button' onClick={props.displayCentre}>Add Emp</button>
    </div>
  )
}

export default Navbar