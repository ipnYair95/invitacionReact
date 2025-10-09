import { Box, Typography } from "@mui/material"
import styles from './Dressing.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { SeparatorHearTitle } from "../../components";
import { IMG } from "../../assets";


export const Dressing = () => {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <Box className={styles.dressingContainer} data-aos="fade-up" >

            <SeparatorHearTitle text='Dress code' />

            <Typography className={styles.text} >
                La mezclilla descansa y el lila está ocupado, que la elegancia sea la invitada principal ✨
            </Typography>

            <Box className={styles.image}>
                <img src={IMG.DRESS} alt="dress" loading="lazy" />
            </Box>

        </Box>
    )
}
