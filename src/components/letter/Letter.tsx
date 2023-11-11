import styles from './Letter.module.scss';
import { Box, IconButton, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';

export interface ILetterProps{
    className?:   string;
    onClick:      any;
}

export const Letter = ({ className, onClick }: ILetterProps) => {
    return (
        <Box className={`${styles.letter} ${className}`} onClick={onClick} >

            <IconButton className={styles.hand} >
                <PanToolAltOutlinedIcon />
            </IconButton>

            <Box className={styles.container}>
                <Box className={styles.back}>
                    <Box className={styles.paper}>
                        <Typography className={styles.title} > Abuelito </Typography>
                    </Box>

                    <Box className={styles.cover}>

                    </Box>

                    <Box className={styles.bottom}>
                        <Box className={styles.heart} >
                            <FavoriteIcon />
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}