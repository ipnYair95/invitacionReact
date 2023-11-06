import { Box, Button, Typography } from '@mui/material';
import styles from './Home.module.scss';
import { IMG } from '../../assets';
import Countdown from 'react-countdown';
import { CountdownCustom } from './components/countdown';



export const Home = () => {

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

        <Typography className={styles.title} >
          Mis XVIII años
        </Typography>

        <Box className={styles.card} >

          <Typography className={styles.date} >
            9 de diciembre de 2023
          </Typography>

          <Typography className={styles.name} >
            Yuby
          </Typography>

        </Box>

        <Button className={styles.button} disableRipple >
          Bienvenido
        </Button>

        <Countdown date={'2023-12-09T05:00:00'} renderer={renderer} />

      </Box>

    </Box>
  )
}
