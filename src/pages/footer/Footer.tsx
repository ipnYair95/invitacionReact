import { Box, Typography } from '@mui/material';
import styles from './Footer.module.scss';


export const Footer = () => {
  return (
    <Box className={styles.footer} >

      <Typography className={styles.text} > Haz de esto algo inolvidable </Typography>

      <Typography className={styles.copyright} > Y&Y Memories </Typography>

    </Box>
  )
}
