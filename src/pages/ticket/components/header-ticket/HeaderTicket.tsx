import { Box, Typography } from "@mui/material"
import styles from './HeaderTicket.module.scss';


export const HeaderTicket = () => {
    
  return (
    <Box className={styles.headerTicket} >

        <Typography className={styles.text} > GPI </Typography>

        <Typography className={styles.text} > PARTY </Typography>

    </Box>
  )
}
