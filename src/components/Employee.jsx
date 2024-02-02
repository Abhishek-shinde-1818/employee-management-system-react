import React, { useState } from 'react'
import './employee.css'
const Employee = (props) => {
  const [selectedBt, setselectedBt]=useState("")
  const [inputValue, setInputValue] = useState();
  function handleInputChange(e)
  {
    setInputValue(e.target.value)  
    
  }
  function onSort(sortDirection)
  {
    console.log(sortDirection)
    setselectedBt(sortDirection)
  }

      
  return (
    <div className='employee'>
    <Toolbar empArr={props.empArr} inputValue={inputValue} handleInputChange={handleInputChange} onSort={onSort} selectedBt={selectedBt}/>
    <Employeelist empArr={props.empArr} selectedEmp={props.selectedEmp}  selectEmployee={props.selectEmployee} inputValue={inputValue} handleInputChange={handleInputChange} selectedBt={selectedBt} displayCentre={props.displayCentre} />
    </div>
  )
}
const Toolbar = (props) => {
  
  return (
    <div className='Toolbar'>
      <input  type="text" value={props.inputValue} onChange={props.handleInputChange} />
      <button  className='asc' type='button' style={{backgroundColor: props.selectedBt==="asc" ? "red" : "green"}} onClick={()=>props.onSort("asc")} >Asc</button>
      <button  className='dsc' type='button' style={{backgroundColor: props.selectedBt==="dsc" ? "red" : "green"}} onClick={()=>props.onSort("dsc")}>Dsc</button>
    
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
  function fun(e){
    props.selectEmployee(props.emp)
    props.displayCentre(e)

  }
  return(
    <button id="3" style={{backgroundColor:color}} className='empbt' onClick={fun}>{props.emp.name}</button>
  )
}

const Employeelist = (props) => {
  
  let clonedArray = [...props.empArr]
  let searchText=props.inputValue
  let selectedBt=props.selectedBt
  
  let newarr=[]
  
  
  function fun(){
    if(searchText!==undefined)
    {
      clonedArray = clonedArray.filter(user => user.name.includes(searchText));
    }
    if(selectedBt==="asc"){
      clonedArray.sort((a, b) => (a.name > b.name) ? 1 : -1)
      
    }
    else if(selectedBt==="dsc"){
      clonedArray.sort((a, b) => (a.name < b.name) ? 1 : -1)
     
    }
    
    for(let i=0;i<clonedArray.length;i++){
     
        newarr.push(<Emp emp={clonedArray[i]} selectedEmp={props.selectedEmp} selectEmployee={props.selectEmployee} key={clonedArray[i].id} displayCentre={props.displayCentre}/>)
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