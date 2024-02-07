import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import EmpDetails from './components/EmpDetails.jsx'
import Employee from './components/Employee.jsx'
import { Stack } from '@mui/material'





const App = () => {
  
  

  const obj={
    text:"ays software solution",
  }
  const[employees,updatedEmployees] = useState([])
 
  const[selectedEmp,setSelectedEmp] = useState({})
  function selectEmployee(employee){
    setSelectedEmp(employee)
    
  }
  
  useEffect(()=>{
  //1-by creating new promise
    // let myPromise=new Promise(function(resolve,reject){
    //    let res=fetch('https://beac44418a474413bca57f1418382ddd.api.mockbin.io/')
    //   //  resolve(res)
    //    reject("eeeeeeeeeee")
    // })
    // myPromise.then((res)=>{
    //   console.log(res);
    //   return res.json();
    // })
    // .then((data)=>{
    //   updatedEmployees(data)
    // })
    // .catch((error)=>{
    //   console.log("eeeeee",error);
    // })
  
  //2-by directly using promises
    // fetch('https://beac44418a474413bca57f1418382ddd.api.mockbin.io/')
    //   .then((response) => {
    //     console.log("get respone",response)
    //     return response.json();
    //   })
    //   .then((result) => {
    //     updatedEmployees(result)
        
    //   })
    //   .catch((error)=>{
    //     console.log("ddddddddddddddddddddddddddddd",error);
    //   })
    
  //3-by using async and await
    const myFun = async() =>{
      try{
        let response= await fetch('https://beac44418a474413bca57f1418382ddd.api.mockbin.io/')
        console.log("get respone",response);
        let res= await response.json()
        updatedEmployees(res)
      }
      
      catch(error){
         console.log("API not fetch",error);
      }
    }
    myFun()

  //4-by using promises.all method to execute multiple promises simultaniously
  // const fetchData1 = () => {
  //   return new Promise((resolve, reject) => {
     
  //     setTimeout(() => {
  //       const result = { message: 'Data 1 fetched successfully' };
  //       resolve(result);
  //     }, 2000); 
  //   });
  // };
  // const fetchData2 = () => {
  //   return new Promise((resolve, reject) => {
      
  //     setTimeout(() => {
  //       const result = { message: 'Data 2 fetched successfully' };
  //       resolve(result);
  //     }, 3000); 
  //   });
  // };
  // Promise.all([fetchData1(),fetchData2()])
  // .then(([res1,res2])=>{
  //   console.log(res1);
  //   console.log(res2);
  // })
  // .catch((error)=>{
  //   console.log("error occured",error);
  //})
},[]);

  function addemp(newEmpobj)
  {
    setSelectedEmp({})
    let empId=employees.length + 1
    let temp=JSON.parse(JSON.stringify(employees))
    newEmpobj["id"]=empId
    temp.push(newEmpobj)
    console.log("ok",newEmpobj);
    updatedEmployees(temp)
    setSelectedCentre("")
  }
  function delEmp()
  {
    let tempArr=JSON.parse(JSON.stringify(employees))
    tempArr=tempArr.filter(employee => {
      
      return employee.id !== selectedEmp.id;
    });
    updatedEmployees(tempArr)
    setSelectedCentre("")
  }
  function editEmployee(editedEmpobj)
  {
    
    let tempArr=JSON.parse(JSON.stringify(employees))
    let empIndex=tempArr.findIndex(obj => obj.id === selectedEmp.id);
    console.log("index found",empIndex)
    
    tempArr[empIndex]=editedEmpobj
    console.log("curr obj",tempArr[empIndex]);
    updatedEmployees(tempArr)
    setSelectedCentre("")

  }
 
  
  
  
  //selected employee state
  
  // state for centre div
  const[selectedCentre,setSelectedCentre]=useState("")
  function displayCentre(e)
  {
    
    setSelectedCentre(e.target.id)
  }
  return (
    <>
      
      <Navbar obj={obj} displayCentre={displayCentre} />
      <Stack 
      direction="row">
      <Employee empArr={employees} selectedEmp={selectedEmp} selectEmployee={selectEmployee} displayCentre={displayCentre}/>
      <EmpDetails selectedEmp={selectedEmp} selectedCentre={selectedCentre} addemp={addemp} displayCentre={displayCentre} setSelectedEmp={setSelectedEmp} delEmp={delEmp} editEmployee={editEmployee} />
      
      </Stack>
     
                  
    </>
  )
}

export default App