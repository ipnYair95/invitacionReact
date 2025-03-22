import { Box, IconButton, Typography } from '@mui/material';
import styles from './Home.module.scss';
import Countdown from 'react-countdown';
import { CountdownCustom } from './components/countdown';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { TargetDate, VideoBackground } from './components';
import SwipeUpIcon from '@mui/icons-material/SwipeUp';
import { IMG, VIDEO } from '../../assets';
import { ButtonHeart } from '../../components';
import { SECTIONS } from '../../constants';

export const Home = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const goTo = (e: any) => {

    e.preventDefault();

    const element: any = document.querySelector(`#${SECTIONS.SUMMARY}`);

    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    })

  }

  const renderer = ({ days, hours, minutes, seconds }: any) => {

    return <CountdownCustom
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />;

  };

  return (
    <Box className={styles.home} data-aos="zoom-in">

      <VideoBackground src={VIDEO.BACKGROUND} />

      <Box className={styles.container}>

        <Typography className={`${styles.title} title-shadow`} > Mis XV años </Typography>

        <img src={IMG.AVATAR} alt="" />

        <Typography className={`${styles.name} title-shadow`} > Ximena </Typography>

        <TargetDate />

        <Box className={styles.heart}>
          <Typography className={styles.await}> ¡Te esperamos! </Typography>

          <ButtonHeart onClick={goTo} />
        </Box>

      </Box>

      <Box>
        <Countdown date="2025-05-02T14:00:00" renderer={renderer} />
      </Box>

      <IconButton className={styles.hand} >
        <SwipeUpIcon />
      </IconButton>

    </Box>
  )
}
