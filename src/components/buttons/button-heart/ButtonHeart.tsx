import { Box, IconButton } from "@mui/material"
import styles from './ButtonHeart.module.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SwipeUpIcon from '@mui/icons-material/SwipeUp';

export const ButtonHeart = ({ onClick }: any) => {
  return (
    <Box className={styles.buttonHeart} onClick={onClick} >

      <FavoriteIcon className={styles.heart} />

      <IconButton className={styles.hand} >
        <SwipeUpIcon />
      </IconButton>

    </Box>
  )
}

