import styles from './MainLayout.module.scss';
import { Box, IconButton, SpeedDial, SpeedDialAction } from "@mui/material";
import { Loader } from "../components";
import { Home, SlideShow, Dedications, Places, Gifs, Footer, People, Confirm, Summary, Ticket } from "../pages";
import { useState } from 'react';
import { ASSETS, IMG } from '../assets';
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import { usePlay } from '../hooks';
import { useDataStore } from '../store';
import SettingsIcon from '@mui/icons-material/Settings';
import DownloadIcon from '@mui/icons-material/Download';

export const MainLayout = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const playing = useDataStore((state) => state.playing);

  const { setPlaying } = useDataStore();

  usePlay();

  const onDownload = () => {
    window.open(ASSETS.INVITATION, '_blank');
  }

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

      <Ticket />

      <Summary />

      <People />

      <SlideShow />

      <Dedications />

      <Places />

      <Gifs />

      <Confirm />      

      <Footer />

      <SpeedDial
        className={styles.speedDial}
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SettingsIcon />}
      >
        <SpeedDialAction className={styles.speedDialAction} icon={playing ? <MusicNoteIcon /> : <MusicOffIcon />} onClick={setPlaying} />

        {
          false &&<SpeedDialAction className={styles.speedDialAction} icon={<DownloadIcon />} onClick={onDownload} />
        }

      </SpeedDial>

    </Box >
  );

}
