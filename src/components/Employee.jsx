import React, { useState } from 'react'
import './employee.css'
const Employee = (props) => {
  
  const [inputValue, setInputValue] = useState("");
  function handleInputChange(e)
  {
    setInputValue(e.target.value)
    
  }

    
      
  return (
    <div className='employee'>
    <Toolbar emparr={props.emparr} inputValue={inputValue} handleInputChange={handleInputChange} />
    <Employeelist emparr={props.emparr} selected={props.selected}  change_selection={props.change_selection} inputValue={inputValue} handleInputChange={handleInputChange}/>
    </div>
  )
}
const Toolbar = (props) => {
  
  return (
    <div className='Toolbar'>
      <input type="text" value={props.inputValue} onChange={props.handleInputChange} />
      <button id="2" className='asc' type='button' >Asc</button>
      <button id="3" className='dsc' type='button' >Dsc</button>
      
    </div>
  )
}
const Emp = (props)=>{
  let color;
  if (props.emp.id === props.selected.id){
    color = 'red'
  }else{
    color = 'green'
  }
  function fun(){
    console.log(props.emp);
    props.change_selection(props.emp)
  }
  return(
    <button style={{backgroundColor:color}} className='empbt' onClick={fun}>{props.emp.name}</button>
  )
}

const Employeelist = (props) => {
  let darr=props.emparr
  let text=props.inputValue
  let newarr=[]
  function fun(){
    for(let i=0 ; i<darr.length ;i++){
      if(text===""){
        newarr.push(<Emp emp={darr[i]} selected={props.selected} change_selection={props.change_selection} key={darr[i].id}/>)
      }
      else if(darr[i].name===text){
      newarr.push(<Emp emp={darr[i]} selected={props.selected} change_selection={props.change_selection} key={darr[i].id}/>)
      }
    }
    return newarr
  }
  
  return (
    <div className='Employeelist'>
      {fun()}
    </div>
  )
}

export default Employee