import styles from './MainLayout.module.scss';
import { Box } from "@mui/material";
import { Header, Stars } from "../components";
import { Home, Summary, SlideShow, Dedications, Places, Gifs, Footer } from "../pages";
import { MUSIC } from '../assets/music/constants';
import { useEffect } from 'react';

export const MainLayout = () => {

  useEffect(() => {

    const audioElement: any = document.getElementById('vid')!;
    audioElement.play();

  }, [])

  return (
    <Box className={styles.layout}>

      <audio id='vid' controls autoPlay={true} className={styles.audio}  >
        <source src={MUSIC.MAIN} type="audio/mpeg" />
      </audio>

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
