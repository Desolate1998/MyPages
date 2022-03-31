import { Avatar, Badge, Button, Chip, Dialog, DialogActions, Divider, Grid, IconButton, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import { IPostImage } from '../../domain/iterfaces/IPostImage';
import { Comment } from '../comment/Comment';
interface IProps {
  selectedImage: IPostImage | null;
  open: boolean;
  onClose: () => void;


}
export const ViewImageDialog: React.FC<IProps> = ({ selectedImage, open, onClose }) => {

  return (
    <Dialog maxWidth={'md'} open={open} fullWidth={true}>
      
      <DialogActions>
      <div style={{ display: 'flex', alignItems: 'center',position:'absolute',left:0 }}>
            <Avatar style={{ marginRight: '10px', marginLeft: '10px' }} />
            <Typography variant="body1">
              {selectedImage?.author}
            </Typography>
            <Chip style={{ marginLeft: '10px' }} label='Follow' variant='outlined' />
          </div>
        <IconButton style={{ position: 'relative', top: 0, right: 0 }} onClick={onClose}>
          <CloseIcon />
        </IconButton>

      </DialogActions>


      <Grid container>
        
        <Grid style={{ maxHeight: '500px', display: 'flex', justifyItems: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }} item xs={12} md={8}>
  
          <img
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            src={`${selectedImage?.img}`}
            srcSet={`${selectedImage?.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={selectedImage?.title}
            loading="lazy"
          />
        </Grid>
        <Grid item xs={12} md={4} style={{ position: 'relative',padding:'10px' }}>
          
          <Typography variant="body1">
            Comments
          </Typography>
          <div style={{ maxHeight: '400px', minHeight: '400px', overflowY: 'scroll', padding: '10px' }}>
            <Comment />
            <Divider/>
            <Comment />
            <Divider/>
            <Comment />
            <Divider/>
            <Comment />
            <Divider/>
          </div>
          <Divider/>
          <div style={{ padding: '10px', display: 'flex'}}>
            <TextField variant='standard' fullWidth placeholder='Add Comment...' /><Button>Post</Button>
          </div>
        </Grid>
      </Grid>

    </Dialog>
  )
}
