import styles from './MainLayout.module.scss';
import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import { Loader, Open } from "../components";
import { Home, Places, Footer, Confirm, People, Gifs, Dressing, Summary } from "../pages";
import { useState } from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import { usePlay } from '../hooks';
import { useDataStore } from '../store';
import SettingsIcon from '@mui/icons-material/Settings';

export const MainLayout = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const playing = useDataStore((state) => state.playing);

  const { setPlaying, setEnableStars } = useDataStore();

  usePlay();

  const onClick = () => {

    setIsOpen(true);
    setPlaying();
    
    setTimeout(() => {
      setIsLoading(false);
      setEnableStars(false);
    }, 1500);

  }


  if (!isOpen) {
    return <Open onClick={onClick} />
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

      <Summary />

      <People />

      <Places />

      <Gifs />

      <Dressing />

      <Confirm />

      <Footer />

      <SpeedDial
        className={styles.speedDial}
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SettingsIcon />}
      >
        <SpeedDialAction className={styles.speedDialAction} icon={playing ? <MusicNoteIcon /> : <MusicOffIcon />} onClick={setPlaying} />

      </SpeedDial>

    </Box >
  );

}
