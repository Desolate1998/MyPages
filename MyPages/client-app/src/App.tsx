import React from 'react';
import './App.css';
import { Avatar, Button, createTheme, makeStyles, PaletteMode, Paper, Switch, TextField, ThemeProvider, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import lightTheme from './domain/theme/lightTheme';
import darkTheme from './domain/theme/darkTheme';
import { useStore } from './domain/store/store';
import { Header } from './compnents/header/Header';
import { ContentBody } from './compnents/contentBody/ContentBody';
import { Route, Routes } from 'react-router-dom';
import { Profile } from './compnents/profile/Profile';


function App() {
  const { siteSettingStore } = useStore();

 

  return (
    <ThemeProvider theme={siteSettingStore.theme === 'dark' ? darkTheme : lightTheme} >
        <Header/>
        <Routes>
        <Route path="/" element={<ContentBody />} />
        <Route path="Profile" element={<Profile />} />
      </Routes>
    </ThemeProvider>
  );
}



export default observer(App);


