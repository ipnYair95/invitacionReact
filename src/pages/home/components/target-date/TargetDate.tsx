import { Box, Typography } from "@mui/material";
import styles from "./TargetDate.module.scss";
import { TargetItem } from "../target-item";


export const TargetDate = () => {
  return (
    <Box className={styles.targetDate}>

      <TargetItem label="SÁBADO" />

      <Box className={styles.date}>
        <Typography className={styles.day}> 15 </Typography>

        <Typography className={styles.month}> FEBRERO </Typography>
      </Box>

      <TargetItem label="16:00 HRS" />

    </Box>
  );
};
