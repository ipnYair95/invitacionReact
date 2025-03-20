import { Box, Typography } from "@mui/material";
import styles from "./CardSummary.module.scss";
import { SeparatorHeartLine } from "../../components";

export const CardSummary = () => {
  return (
    <Box className={styles.cardSummary}>

      <Box className={styles.container}>

        <Typography className={styles.primaryText}>
          Con la bendición de Dios, en compañía de mis padres
        </Typography>

        <Typography className={styles.names}> Laura Donato </Typography>

        <Typography className={styles.names}> Vicente Alvarado </Typography>

        <SeparatorHeartLine />

        <Typography className={styles.primaryText}> Y mis padrinos </Typography>

        <Typography className={styles.names}> Isabel Pérez </Typography>
        
        <Typography className={styles.names}> Mario Justo </Typography>

        <SeparatorHeartLine />

        <Typography className={styles.primaryText}>
          Nos complace invitar a ustedes a compartir conmigo este dia tan especial
        </Typography>

      </Box>

    </Box>
  );
};
