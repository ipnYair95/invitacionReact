import { Box, Typography } from '@mui/material';
import styles from './CountdownCustom.module.scss';

export const CountdownCustom = ({ days, hours, minutes, seconds }: any) => {
    return (
        <Box className={styles.countdown} >

            <Box className={styles.item}>
                <Typography className={`title-shadow`} > {days} </Typography>
                <Typography className={`title-shadow`} > Días  </Typography>
            </Box>

            <Box className={styles.item}>
                <Typography className={`title-shadow`} > {hours} </Typography>
                <Typography className={`title-shadow`} > Horas  </Typography>
            </Box>

            <Box className={styles.item}>
                <Typography className={`title-shadow`} > {minutes} </Typography>
                <Typography className={`title-shadow`} > Minutos  </Typography>
            </Box>

            <Box className={styles.item}>
                <Typography className={`title-shadow`} > {seconds} </Typography>
                <Typography className={`title-shadow`} > Segundos  </Typography>
            </Box>

        </Box>
    )
}
