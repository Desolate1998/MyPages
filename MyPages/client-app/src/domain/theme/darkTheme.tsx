import { createTheme } from '@mui/material';
import { amber, blue, green, grey, indigo } from '@mui/material/colors';
import React from 'react'

export default createTheme({
  palette: {
    mode: 'dark',
    primary: blue,
    secondary: green,

  },
  components:{
    MuiPaper:{
     styleOverrides:{
       root:{
         backgroundColor:'#2f333b',
         padding:'5px'
       }
     } 
    }
  }
});


