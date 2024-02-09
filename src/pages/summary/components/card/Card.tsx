import styles from './Card.module.scss';
import { Box, Typography } from '@mui/material';
import { SeparatorHeart } from '../../../../components';


export const Card = ({ button }: any) => {
  return (
    <Box className={styles.card} >

      <Typography className={styles.title} >
        Mis XV Años
      </Typography>

      <SeparatorHeart />

      <Typography className={styles.text} >
        Agradezco a mi familia y hermanos por hacer más especial este día. A todos mis amigos por enseñarme el valor de una verdadera amistad.
      </Typography>

      {button}

    </Box>
  )
}
