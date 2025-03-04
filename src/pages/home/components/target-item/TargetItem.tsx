import { Box, Divider, Typography } from '@mui/material';
import styles from './TargetItem.module.scss';

interface Props {
    label: string;
}

export const TargetItem = ({ label }: Props) => {
    return (
        <Box className={styles.targetItem}>

            <Divider className={`${styles.divider} title-shadow`} />

            <Typography className={`${styles.label} title-shadow`} > {label} </Typography>

            <Divider className={`${styles.divider} title-shadow`} />

        </Box>
    )
}
