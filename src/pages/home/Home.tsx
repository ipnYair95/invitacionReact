import { Box, Card, IconButton, Typography } from '@mui/material';
import styles from './Home.module.scss';
import Countdown from 'react-countdown';
import { CountdownCustom } from './components/countdown';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { TargetDate, VideoBackground } from './components';
import SwipeUpIcon from '@mui/icons-material/SwipeUp';
import { IMG } from '../../assets';

export const Home = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const renderer = ({ days, hours, minutes, seconds }: any) => {

        return <CountdownCustom
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
        />;

    };

    return (
        <Box className={styles.home} data-aos="zoom-in">

            <VideoBackground />

            <Box className={styles.container}>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px'
                }}>

                    <Typography className={`${styles.title} title-shadow`} > MIS </Typography>

                    <Typography className={`${styles.title} title-shadow`} > XVIII </Typography>                    

                    <Typography className={`${styles.title} title-shadow`} > Años </Typography>    

                </Box>

                <Typography className={`${styles.name} title-shadow`} > Fernando Antoan </Typography>

                <Box className={styles.separator} />

                <TargetDate />

                <Box className={styles.cardContainer} >
                    <Card className={styles.card} >
                        <Typography className={`${styles.text} title-shadow`}>
                            "Hoy celebramos más que un cumpleaños, celebramos el inicio de tus propios sueños. Que esta nueva etapa esté llena de aprendizajes, alegrías y grandes aventuras. ¡Feliz 18!"
                        </Typography>
                    </Card>
                </Box>

            </Box>

            <Box>
                <Countdown date="2025-07-26T17:00:00" renderer={renderer} />
            </Box>

            <IconButton className={styles.hand} >
                <SwipeUpIcon />
            </IconButton>

        </Box>
    )
}
