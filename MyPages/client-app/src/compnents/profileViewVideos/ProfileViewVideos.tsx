import { Button, Dialog, DialogContent, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Modal, Paper, Typography } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import { IPostImage } from '../../domain/iterfaces/IPostImage';
import { ViewImageDialog } from '../viewImageDialog/ViewImageDialog';

//function to get random video sources

//function to get random tiktok video
const getRandomVideo = () => {
  return 'https://www.tiktok.com/embed/' + Math.floor(Math.random() * 69)
}
const data: IPostImage[] = [
  {
    img:  getRandomVideo(),
    title: 'Bed',
    author: 'swabdesign',
    hovered: false,
    likes: 10000,
    liked: false,
    subTitle: ''
  },
  {
    img: getRandomVideo(),
    title: 'Books',
    author: 'Pavel Nekoranec',
    hovered: false,
    likes: 10000,
    liked: false


  },
  {
    img: getRandomVideo(),
    title: 'Sink',
    author: 'Charles Deluvio',
    hovered: false,
    likes: 10000,
    liked: false


  },
  {
    img: getRandomVideo(),
    title: 'Kitchen',
    author: 'Christian Mackie',
    hovered: false,
    likes: 10000,
    liked: false


  },
  {
    img: getRandomVideo(),
    title: 'Blinds',
    author: 'Darren Richardson',
    liked: false,
    hovered: false,
    likes: 10000,

  },
  {
    img: getRandomVideo(),
    title: 'Chairs',
    author: 'Taylor Simpson',
    hovered: false,
    likes: 10000,
    liked: false,

  },
  {
    img: getRandomVideo(),
    title: 'Laptop',
    author: 'Ben Kolde',
    hovered: false,
    likes: 10000,
    liked: false,

  },
  {
    img: getRandomVideo(),
    title: 'Doors',
    author: 'Philipp Berndt',
    hovered: false,
    likes: 10000,
    liked: false,

  },
  {
    img: getRandomVideo(),
    title: 'Coffee',
    hovered: false,
    author: 'Jen P.',
    likes: 10000,
    liked: false,
  },
  {
    img: getRandomVideo(),
    title: 'Storage',
    author: 'Douglas Sheppard',
    hovered: false,
    likes: 10000,
    liked: false,

  },
  {
    img: getRandomVideo(),
    title: 'Candle',
    author: 'Fi Bell',
    hovered: false,
    likes: 10000,
    liked: false,

  },
  {
    img: getRandomVideo(),
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
    hovered: false,
    likes: 10000,
    liked: false,

  },
];
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
export const ProfileViewVideos = () => {
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
                  <embed
                    onClick={() => openModal(item)}
                    style={{ width: '200px', height: '300px' }}
                    src={`${item.img}?w=250&fit=crop&auto=format`}
                
                   
                   
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


