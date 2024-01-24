import React from 'react'
import './navbar.css'

import EmpDetails from './EmpDetails'
const Navbar = ({obj}) => {
  
  
  return (
    <div className='navbar'>
      <h1>{obj.text} </h1>
      <button className='addemp' type='button' onClick={EmpDetails}>Add Emp</button>
    </div>
  )
}

export default Navbar