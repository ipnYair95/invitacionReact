import { Box, Button, Typography } from '@mui/material';
import styles from './Home.module.scss';
import { IMG } from '../../assets';
import Countdown from 'react-countdown';
import { CountdownCustom } from './components/countdown';
import { SECTIONS } from '../../constants/contants';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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
    <Box className={styles.home} id={SECTIONS.HOME} sx={{
      backgroundImage: IMG.BACKGROUND
    }}  >

      <Box className={styles.content} data-aos="zoom-in">

        <Box className={styles.grid}  >

          <Box className={styles.item} >

            <Typography className={styles.title}> MIS XV AÑOS </Typography>            

            <hr />

            <Typography className={styles.date}> 1 de junio de 2024 </Typography>
            <Typography className={styles.letter}> En esta nueva etapa, te deseo que cada día brille con alegría y que tu camino esté lleno de sueños cumplidos. Que esta etapa de tu vida sea tan hermosa y especial como tú. ¡Felices quince! </Typography>

          </Box>

          <Box className={styles.item} >

            <Box className={styles.img}>
              <img src={IMG.LOGO} alt="" />
            </Box>

            <Typography className={styles.name}> Maria Fernanda </Typography>

          </Box>

        </Box>

        <Button className={styles.button} disableRipple onClick={goTo}>
          Acompáñame
        </Button>

      </Box>

      <Box className={styles.timer} >
        <Countdown date={'2024-06-01T00:00:00'} renderer={renderer} />
      </Box>

    </Box>
  )
}
