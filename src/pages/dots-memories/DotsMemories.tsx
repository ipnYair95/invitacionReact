import { Box, Typography } from "@mui/material"
import styles from './DotsMemories.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { IMG } from "../../assets";

export const DotsMemories = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Box className={styles.dotsMemories} data-aos="fade-up">

            <Typography className={`${styles.title} title-shadow`} > Comparte tus recuerdos </Typography>

            <Typography className={styles.text}>
                Ayúdanos a capturar y compartir los momentos más especiales de este día.
            </Typography>

            <Typography className={styles.text}>
                Escanea el código QR o haz clic <a href="https://onelifesocial.page.link/dWcu" target='_blank' > aquí </a> para subir tus fotos y videos a nuestro álbum de recuerdos.
            </Typography>

            <img className={styles.qr} src={IMG.QR_MEMORIES} alt="qr" />


        </Box>
    )

}
