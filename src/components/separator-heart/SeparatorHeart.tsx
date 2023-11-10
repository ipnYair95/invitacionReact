import { Box } from '@mui/material';
import styles from './SeparatorHeart.module.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const SeparatorHeart = () => {
    return (
        <Box className={styles.separator} >
            <hr />
            <Box className={styles.icon} >
                <FavoriteIcon className={styles.heart} />
            </Box>
        </Box>
    )
}
