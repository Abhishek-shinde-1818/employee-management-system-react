import React from 'react'
import './navbar.css'
import EmpDetails from './EmpDetails'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';


const Navbar = (props) => {
  
  
  return (
    
    <AppBar sx={{direction:"row"}} >
    
    

          <Button
          color='inherit'
          variant='contained'
          id="1"
          sx={{color: "black"}}
          onClick={props.displayCentre}
        >
          Add Employee
        </Button>
    <Typography sx={{color: "black"}}>Ays software solution</Typography>

   
      </AppBar>
     
  )
}

export default Navbar;








// import React from 'react'
// import './navbar.css'
// import EmpDetails from './EmpDetails'
// const Navbar = (props) => {
  
  
//   return (
//     <div className='navbar'>
//       <h1>{props.obj.text} </h1>
//       <button id="1" className='addemp' type='button' onClick={props.displayCentre}>Add Emp</button>
//     </div>
//   )
// }

// export default Navbar