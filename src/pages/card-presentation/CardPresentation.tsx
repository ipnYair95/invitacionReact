import { Box, Typography } from "@mui/material"
import styles from './CardPresentation.module.scss'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IMG } from "../../assets";
import { PARENTS } from "./contants";
import { Parent } from "./components/parent";

export const CardPresentation = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Box className={styles.cardPresentation} data-aos="fade-up">

      <Box className={styles.container}>

        <Typography className={`${styles.mainText}`}>
          A veces lo que empieza como una locura se convierte en lo mejor de tu vida
        </Typography>

        <img className={styles.presentation} src={IMG.BUDUS} alt="presentation" />

        {
          PARENTS.map((parent) => <Parent key={parent.title} parent={parent} />)
        }


      </Box>

    </Box>
  )
}
