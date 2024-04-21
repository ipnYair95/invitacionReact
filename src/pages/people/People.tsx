import { Box, Divider, Typography } from "@mui/material"
import styles from './People.module.scss';
import { useEffect } from "react";
import AOS from 'aos';



export const People = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Box className={styles.people} data-aos="fade-up">

      <Box className={styles.parentCard}>
        <Typography className={styles.title} > Mis padres </Typography>

        <Divider />

        <Typography className={styles.parent} > Juan Manuel Correo Marcelino </Typography>

        <Typography className={styles.parent} > Diana Alvarez Hernández </Typography>

      </Box>

      <Box className={styles.parentCard}>
        <Typography className={styles.title} > Mis padrinos </Typography>

        <Divider />

        <Typography className={styles.parent} > Bruno Armando Muciño Ramírez </Typography>

        <Typography className={styles.parent} > Sandra Cristina Hernández Aguilar </Typography>
      </Box>


    </Box>
  )
}
