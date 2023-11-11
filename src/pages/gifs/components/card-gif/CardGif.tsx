import styles from './CardGif.module.scss';
import { Box, Typography } from '@mui/material';
import { IGif } from "../../constants/constants"
import { SeparatorHeart } from '../../../../components';

export const CardGif = ({ ICON, title }: IGif) => {
  return (
    <Box className={styles.container} >

      <Box className={styles.subCard} >

        <Typography className={styles.title} > {title} </Typography>

        <SeparatorHeart />

        <Box className={styles.emote} >
          <ICON />
        </Box>

      </Box>

    </Box>
  )
}
