import { Box, Typography } from "@mui/material";
import styles from "./TargetDate.module.scss";
import { TargetItem } from "../target-item";


export const TargetDate = () => {
  return (
    <Box className={styles.targetDate}>

      <TargetItem label="SÁBADO" />

      <Box className={styles.date}>
        <Typography className={styles.day}> 31 </Typography>

        <Typography className={styles.month}> MAYO </Typography>
      </Box>

      <TargetItem label="15:00 HRS" />

    </Box>
  );
};
