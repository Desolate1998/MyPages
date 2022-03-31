import { Button, Dialog, DialogContent, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Modal, Paper, Typography } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import { IPostImage } from '../../domain/iterfaces/IPostImage';
import { ViewImageDialog } from '../viewImageDialog/ViewImageDialog';
const ImageGalleryList = styled('ul')(({ theme }) => ({
  display: 'grid',
  padding: 0,
  margin: theme.spacing(0, 0),
  gap: 8,

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)'
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
}));

const data: IPostImage[] = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
    author: 'swabdesign',
    hovered: false,
    likes: 10000,
    liked: false,
    subTitle: ''
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
    author: 'Pavel Nekoranec',
    hovered: false,
    likes: 10000,
    liked: false


  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
    author: 'Charles Deluvio',
    hovered: false,
    likes: 10000,
    liked: false


  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
    author: 'Christian Mackie',
    hovered: false,
    likes: 10000,
    liked: false


  },
  {
    img: 'https://images.unsplash.com/photo-1621449695406-3693b4bcc03d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    title: 'Blinds',
    author: 'Darren Richardson',
    liked: false,
    hovered: false,
    likes: 10000,

  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
    author: 'Taylor Simpson',
    hovered: false,
    likes: 10000,
    liked: false,

  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
    author: 'Ben Kolde',
    hovered: false,
    likes: 10000,
    liked: false,

  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    author: 'Philipp Berndt',
    hovered: false,
    likes: 10000,
    liked: false,

  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
    hovered: false,
    author: 'Jen P.',
    likes: 10000,
    liked: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    author: 'Douglas Sheppard',
    hovered: false,
    likes: 10000,
    liked: false,

  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
    author: 'Fi Bell',
    hovered: false,
    likes: 10000,
    liked: false,

  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
    hovered: false,
    likes: 10000,
    liked: false,

  },
];
export const ProfileViewImages = () => {
  const [itemData, setItemData] = useState([...data])
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<IPostImage | null>(null)
  const openModal = async (item: IPostImage) => {
    setModalOpen(true);
    setSelectedImage(item);
  }

  const closeModal = async () => {
    setModalOpen(false);
    setSelectedImage(null);
  }


  
  return (
    <>
    <ViewImageDialog open={modalOpen} onClose={closeModal} selectedImage={selectedImage}/>
      <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', justifyItems: 'center' }} >

        <ImageGalleryList>
          {itemData.map((item) => (
            <div
              style={{ position: 'relative' }}
              onMouseEnter={(e) => {
                let Data = itemData
                Data[itemData.indexOf(item)].hovered = true
                setItemData([...Data])
              }}
              onMouseLeave={() => {
                let Data = itemData
                Data[itemData.indexOf(item)].hovered = false
                setItemData([...Data])
              }}>
              <IconButton
                style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  zIndex: '1000',
                }}
                onClick={() => {
                  let Data = itemData
                  Data[itemData.indexOf(item)].liked = !Data[itemData.indexOf(item)].liked
                  setItemData([...Data])
                }}
                color={item.liked ? 'error' : 'inherit'}>
                {item.liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              <ImageListItem key={item.img}>
                <Paper>
                  <img
                    onClick={() => openModal(item)}
                    style={{ width: '200px', height: '200px' }}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  {
                    item.hovered && (<ImageListItemBar
                      title={item.title}
                      subtitle={item.subTitle}
                    />)
                  }
                </Paper>
              </ImageListItem>
            </div>
          ))}
        </ImageGalleryList>
      </div>
    </>

  )
}
