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

        <Typography className={styles.parent} > Esther Martínez H. </Typography>

        <Typography className={styles.parent} > Oscar Ramírez L. </Typography>

      </Box>

      <Box className={styles.parentCard}>

        <Divider className={styles.divider}> MIS PADRINOS </Divider>

        <Typography className={styles.parent} > ----- </Typography>

        <Typography className={styles.parent} > ------ </Typography>
      </Box>


    </Box>
  )
}
