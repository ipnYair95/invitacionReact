import { Box, Card, IconButton, Typography } from '@mui/material';
import styles from './Home.module.scss';
import Countdown from 'react-countdown';
import { CountdownCustom } from './components/countdown';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { TargetDate, VideoBackground } from './components';
import SwipeUpIcon from '@mui/icons-material/SwipeUp';

export const Home = () => {

  useEffect(() => {
    AOS.init();
  }, [])

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

      <VideoBackground />

      <Box className={styles.container}>

        <Typography className={`${styles.title} title-shadow`} > Nuestra boda </Typography>

        <Typography className={`${styles.name} title-shadow`} > Yair </Typography>

        <Typography className={`${styles.name} title-shadow`} >  & </Typography>

        <Typography className={`${styles.name} title-shadow`} sx={{ paddingBottom: '24px' }} > Yazmín </Typography>

        <TargetDate />

        <Box className={styles.cardContainer} >
          <Card className={styles.card} >
            <Typography className={`${styles.text} title-shadow`}>
              Como en un cuento de Disney, hoy decimos 'sí, acepto', con el ronroneo de un amor eterno, el recuerdo de quienes nos guían desde el cielo y la pregunta: ¿cómo pagarte por todo lo que me das?
            </Typography>
          </Card>
        </Box>

      </Box>

      <Box>
        <Countdown date="2025-05-31T15:00:00" renderer={renderer} />
      </Box>

      <IconButton className={styles.hand} >
        <SwipeUpIcon />
      </IconButton>

    </Box>
  )
}
