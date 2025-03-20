import { Box, Divider } from "@mui/material"
import styles from './SeparatorHeartLine.module.scss'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export const SeparatorHeartLine = () => {
  return (
    <Box className={styles.separator} >

        <Divider className={styles.divider} />

        <Box className={styles.icon} >
            <FavoriteBorderOutlinedIcon className={styles.heart} />
        </Box>

    </Box>
  )
}
