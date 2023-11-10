import { Box, Button, Typography } from '@mui/material';
import styles from './Home.module.scss';
import { IMG } from '../../assets';
import Countdown from 'react-countdown';
import { CountdownCustom } from './components/countdown';



export const Home = () => {

  const goTo = (e: any) => {
    
    e.preventDefault();

    const element: any = document.querySelector("#summary");

    window.scrollTo({
      top: element!.offsetTop,
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
    <Box className={styles.home} sx={{
      backgroundImage: IMG.BACKGROUND
    }} >

      <Box className={styles.content}>

        <Box className={styles.grid}  >

          <Box className={styles.item} >

            <Typography className={styles.title}> XVIII AÑOS </Typography>

            <hr />

            <Typography className={styles.date}> 9 de Diciembre de 2023 </Typography>
            <Typography className={styles.letter}> En tus quince años, te deseo que cada día brille con alegría y que tu camino esté lleno de sueños cumplidos. Que esta etapa de tu vida sea tan hermosa y especial como tú. ¡Felices quince! </Typography>

          </Box>

          <Box className={styles.item} >

            <Box className={styles.img}>
              <img src={IMG.LOGO} alt="" />
            </Box>

            <Box className={styles.name}>
              <img src={IMG.NAME} alt="" />
            </Box>

          </Box>

        </Box>

        <Button className={styles.button} disableRipple onClick={goTo}>
          Bienvenido
        </Button>

      </Box>

      <Box className={styles.timer}>
        <Countdown date={'2023-12-09T05:00:00'} renderer={renderer} />
      </Box>

    </Box>
  )
}
