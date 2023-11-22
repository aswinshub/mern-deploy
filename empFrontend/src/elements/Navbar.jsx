
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      

      <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
     
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Employee
        </Typography>
        <Button color="inherit"><Link style={{textDecoration:'none',color:'white'}} to={'/employee'}>Employee</Link></Button>
   
        <Button color="inherit"><Link style={{textDecoration:'none',color:'white'}} to={'/'}>Log Out</Link></Button>

      </Toolbar>
    </AppBar>
  </Box>
    </div>
  )
}

export default Navbar
