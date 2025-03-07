import { Box } from "@mui/material";
import styles from './Itinerary.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { SeparatorHearTitle, VerticalTimeline } from "../../components";
import { ITINERARY_ITEMS } from "./constants";


export const Itinerary = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Box className={styles.itinerary} data-aos="fade-up" >

      <SeparatorHearTitle text='Itinerario' />

      <VerticalTimeline items={ITINERARY_ITEMS} />

    </Box>
  )

}