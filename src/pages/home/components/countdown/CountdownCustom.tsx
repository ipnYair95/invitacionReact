import { Box, Typography } from '@mui/material';
import styles from './CountdownCustom.module.scss';

export const CountdownCustom = ({ days, hours, minutes, seconds }: any) => {
    return (
        <Box className={styles.countdown} >

            <Box className={styles.item}>
                <Typography> {days} </Typography>
                <Typography> Días  </Typography>
            </Box>

            <Box className={styles.item}>
                <Typography> {hours} </Typography>
                <Typography> Horas  </Typography>
            </Box>

            <Box className={styles.item}>
                <Typography> {minutes} </Typography>
                <Typography> Minutos  </Typography>
            </Box>

            <Box className={styles.item}>
                <Typography> {seconds} </Typography>
                <Typography> Segundos  </Typography>
            </Box>

        </Box>
    )
}
