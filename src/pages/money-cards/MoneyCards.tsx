import { Box, Typography } from '@mui/material';
import styles from './MoneyCards.module.scss' ;
import { SeparatorHearTitle } from '../../components';
import { IMG } from '../../assets';

export const MoneyCards = () => {
  return (
    <Box className={styles.moneyCards}>

        <SeparatorHearTitle text='Lluvia de Sobres' />

        <Box className={styles.card}>

          <Typography className={styles.msg} > ¡Ayuda a Nuestra Anfitriona a Brillar! </Typography>

          <img className={styles.qr} src={IMG.QR} alt="qr" />

          <Typography> Escanéame o haz click <a href="https://qr.me-qr.com/5Xx0fByH" target='_blank' > aquí </a> </Typography>

        </Box>

    </Box>
  )
}
