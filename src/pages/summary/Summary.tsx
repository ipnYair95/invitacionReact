import { Box, Typography } from '@mui/material'
import styles from './Summary.module.scss';
import { SECTIONS } from '../../constants';
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
          Con la bendición de Dios, y el amor de mi familia me siento muy feliz de llegar a este momento de mi vida. Los invito a compartir conmigo este día tan especial.
        </Typography>

      </Box>

    </Box>
  )
}
