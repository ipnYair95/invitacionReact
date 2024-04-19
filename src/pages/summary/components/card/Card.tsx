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
        En este día especial, agradezco a quienes han sido parte de mi vida hasta ahora. Hoy celebro no solo mi crecimiento, sino también el amor y el apoyo que he recibido. Que este nuevo capítulo esté lleno de aventuras, risas y momentos inolvidables. ¡Gracias por acompañarme en este viaje y por ser parte de mi historia!
      </Typography>

      {button}

    </Box>
  )
}
