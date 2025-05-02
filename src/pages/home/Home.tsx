import { Box, Card, Typography } from '@mui/material';
import styles from './Home.module.scss';
import Countdown from 'react-countdown';
import { CountdownCustom } from './components/countdown';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { TargetDate } from './components';
import { IMG } from '../../assets';
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

      <Box className={styles.container}>

        <Typography className={`${styles.title} title-shadow`} > Mi bautizo </Typography>

        <img src={IMG.LOGO} alt="" />        

        <Typography className={`${styles.name} title-shadow`} > Oliver Alexander </Typography>


        <TargetDate />

        <Box className={styles.cardContainer} >
          <Card className={styles.card} >
            <Typography className={`${styles.text} title-shadow`}>
              Diosito lindo, hoy me acerco a Ti con mi corazón pequeñito para recibir tu bendición y comenzar mi camino en la fe.
            </Typography>
          </Card>
        </Box>

      </Box>

      <Box>
        <Countdown date="2025-06-05T16:00:00" renderer={renderer} />
      </Box>

    </Box>
  )
}
