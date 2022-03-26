
import { Badge, Button, Chip, Divider, Grid, Paper, Typography, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import styles from './conteBody.module.css'
const Content = () => {

  return <Paper style={{ height: '100px', marginBottom: '10px' }}></Paper>
}


export const ContentBody = () => {
  return (
    <Grid container spacing={4} padding={1}>
      <Grid item md={3} xs={12}>
      <Paper square style={{position:'sticky',top:'100px'}}>
          <Typography variant='h4'>Content Settings</Typography>
          <Divider />
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Following Only" />
            <FormControlLabel  control={<Checkbox />} label="Streams" />
            <FormControlLabel  control={<Checkbox />} label="Videos" />
            <FormControlLabel  control={<Checkbox />} label="Images" />
            <FormControlLabel  control={<Checkbox color='error' />} label="NSFW" />

          </FormGroup>
        </Paper>
      </Grid>

      <Grid item md={6} xs={12}>
        <div className={styles.chip_container}>

        </div>
        <div className={styles.content_container} >
          <Content />
          <Content />   
          <Content />
          <Content />   
          <Content />
          <Content />   
          <Content />
          <Content />
          <Content />
          <Content />
        </div>



      </Grid>
      <Grid  item md={3} xs={12}>
        <Paper square style={{position:'sticky',top:'100px'}}>

          <Button fullWidth variant='contained'>
            Create New Post
          </Button>
        </Paper>
      </Grid>
    </Grid>
  )
}
