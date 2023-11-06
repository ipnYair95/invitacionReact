import React from 'react'
import { Box } from '@mui/material';
import styles from './CountdownCustom.module.scss';

export const CountdownCustom = ({ days, hours, minutes, seconds }) => {
    return (
        <Box className={styles.coutdown}>

            <Box className={styles.box} >
                {days}
            </Box>
            <Box className={styles.box} >
                {hours}
            </Box>
            <Box className={styles.box} >
                {minutes}
            </Box>
            <Box className={styles.box} >
                {seconds}
            </Box>

        </Box>
    )
}
