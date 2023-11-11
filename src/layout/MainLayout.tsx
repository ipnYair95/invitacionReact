import styles from './MainLayout.module.scss';
import { Box, IconButton } from "@mui/material";
import { Header, Stars } from "../components";
import { Home, Summary, SlideShow, Dedications, Places, Gifs, Footer } from "../pages";
import { useEffect, useState } from 'react';
import { IMG } from '../assets';
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';

export const MainLayout = ({ onPlay }: any) => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {

    const audioElement: any = document.getElementById('vid')!;
    audioElement.play();

  }, [])

  const onClick = () => {

    setIsOpen(true);
    onPlay();

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

  return (
    <Box className={styles.layout}>

      <Stars />

      <Header />

      <Home />

      <Summary />

      <Box className={styles.content}>

        <SlideShow />

        <Dedications />

        <Places />

        <Gifs />

        <Footer />

      </Box>

    </Box>
  );

}
