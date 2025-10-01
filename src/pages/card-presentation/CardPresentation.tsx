import { Box } from "@mui/material"
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

                <Box className={styles.cardHeader}>
                    <Box className={styles.ornament}>✦ ❋ ✦</Box>
                    <p className={styles.phrase}>Con la bendición de Dios y el amor de nuestras familias</p>
                </Box>

                <img className={styles.presentation} src={IMG.BUDUS} alt="presentation" />

                {
                    PARENTS.map((parent) => <Parent key={parent.title} parent={parent} />)
                }

            </Box>

        </Box>
    )
}
