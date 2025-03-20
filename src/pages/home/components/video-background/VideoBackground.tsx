import { Box } from '@mui/material'
import styles from './VideoBackground.module.scss'

export const VideoBackground = ({src, className}: any) => {
  return (
    <Box className={`${styles.videoBackground} ${className}`}>
        <video className={styles.video} src={src} autoPlay loop muted ></video>
    </Box>
  )
}
