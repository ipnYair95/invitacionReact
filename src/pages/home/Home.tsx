import { Avatar, Box, Typography } from '@mui/material';
import styles from './Home.module.scss';
import Countdown from 'react-countdown';
import { CountdownCustom } from './components/countdown';
import { SECTIONS } from '../../constants/contants'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { TargetDate } from './components';
import { ButtonHeart } from '../../components';
import { IMG } from '../../assets';

export const Home = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const goTo = (e: any) => {

    e.preventDefault();

    const element: any = document.querySelector(`#${SECTIONS.PEOPLE}`);

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

      <Box className={styles.container}>       

        <Typography className={`${styles.title} title-shadow`} > Mis XV AÑOS </Typography>

        <Avatar className={styles.photo} src={IMG.LOGO} />

        <Typography className={`${styles.name} title-shadow`} > Monserrat </Typography>

        <TargetDate />

        <Typography className={styles.await}> ¡Te esperamos! </Typography>

        <ButtonHeart onClick={goTo} />
        
      </Box>

      <Box>
        <Countdown date="2025-01-25T16:20:00" renderer={renderer} />
      </Box>

    </Box>
  )
}
