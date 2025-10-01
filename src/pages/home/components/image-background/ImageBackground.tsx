import { Box } from '@mui/material';
import styles from './ImageBackground.module.scss';
import { IMG } from '../../../../assets';

export const ImageBackground = () => {
  return (
    <Box className={styles.imageBackground}>

      <img className={styles.image} src={IMG.BACKGROUND} alt="background" />

    </Box>
  )
}
