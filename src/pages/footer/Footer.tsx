import { Box, Typography } from '@mui/material';
import styles from './Footer.module.scss';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const Footer = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Box className={styles.footer} data-aos="fade-up">

      <Typography className={styles.text} > Haz de esto algo inolvidable </Typography>

      <Box className={styles.info}>

        <Box className={styles.icons}>      

          <WhatsAppIcon className={styles.icon} onClick={() => window.open('https://wa.link/7g6qe4', '_blank')} />

        </Box>

        <Typography className={styles.name} > DreamReals &copy; {new Date().getFullYear()} </Typography>

      </Box>

    </Box>
  )
}
