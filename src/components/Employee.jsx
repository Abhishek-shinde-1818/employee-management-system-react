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
    <Toolbar empArr={props.empArr} inputValue={inputValue} handleInputChange={handleInputChange} />
    <Employeelist empArr={props.empArr} selectedEmp={props.selectedEmp}  selectEmployee={props.selectEmployee} inputValue={inputValue} handleInputChange={handleInputChange} selectedBt={selectedBt}/>
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
  if (props.emp.id === props.selectedEmp.id){
    color = 'red'
  }else{
    color = 'green'
  }
  function fun(){
    
    props.selectEmployee(props.emp)
  }
  return(
    <button id="2" style={{backgroundColor:color}} className='empbt' onClick={fun}>{props.emp.name}</button>
  )
}

const Employeelist = (props) => {
  
  let clonedArray = props.empArr.map(a => {return {...a}})
  let searchText=props.inputValue
  let selectedBt=props.selectedBt
  
  let newarr=[]
  
  let filteredArr=[]
  function fun(){
    if(selectedBt==="1")
    {
      filteredArr = clonedArray.filter(user => user.name.includes(searchText));
    }
    else if(selectedBt==="2"){
      clonedArray.sort((a, b) => (a.name > b.name) ? 1 : -1)
      filteredArr=clonedArray
    }
    else{
      clonedArray.sort((a, b) => (a.name < b.name) ? 1 : -1)
      filteredArr=clonedArray
    }
    
    for(let i=0;i<filteredArr.length;i++){
     
        newarr.push(<Emp emp={filteredArr[i]} selectedEmp={props.selectedEmp} selectEmployee={props.selectEmployee} key={filteredArr[i].id}/>)
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