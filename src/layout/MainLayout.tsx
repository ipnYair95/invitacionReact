import styles from './MainLayout.module.scss';
import { Box, IconButton } from "@mui/material";
import { Loader } from "../components";
import { Home, SlideShow, Dedications, Places, Gifs, Footer, People } from "../pages";
import { useState } from 'react';
import { IMG } from '../assets';
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';

export const MainLayout = ({ onPlay }: any) => {

  const [isOpen, setIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const onClick = () => {

    setIsOpen(true);
    onPlay();

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

  }

  if (!isOpen) {
    return (
      <Box className={styles.open} >

        <Box className={styles.img} onClick={onClick} >
          <img src={IMG.OPEN} />

          <IconButton className={styles.hand} >
            <PanToolAltOutlinedIcon />
          </IconButton>

        </Box>

      </Box>
    );
  }

  if (isLoading) {

    return (
      <Box className={styles.open} >

        <Loader />

      </Box>
    );

  }

  return (
    <Box className={styles.layout}>

      <Home />

      <People />

      <SlideShow />

      <Dedications />

      <Places />

      <Gifs />

      <Footer />

    </Box>
  );

}
