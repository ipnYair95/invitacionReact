import styles from './Card.module.scss';
import { Box, Typography } from '@mui/material';
import { SeparatorHeart } from '../../../../components';


export const Card = () => {
  return (
    <Box className={styles.card} >

      <Typography className={styles.title} >
        Mis XVIII Años
      </Typography>

      <SeparatorHeart />

      <Typography className={styles.text} >
        Dejo atrás un mundo y entro a uno nuevo aunque a veces dudo o temo estoy llena de esperanzas y sueños. Tengo la sensación de que estoy construyendo mi propio camino siento alegría y quiero compartirlo rodeada de todos los que quiero.
      </Typography>


    </Box>
  )
}
