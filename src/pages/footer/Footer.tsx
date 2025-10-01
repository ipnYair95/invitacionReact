import { Box, Typography } from '@mui/material';
import styles from './Footer.module.scss';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Footer = () => {

  return (
    <Box className={styles.footer}> 

      <Box className={styles.info}>

        <Box className={styles.icons}>      

          <WhatsAppIcon className={styles.icon} onClick={() => window.open('https://wa.link/7g6qe4', '_blank')} />

        </Box>

        <Typography className={styles.name} > DreamReals &copy; {new Date().getFullYear()} </Typography>

      </Box>

    </Box>
  )
}
