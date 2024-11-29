import { Box, Typography } from '@mui/material'
import styles from './Summary.module.scss';
import { SECTIONS } from '../../constants/contants';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { IMG } from '../../assets';

export const Summary = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Box className={styles.summary} id={SECTIONS.SUMMARY}  >

      <Box className={styles.content} data-aos="fade-up">

        <img className={styles.crown} src={IMG.CROWN} alt="crown" />

        <Typography className={styles.text}>
          Hoy es mi día, un paso más hacia mis sueños. Soy fuerte, única y capaz de hacer todo lo que me proponga.
        </Typography>

      </Box>

    </Box>
  )
}
