import { Box, Typography } from '@mui/material';
import styles from './MoneyCards.module.scss' ;
import { SeparatorHearTitle } from '../../components';
import { IMG } from '../../assets';
import { useEffect } from 'react';
import AOS from 'aos';

export const MoneyCards = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Box className={styles.moneyCards} data-aos="fade-up">

        <SeparatorHearTitle text='Lluvia de Sobres' />

        <Box className={styles.card}>

          <Typography className={styles.msg} > ¡Ayuda a Nuestra Anfitriona a Brillar! </Typography>

          <img className={styles.qr} src={IMG.BUDUS} alt="qr" />

          <Typography> Escanéame o haz click <a href="https://qr.me-qr.com/5Xx0fByH" target='_blank' > aquí </a> </Typography>

        </Box>

    </Box>
  )
}
