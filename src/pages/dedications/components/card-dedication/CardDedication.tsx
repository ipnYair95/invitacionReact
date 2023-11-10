import styles from './CardDedication.module.scss';
import { IDedication } from "../../constants/constants"
import { Box, Typography } from '@mui/material';
import { SeparatorHeart } from '../../../../components';

export const CardDedication = ({ to, text }: IDedication) => {
  return (
    <Box className={styles.card} >

      <Typography className={styles.to} > {to} </Typography>

      <SeparatorHeart />

      <Typography className={styles.text} > {text} </Typography>

    </Box>
  )
}
