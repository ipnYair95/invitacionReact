import { Box, Typography } from "@mui/material";
import styles from "./CardSummary.module.scss";
import { SeparatorHeartLine } from "../../components";
import { SECTIONS } from "../../constants";
import { IMG } from "../../assets";

export const CardSummary = () => {
    return (
        <Box className={styles.cardSummary} id={SECTIONS.SUMMARY}>

            <Box className={styles.container}>


                <Typography className={styles.primaryText}>
                    Con la bendición de Dios, en compañía de mis padres
                </Typography>

                <Typography className={styles.names}> Yessica Magdaleno Salgado </Typography>

                <Typography className={styles.names}> Fernando Ignacio Camiro Leon </Typography>

                <SeparatorHeartLine />

                <figure className={styles.avatar}>
                    <img src={IMG.AVATAR} alt="" />
                </figure>

                <Typography className={styles.primaryText}>
                    Nos complace invitar a ustedes a compartir conmigo este dia tan especial
                </Typography>

            </Box>

        </Box>
    );
};
