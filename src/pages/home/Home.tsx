import { Box, IconButton, Typography } from '@mui/material';
import styles from './Home.module.scss';
import Countdown from 'react-countdown';
import { CountdownCustom } from './components/countdown';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ImageBackground, TargetDate } from './components';
import SwipeUpIcon from '@mui/icons-material/SwipeUp';

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

            <ImageBackground />

            <Box className={styles.container}>

                <Typography className={`${styles.title} title-shadow`} > Mis XV Años </Typography>

                <Typography className={`${styles.name} title-shadow`} > Tamara </Typography>

                <TargetDate />

                <Box sx={{ zIndex: 1 }}>
                    <Countdown date="2025-11-15T17:45:00" renderer={renderer} />
                </Box>

                <IconButton className={styles.hand} >
                    <SwipeUpIcon />
                </IconButton>
                
            </Box>

        </Box>
    )
}
