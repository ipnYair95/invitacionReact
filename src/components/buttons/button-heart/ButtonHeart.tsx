import { Box } from "@mui/material"
import styles from './ButtonHeart.module.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TouchAppIcon from '@mui/icons-material/TouchApp';


export const ButtonHeart = ({ onClick }: any) => {
  return (
    <Box className={styles.buttonHeart} onClick={onClick} >

      <FavoriteIcon className={styles.heart} />

      <TouchAppIcon className={styles.touch} />

    </Box>
  )
}

