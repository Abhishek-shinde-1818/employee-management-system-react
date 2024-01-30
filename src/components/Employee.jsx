import React, { useState } from 'react'
import './employee.css'
const Employee = (props) => {
  const [selectedBt, setselectedBt]=useState("")
  const [inputValue, setInputValue] = useState("");
  function handleInputChange(e)
  {
    setInputValue(e.target.value)  
    setselectedBt(e.target.id)
  }

      
  return (
    <div className='employee'>
    <Toolbar emparr={props.emparr} inputValue={inputValue} handleInputChange={handleInputChange} />
    <Employeelist emparr={props.emparr} selected={props.selected}  change_selection={props.change_selection} inputValue={inputValue} handleInputChange={handleInputChange} selectedBt={selectedBt}/>
    </div>
  )
}
const Toolbar = (props) => {
  
  return (
    <div className='Toolbar'>
      <input id="1" type="text" value={props.inputValue} onChange={props.handleInputChange} />
      <button id="2" className='asc' type='button' onClick={props.handleInputChange} >Asc</button>
      <button id="3" className='dsc' type='button' onClick={props.handleInputChange}>Dsc</button>
      
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
  let selectedBt=props.selectedBt
  console.log(selectedBt)
  let newarr=[]
  
  let filtered=[]
  function fun(){
    if(selectedBt==="1")
    {
      filtered = darr.filter(user => user.name.includes(text));
    }
    else if(selectedBt==="2"){
      darr.sort((a, b) => (a.name > b.name) ? 1 : -1)
      filtered=darr
    }
    else{
      darr.sort((a, b) => (a.name < b.name) ? 1 : -1)
      filtered=darr
    }
    
    for(let i=0;i<filtered.length;i++){
     
        newarr.push(<Emp emp={filtered[i]} selected={props.selected} change_selection={props.change_selection} key={darr[i].id}/>)
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