import { Box, Typography } from '@mui/material'
import styles from './NotFound.module.scss'

export const NotFound = ({ msg = 'Pagina no encontrada' }) => {
    return (
        <Box className={styles.container} >            

            <Typography className={styles.text} > {msg} </Typography>

        </Box>
    )
}
