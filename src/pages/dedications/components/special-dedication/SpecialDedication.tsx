import styles from './SpecialDedication.module.scss';
import { Box, IconButton, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { SeparatorHearTitle } from '../../../../components';
import { IMG } from '../../../../assets';


export const SpecialDedication = ({ onClose }: any) => {
  return (
    <Box className={styles.modalContainer} >

      <Box className={styles.specialContainer}>

        <Box className={styles.header} >

          <Typography className={styles.text} > Desde el cielo </Typography>

          <IconButton onClick={onClose} >
            <CloseIcon />
          </IconButton>

        </Box>

        <hr />

        <Box className={styles.content}>

          <SeparatorHearTitle text='Abuelito' />

          <Box className={styles.text} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illo aut ipsam nam quibusdam velit ex tenetur cum minima saepe iure commodi molestiae soluta, ullam perspiciatis reprehenderit quos? Culpa, possimus.
          </Box>

          <Box className={styles.img} >
              <img src={IMG.SPECIAL} alt="" />
          </Box>

        </Box>

      </Box>

    </Box>
  )
}
