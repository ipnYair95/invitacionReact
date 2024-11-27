import { Box, Divider, Typography } from "@mui/material"
import styles from './People.module.scss';
import { useEffect } from "react";
import AOS from 'aos';
import { SECTIONS } from "../../constants/contants";



export const People = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Box className={styles.people} data-aos="fade-up" id={SECTIONS.PEOPLE}>

      <Box className={styles.parentCard}>

        <Divider className={styles.divider}> MIS PADRES </Divider>

        <Typography className={styles.parent} > Olga Maribel Marín Alavez </Typography>

        <Typography className={styles.parent} > Santiago Valenzuela </Typography>

      </Box>

      <Box className={styles.parentCard}>

        <Divider className={styles.divider}> MIS PADRINOS </Divider>

        <Typography className={styles.parent} > Blanca Estela Marín Alavez </Typography>

        <Typography className={styles.parent} > Teresa Marín Alavez </Typography>
      </Box>


    </Box>
  )
}
