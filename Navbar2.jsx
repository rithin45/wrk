import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const Navbar2 = () => {
  return (
    <div>
      <Box>
    <AppBar>
        <Toolbar>
            <Typography>varient="h6" component="div" sx={{flexGrow:1}}</Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Signup</Button>
            <Button color="inherit">Contact</Button>
        </Toolbar>
    </AppBar>
   </Box>
    </div>
  )
}

export default Navbar2
