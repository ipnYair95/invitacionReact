import { Box, Typography } from '@mui/material'
import styles from './SeparatorHearTitle.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export interface ISeparatorHearTitleProps {
    text: string;
}

export const SeparatorHearTitle = ({ text = '' }: ISeparatorHearTitleProps) => {
    return (
        <Box className={styles.textContainer}>

            {
                Array.from({ length: 3 }, (_, index) => index + 1).map((item) => <FavoriteBorderIcon key={item} />)
            }

            <Typography className={styles.text} > {text} </Typography>

            {
                Array.from({ length: 3 }, (_, index) => index + 1).map((item) => <FavoriteBorderIcon key={item} />)
            }

        </Box>
    )
}
