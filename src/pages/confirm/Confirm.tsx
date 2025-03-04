import { Box, Button, Typography } from '@mui/material';
import styles from './Confirm.module.scss';
import CheckIcon from '@mui/icons-material/Check';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Confirm = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const onClick = () => {
    window.open('https://forms.gle/LJoi6RHewDthbfLN7', '_blank');
  }

  return (
    <Box className={styles.confirm} data-aos="fade-up">

      <Typography className={`${styles.title}`} > Confirmar Asistencia </Typography>

      <Typography className={styles.text} > Espero que puedas venir a compartir conmigo este día inolvidable. </Typography>

      <Typography className={styles.text} > Favor de confirmar tu presencia. </Typography>

      <Button className={styles.button} onClick={onClick} >
        <CheckIcon />
      </Button>

    </Box>
  )
}
