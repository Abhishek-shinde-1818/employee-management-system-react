import React, { useState } from 'react'
import './employee.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Box, Button, Grid, Paper, TextField } from '@mui/material';

const Employee = (props) => {
  const [selectedBt, setselectedBt] = useState("")
  const [inputValue, setInputValue] = useState();
  function handleInputChange(e) {
    setInputValue(e.target.value)

  }
  function onSort(sortDirection) {
    console.log(sortDirection)
    setselectedBt(sortDirection)
  }


  return (
  
    <Paper elevation={3} sx={{ width:"25%"}}>
      <Toolbar1 empArr={props.empArr} inputValue={inputValue} handleInputChange={handleInputChange} onSort={onSort} selectedBt={selectedBt} />
      <Employeelist empArr={props.empArr} selectedEmp={props.selectedEmp} selectEmployee={props.selectEmployee} inputValue={inputValue} handleInputChange={handleInputChange} selectedBt={selectedBt} displayCentre={props.displayCentre} />
    </Paper>
  )
}
const Toolbar1 = (props) => {

  return (
    <Grid 
     direction={'row'} justifyContent={'space-between'} marginTop={"10px"} marginLeft={"5px"}>
     
      <TextField id="standard-basic" label="search" variant="standard" value={props.inputValue} onChange={props.handleInputChange} />
      
      <Button variant={props.selectedBt === "asc" ? "contained" : "outlined"}
       onClick={() => props.onSort("asc")} >Asc</Button>
      <Button variant={props.selectedBt === "dsc" ? "contained" : "outlined"}
       onClick={() => props.onSort("dsc")}>Dsc</Button>
   </Grid>
   
  )
}
const Emp = (props) => {
  let color1;
  if (props.emp.id === props.selectedEmp.id) {
    color1 = "contained"
  } else {
    color1 = 'outlined'
  }
  function fun(id) {
    props.selectEmployee(props.emp)

    console.log("fun exe", props.emp)
    props.displayCentre(id)

  }
  return (
    <ListItem >
      <Button id="3"
        variant={color1}
        //color={color1}
        //  sx={{bgcolor:color1}} 
        onClick={(e) => fun(e.target.id)}>{props.emp.name}</Button>
    </ListItem>
  )
  {/* <button id="3" style={{backgroundColor:color}} className='empbt' onClick={fun}>{props.emp.name}</button> */ }

}

const Employeelist = (props) => {

  let clonedArray = [...props.empArr]
  let searchText = props.inputValue
  let selectedBt = props.selectedBt

  let newarr = []


  function fun() {
    if (searchText !== undefined) {
      clonedArray = clonedArray.filter(user => user.name.includes(searchText));
    }
    if (selectedBt === "asc") {
      clonedArray.sort((a, b) => (a.name > b.name) ? 1 : -1)

    }
    else if (selectedBt === "dsc") {
      clonedArray.sort((a, b) => (a.name < b.name) ? 1 : -1)

    }

    for (let i = 0; i < clonedArray.length; i++) {

      newarr.push(<Emp emp={clonedArray[i]} selectedEmp={props.selectedEmp} selectEmployee={props.selectEmployee} key={clonedArray[i].id} displayCentre={props.displayCentre} />)
    }
    return newarr
  }

  return (
    <div className='Employeelist'>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {fun()}
      </List>
    </div>
  )
}
export default Employee