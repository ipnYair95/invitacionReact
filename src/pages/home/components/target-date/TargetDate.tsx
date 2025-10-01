import { Box, Typography } from "@mui/material";
import styles from "./TargetDate.module.scss";
import { TargetItem } from "../target-item";


export const TargetDate = () => {
  return (
    <Box className={styles.targetDate}>

      <TargetItem label="Sábado" />

      <Box className={styles.date}>
        <Typography className={`${styles.day} title-shadow`}> 15 </Typography> 
      </Box>

      <TargetItem label="Noviembre" />

    </Box>
  );
};
