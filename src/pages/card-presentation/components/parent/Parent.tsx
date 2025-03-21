import { Box, Typography } from '@mui/material'
import styles from './Parent.module.scss'
import { IParent } from '../../contants'

interface Props {
  parent: IParent;
}

export const Parent = ({ parent }: Props) => {
  return (
    <Box className={styles.parent}>

        <Typography className={`${styles.title}`} > { parent.title } </Typography>

        {
          parent.names.map((name) => (
            <Typography className={styles.name} key={name}> { name } </Typography>
          ))
        }

    </Box>
  )
}
