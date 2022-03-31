import { Avatar, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export const Comment = () => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <div style={{ display: 'flex', flexDirection: 'row',marginBottom:'10px',marginTop:'10px' }}>
        <Avatar sx={{ height: '20px', width: '20px' }} style={{ marginRight: '10px' }} />
        <Typography>Jane Doe</Typography>
      </div>
      <div style={{ paddingLeft: '10px' }}>
        <Typography variant='subtitle2' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' ,alignItems:'center'}}>
        <Typography variant='caption'>
          Reply
        </Typography>
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
        <Typography variant='caption'>
          1000 likes
        </Typography>
        <Button>View Replies</Button>
      </div>
     
    </div>
  )
}
