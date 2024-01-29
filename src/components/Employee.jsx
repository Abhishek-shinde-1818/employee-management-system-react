import React from 'react'
import './employee.css'
const Employee = (props) => {
  return (
    <div className='employee'>
    <Toolbar/>
    <Employeelist emparr={props}/>
    </div>
  )
}
const Toolbar = () => {
  return (
    <div className='Toolbar'>
      <input id="myInput" />
      <button className='asc' type='button' >Asc</button>
      <button className='dsc' type='button' >Dsc</button>
    </div>
  )
}
const Emp=(props)=>{
  return(
    <button className='empbt'>{props.empdetail.name}</button>
  )
}
const Employeelist = (props) => {

  let newarr=props.emparr.emparr
  let emplist=[]
  function displayemp()
  {
    for(let i=0;i<newarr.length;i++)
    {
    emplist.push(<Emp empdetail={newarr[i]} key={i}/>)
    }
    return emplist
  }
  return (
    <div className='Employeelist'>
      {
        displayemp()
      }
    </div>
  )
}

export default Employee