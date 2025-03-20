import { Avatar, Box } from '@mui/material'
import styles from './Open.module.scss'
import { IMG } from '../../assets';

interface Props {
    onClick: () => void;
}

export const Open = ({ onClick }: Props) => {

    return (
        <Box className={styles.open} onClick={onClick} >

            <Avatar className={`${styles.img} ${styles.pulse}`} src={IMG.LETTER} />

        </Box>
    )
}
