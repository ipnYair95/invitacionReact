import { Box, IconButton } from '@mui/material'
import styles from './Open.module.scss'
import { IMG } from '../../assets';
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';

interface Props {
    onClick: () => void;
}

export const Open = ({ onClick }: Props) => {

    return (
        <Box className={styles.open} onClick={onClick} >

            <Box className={styles.avatar} >

                <img className={styles.img} src={IMG.LETTER} alt="letter" />

                <IconButton className={styles.hand} >
                    <PanToolAltOutlinedIcon />
                </IconButton>

            </Box>

        </Box>
    )
}
