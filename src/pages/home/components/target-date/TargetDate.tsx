import { Box, Typography } from "@mui/material";
import styles from "./TargetDate.module.scss";
import { TargetItem } from "../target-item";


export const TargetDate = () => {
  return (
    <Box className={styles.targetDate}>

      <TargetItem label="JUEVES" />

      <Box className={styles.date}>
        <Typography className={`${styles.day} title-shadow`}>  5 </Typography>

        <Typography className={`${styles.month} title-shadow`}> JUNIO </Typography>
      </Box>

      <TargetItem label="16:00 HRS" />

    </Box>
  );
};
