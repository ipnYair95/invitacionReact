import { Box, Typography } from '@mui/material'
import styles from './TextItem.module.scss'

interface Props {
    label: string;
    value: number | string;
}

export const TextItem = ({ label, value }: Props) => {
    return (
        <Box className={styles.textItem} >

            <Typography className={styles.label} > {label}: </Typography>

            <Typography className={styles.value} > {value} </Typography>

        </Box>
    )
}
