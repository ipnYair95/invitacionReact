import { Box, Typography } from "@mui/material";
import styles from "./TargetDate.module.scss";
import { TargetItem } from "../target-item";


export const TargetDate = () => {
  return (
    <Box className={styles.targetDate}>

      <TargetItem label="SÁBADO" />

      <Box className={styles.date}>
        <Typography className={styles.day}> 25 </Typography>

        <Typography className={styles.month}> ENERO </Typography>
      </Box>

      <TargetItem label="4:20 HRS" />

    </Box>
  );
};
