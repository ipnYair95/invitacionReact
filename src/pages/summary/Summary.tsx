import { Box, Typography } from '@mui/material'
import styles from './Summary.module.scss';
import { IMG } from '../../assets';
import { Card } from './components';
import { SECTIONS } from '../../constants/contants';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Summary = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Box className={styles.summary} id={SECTIONS.SUMMARY}  >

      <Box className={styles.separator} data-aos="fade-up">

        <Typography className={styles.hello} > ¡Hola! </Typography>

      </Box>

      <Box className={styles.content} data-aos="fade-up">

        <Box className={styles.avatar} >
          <img className={styles.img} src={IMG.MAIN} alt="main-photo" />
        </Box>


        <Box className={styles.card} >
          <Card />
        </Box>

      </Box>




    </Box>
  )
}
