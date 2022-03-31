import { Avatar, Button, Chip, Divider, Fab, Grid, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'
import styles from './profile.module.css'
import { SocialIcon } from 'react-social-icons';
import EditIcon from '@mui/icons-material/Edit';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ProfileViewAll } from '../profileViewAll/ProfileViewAll';
import { ProfileViewVideos } from '../profileViewVideos/ProfileViewVideos';
import { ProfileViewImages } from '../profileViewImages/ProfileViewImages';
import { ProfileViewBlogs } from '../profileViewBlogs/ProfileViewBlogs';
export const Profile = () => {
  const navigate = useNavigate()
  return (
    <Grid container justifyContent={'center'} spacing={2} >
      <Grid md={8} xs={12} margin={4}>
        <br />
        <Paper style={{ padding: 0 }}>
          <div className={styles.banner}>
            <Fab style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              margin: 10
            }} color="primary">
              <EditIcon />
            </Fab>
          </div>
          <Grid container style={{ padding: 10 }}>
            <Grid item md={2}>
              <Avatar className={styles.avatar} sx={{ width: 160, height: 160 }} />
            </Grid>
            <Grid item md={6}>
              <Grid container>
                <Grid item md={12}>
                  <Typography variant='h4'>Bio</Typography>
                  <Typography> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo sequi cupiditate accusantium est quae culpa. Dignissimos numquam consequatur quam libero deserunt ut maiores ea optio commodi autem, nulla quisquam officiis!</Typography>
                </Grid>
                <Grid style={{ marginTop: 10, display: 'flex', justifyContent: 'space-evenly' }} item md={12}>
                  <Chip label="Followers :100 00" component="h1" />
                  <Chip label="Likes :100 00" component="h1" />
                  <Chip label="Following :100 00" component="h1" />
                </Grid>
              </Grid>
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
          <Button onClick={()=>{navigate('all')}} fullWidth style={{ margin: '5px' }} variant='contained' color='secondary'>All</Button>
          <Button fullWidth onClick={()=>{navigate('videos')}} style={{ margin: '5px' }} variant='contained'>Videos</Button>
          <Button fullWidth onClick={()=>{navigate('images')}} style={{ margin: '5px' }} variant='contained'>Images</Button>
          <Button fullWidth onClick={()=>{navigate('blogs')}} style={{ margin: '5px' }} variant='contained'>Blog Posts</Button>
        </div>
        <Routes>
          <Route path="videos" element={<ProfileViewVideos />} />
          <Route path="images" element={<ProfileViewImages />} />
          <Route path="blogs" element={<ProfileViewBlogs />} />
          <Route path="*" element={<ProfileViewAll />} />
        </Routes>
      </Grid>


    </Grid>
  )
}
