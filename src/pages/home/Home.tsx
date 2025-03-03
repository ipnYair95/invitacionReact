import { Avatar, Box, Typography } from '@mui/material';
import styles from './Home.module.scss';
import Countdown from 'react-countdown';
import { CountdownCustom } from './components/countdown';
import { SECTIONS } from '../../constants';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { TargetDate, VideoBackground } from './components';
import { ButtonHeart } from '../../components';
import { IMG } from '../../assets';

export const Home = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const goTo = (e: any) => {

    e.preventDefault();

    const element: any = document.querySelector(`#${SECTIONS.TICKET}`);

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

      <VideoBackground />

      <Box className={styles.container}>

        <Typography className={`${styles.title} title-shadow`} > Nuestra boda </Typography>        

        <Typography className={`${styles.name} title-shadow`} > Yair </Typography>

        <Typography className={`${styles.name} title-shadow`} >  & </Typography>

        <Typography className={`${styles.name} title-shadow`} > Yazmín </Typography>

        <TargetDate />        
        
        <Typography className={`${styles.text}`} > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur commodi excepturi voluptatibus deleniti sit cum vero eum ipsum. Perferendis dolorum deleniti ut asperiores sed recusandae! Temporibus dicta quae repudiandae deserunt? </Typography>
        
      </Box>

      <Box>
        <Countdown date="2025-05-31T15:00:00" renderer={renderer} />
      </Box>
      
    </Box>
  )
}
