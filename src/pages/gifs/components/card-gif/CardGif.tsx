import styles from './CardGif.module.scss';
import { Avatar, Box, Typography } from '@mui/material';
import { IGif } from "../../constants/constants"
import { SeparatorHeart } from '../../../../components';

export const CardGif = ({ img, title }: IGif) => {
  return (
    <Box className={styles.container} >

      <Box className={styles.subCard} >

        <Typography className={styles.title} > {title} </Typography>

        <SeparatorHeart />

        <Box className={styles.emote} >
            <Avatar src={img} sx={{
              width: 100,
              height: 100
            }}  />          
        </Box>

      </Box>

    </Box>
  )
}
