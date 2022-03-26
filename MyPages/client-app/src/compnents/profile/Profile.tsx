import { Avatar, Button, Divider, Fab, Grid, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'
import styles from './profile.module.css'
import { SocialIcon } from 'react-social-icons';
import EditIcon from '@mui/icons-material/Edit';
export const Profile = () => {
  return (
    <Grid container justifyContent={'center'} spacing={2} >
      <Grid md={8} xs={12} margin={4}>
        <br />
        <Paper style={{ padding: 0 }}>
          <div className={styles.banner}>
            <Fab className={styles.edit_banner} color="primary">
              <EditIcon />
            </Fab>
          </div>
          <Grid container style={{ padding: 10 }}>
            <Grid item md={2}>
              <Avatar className={styles.avatar} sx={{ width: 160, height: 160 }} />
            </Grid>
            <Grid item md={6}>
              <Typography variant='h4'>Bio</Typography>
              <Typography> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo sequi cupiditate accusantium est quae culpa. Dignissimos numquam consequatur quam libero deserunt ut maiores ea optio commodi autem, nulla quisquam officiis!</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography variant='h4'>Social Links</Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <SocialIcon url="https://facebook.com/jaketrent" />
                  </ListItemIcon>
                  <ListItemText>
                    <Link href="https://facebook.com/jaketrent" variant="body2">
                      Facebook
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SocialIcon url="https://twitter.com/jaketrent" />
                  </ListItemIcon>
                  <ListItemText>
                    <Link href="https://facebook.com/jaketrent" variant="body2">
                      Twitter
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SocialIcon url="https://onlyfans.com/jaketrent" />
                  </ListItemIcon>
                  <ListItemText>
                    <Link href="https://onlyfans.com/" variant="body2">
                      Only Fans
                    </Link>
                  </ListItemText>

                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SocialIcon url="https://instagram.com/jaketrent" />
                  </ListItemIcon>
                  <ListItemText>
                    <Link href="https://instagram.com/" variant="body2">
                      Instagram
                    </Link>
                  </ListItemText>

                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Divider />

        </Paper>
        <div className={styles.content_filter}>
          <Button fullWidth style={{margin:'5px'}} variant='contained' color='secondary'>All</Button>
          <Button fullWidth style={{margin:'5px'}}  variant='contained'>Videos</Button>
          <Button fullWidth style={{margin:'5px'}}  variant='contained'>Images</Button>
          <Button fullWidth style={{margin:'5px'}}  variant='contained'>Blog Posts</Button>
        </div>
      </Grid>
    </Grid>
  )
}
