import { Box, Divider, Typography } from '@mui/material';
import styles from './TargetItem.module.scss';

interface Props {
    label: string;
}

export const TargetItem = ({ label }: Props) => {
    return (
        <Box className={styles.targetItem}>

            <Divider className={styles.divider} />

            <Typography className={styles.label} > {label} </Typography>

            <Divider className={styles.divider} />

        </Box>
    )
}
