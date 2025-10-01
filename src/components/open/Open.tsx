import { Box } from '@mui/material'
import styles from './Open.module.scss'
import { IMG } from '../../assets';

interface Props {
    onClick: () => void;
}

export const Open = ({ onClick }: Props) => {

    return (
        <Box className={styles.open} onClick={onClick} >

            <Box className={`${styles.avatar} ${styles.pulse}`}>

                <img className={styles.img} src={IMG.LETTER} alt="letter" />

            </Box>

            <span className={styles.hint}> ✨ Toca para abrir ✨ </span>

        </Box>
    )
}
