import { Box } from "@mui/material"
import styles from './CardPresentation.module.scss'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IMG } from "../../assets";
import { PARENTS } from "./contants";
import { Parent } from "./components/parent";
import { SECTIONS } from "../../constants";

export const CardPresentation = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Box className={styles.cardPresentation} data-aos="fade-up" id={SECTIONS.SUMMARY}>

      <Box className={styles.container}>

        <img className={styles.presentation} src={IMG.BUDUS} alt="presentation" />

        {
          PARENTS.map((parent) => <Parent key={parent.title} parent={parent} />)
        }


      </Box>

    </Box>
  )
}
