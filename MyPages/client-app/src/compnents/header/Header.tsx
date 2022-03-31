
import { Paper, Switch, Avatar, MenuItem, Tooltip, Menu, Typography, Divider, TextField, Box, OutlinedInput, Grid, Button, Autocomplete, Skeleton, IconButton, } from '@mui/material';
import React, { useState } from 'react'
import { useStore } from '../../domain/store/store';
import styles from './header.module.css';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import FaceIcon from '@mui/icons-material/Face';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate()

  const { siteSettingStore } = useStore();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [searchItems, setsearchItems] = useState<any[]>(['\n','\n','\n','\n','\n'])
  const open = Boolean(anchorEl);
  const changeTheme = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    if (checked) {
      siteSettingStore.setTheme('dark')
    } else {
      siteSettingStore.setTheme('light')
    }
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const renderMenu = (item: any) => {
    return   (
      <>
      <Skeleton variant="rectangular" />
        <br/>
      </>
    
    )
  }
  const handleGetSearchItems =(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{

  }

  return (
    <Paper className={styles.header} square>
      <Grid justifyContent="center" alignItems="center" spacing={2} container >
        <Grid item md={2} xs={2}>
          <IconButton color='primary' onClick={() => navigate('/')}>
            <HomeIcon />
            </IconButton>
        </Grid>
        <Grid item md={8} xs={8}>
          <Autocomplete
            options={searchItems}
            renderOption={renderMenu}
            renderInput={(params) => <TextField      {...params} placeholder='Search...'            onChange={handleGetSearchItems}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <SearchIcon />),
              }}
            />}
          />

        </Grid>
        <Grid item md={2} xs={2} justifyItems='flex-end'>
          <Box display="flex" justifyContent="flex-end">
            <Tooltip title="Account settings">
              <Avatar onClick={handleClick} className={styles.avatar} />
            </Tooltip>
          </Box>
          <Menu
            className={styles.menu}
            anchorEl={anchorEl}
            open={open}
            PaperProps={{
              elevation: 2,
            }}
            onClose={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={()=>{navigate('/profile')
            handleClose()
          }}>
              <FaceIcon className={styles.menu_icon} />
              <Typography variant='subtitle1'>My Profile</Typography>
            </MenuItem>
            <MenuItem>
              <SettingsIcon className={styles.menu_icon} />
              <Typography variant='subtitle1'>User Settings</Typography>
            </MenuItem>
            <Divider />
            <MenuItem>
              <NightsStayIcon className={styles.menu_icon} />
              <Typography>Dark Mode</Typography>
              <Switch onChange={changeTheme} checked={siteSettingStore.theme === 'dark'} />
            </MenuItem>
            <Divider />
            <MenuItem>
              <LogoutIcon className={styles.menu_icon} />
              <Typography variant='subtitle1'>Log Out</Typography>
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>


    </Paper>
  )
}
