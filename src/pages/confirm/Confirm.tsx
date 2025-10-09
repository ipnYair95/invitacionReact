import { Box, Button, Typography } from '@mui/material';
import styles from './Confirm.module.scss';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Confirm = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const onClick = () => {
        window.open('https://forms.gle/2F2My9YDMQUnsf3A9', '_blank');
    }

    return (
        <Box className={styles.confirm} data-aos="fade-up">

            <Typography className={styles.title}>Confirmar Asistencia</Typography>

            <Typography className={styles.text}>
                ¡Me haría mucha ilusión verte en este día especial!
            </Typography>

            <Typography className={styles.text}>
                Favor de confirmar tu presencia.
            </Typography>

            <Button
                className={styles.button}
                onClick={onClick}
                variant="contained"
                startIcon={<FavoriteIcon />}
            >
                Confirmar Asistencia
            </Button>

        </Box>
    )
}
