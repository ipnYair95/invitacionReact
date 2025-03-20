import { Box, Typography } from '@mui/material'
import styles from './Parent.module.scss'
import { IParent } from '../../contants'
import { SeparatorHeartLine } from '../../../../components';

interface Props {
  parent: IParent;
}

export const Parent = ({ parent }: Props) => {
  return (
    <Box className={styles.parent}>

        <Typography className={`${styles.title}`} > { parent.title } </Typography>

        <SeparatorHeartLine />

        {
          parent.names.map((name) => (
            <Typography className={styles.name} key={name}> { name } </Typography>
          ))
        }

    </Box>
  )
}
