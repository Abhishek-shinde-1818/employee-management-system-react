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
    
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
    <Typography sx={{color: "black", marginTop:"30px"}}>Ays software solution</Typography>
    <Toolbar sx={{justifyContent: "flex-end"}}>
    
      
    <Button
          
          variant='contained'
          id="1"
          
          sx={{height:"50px"}}
          onClick={(e)=>{props.displayCentre(e.target.id)}}
        >
          Add Employee
        </Button>
    </Toolbar>
  </AppBar>
  </Box>
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