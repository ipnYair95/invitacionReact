import { Box, Divider, Typography } from "@mui/material"
import styles from './People.module.scss';
import { useEffect } from "react";
import AOS from 'aos';
import { SECTIONS } from "../../constants";



export const People = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Box className={styles.people} data-aos="fade-up" id={SECTIONS.PEOPLE}>

      <Box className={styles.parentCard}>

        <Divider className={styles.divider}> MIS PADRES </Divider>

        <Typography className={styles.parent} > Laura Donato </Typography>

        <Typography className={styles.parent} > Vicente Alvarado </Typography>

      </Box>

      <Box className={styles.parentCard}>

        <Divider className={styles.divider}> MIS PADRINOS </Divider>

        <Typography className={styles.parent} > Isabel Pérez </Typography>

        <Typography className={styles.parent} > Mario Justo </Typography>
        
      </Box>

    </Box>
  )
}
