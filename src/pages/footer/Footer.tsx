import { Box, Typography } from '@mui/material';
import styles from './Footer.module.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


export const Footer = () => {
  return (
    <Box className={styles.footer} >

      <Typography className={styles.text} > Haz de esto algo inolvidable </Typography>

      <Box className={styles.info}>

          <Box className={styles.icons}>

            <FacebookIcon className={ styles.icon } onClick={ () => window.open('https://www.facebook.com/profile.php?id=61554436433888', '_blank') } />

            <InstagramIcon className={ styles.icon } onClick={ () => window.open('https://www.instagram.com/dreamreals_/', '_blank') }  />

          </Box>

          <Typography className={styles.name} > DreamReals &copy; { new Date().getFullYear() } </Typography>

      </Box>  

    </Box>
  )
}
