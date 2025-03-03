import { Box } from '@mui/material'
import { VIDEO } from '../../../../assets'
import styles from './VideoBackground.module.scss'

export const VideoBackground = () => {
  return (
    <Box className={styles.videoBackground}>
        <video className={styles.video} src={VIDEO.BACKGROUND} autoPlay loop muted ></video>
    </Box>
  )
}
