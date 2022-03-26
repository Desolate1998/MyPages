import { createTheme } from '@mui/material';
import { blue, green, indigo } from '@mui/material/colors';
import React from 'react'

export default createTheme({
  palette: {
    mode: 'light',
    primary: blue,
    secondary: green,

  },
  components:{
    MuiPaper:{
     styleOverrides:{
       root:{
        
         padding:'5px'
       }
     } 
    }
  }
});
