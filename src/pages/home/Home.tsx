import { Box, Card, IconButton, Typography } from '@mui/material';
import styles from './Home.module.scss';
import Countdown from 'react-countdown';
import { CountdownCustom } from './components/countdown';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { TargetDate, VideoBackground } from './components';
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

            <VideoBackground />

            <Box className={styles.container}>

                <Box className={styles.numberContainer} >

                    <Typography className={`${styles.title} title-shadow`} > MIS </Typography>

                    <Typography className={`${styles.number} title-shadow`} > XVIII </Typography>

                    <Typography className={`${styles.title} title-shadow`} > AÑOS </Typography>

                </Box>

                <Typography className={`${styles.name} title-shadow`} > Fernando Antoan </Typography>

                <Box className={styles.separator} />

                <Box sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end'
                }}>
                    <TargetDate />

                    <Box className={styles.cardContainer} >
                        <Card className={styles.card} >
                            <Typography className={`${styles.text} title-shadow`}>
                                Hoy hace 18 años mis padres daban gracias a Dios por mí. Hoy soy yo quien agradece a Dios por ellos, por su amor y consejos. Gracias a mi familia por hacer especial este día y a mis amigos por enseñarme el valor de la amistad. ¡Dios los bendiga!
                            </Typography>
                        </Card>
                    </Box>
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
