import { Box, IconButton, Typography } from '@mui/material';
import styles from './ModalMap.module.scss';
import CloseIcon from '@mui/icons-material/Close';

export const ModalMap = ({ url, onClose }: any) => {
  return (
    <Box className={styles.modalContainer} >

      <Box className={styles.mapContainer} >

        <Box className={styles.header} >

          <Typography className={styles.text} > Ubicación </Typography>

          <IconButton onClick={onClose} >
            <CloseIcon />
          </IconButton>

        </Box>

        <hr />

        <Box className={styles.map}>
          <iframe src={url} width='100%' height='100%' ></iframe>
        </Box>

      </Box>

    </Box >
  )
}
