import { Box, Typography } from '@mui/material'
import styles from './Summary.module.scss';
import { IMG } from '../../assets';
import { Card } from './components';

export const Summary = () => {
  return (
    <Box className={styles.summary} id="summary" >

      <Box className={styles.separator} >

        <Typography className={styles.hello} > ¡Hola! </Typography>

      </Box>

      <Box className={styles.content} >

        <Box className={styles.avatar} >          
          <img className={styles.img} src={IMG.MAIN} alt="main-photo" />
        </Box>


        <Box className={styles.card} >
          <Card />        
        </Box>

      </Box>




    </Box>
  )
}
