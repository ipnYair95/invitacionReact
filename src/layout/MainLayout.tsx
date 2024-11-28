import styles from './MainLayout.module.scss';
import { Box, Fab, IconButton } from "@mui/material";
import { Loader } from "../components";
import { Home, SlideShow, Dedications, Places, Gifs, Footer, People, Confirm } from "../pages";
import { useState } from 'react';
import { IMG } from '../assets';
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import { usePlay } from '../hooks';
import { useDataStore } from '../store';

export const MainLayout = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const playing = useDataStore((state) => state.playing);

  const { setPlaying } = useDataStore();

  usePlay();

  const onClick = () => {

    setIsOpen(true);
    setPlaying();

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

      <Confirm />

      <Footer />

      <Fab className={styles.fab} onClick={setPlaying} >
        {
          playing ? <MusicNoteIcon /> : <MusicOffIcon />
        }
      </Fab>

    </Box>
  );

}
