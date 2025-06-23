import { Box, Typography } from "@mui/material";
import styles from "./TargetDate.module.scss";
import { TargetItem } from "../target-item";


export const TargetDate = () => {
  return (
    <Box className={styles.targetDate}>

      <TargetItem label="SÁBADO" />

      <Box className={styles.date}>
        <Typography className={`${styles.day} title-shadow`}> 26 </Typography>

        <Typography className={`${styles.month} title-shadow`}> JULIO </Typography>
      </Box>

      <TargetItem label="17:00 HRS" />

    </Box>
  );
};
