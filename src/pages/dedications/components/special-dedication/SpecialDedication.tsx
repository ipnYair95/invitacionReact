import styles from './SpecialDedication.module.scss';
import { Box, IconButton, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { SeparatorHearTitle } from '../../../../components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const SpecialDedication = ({ onClose }: any) => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <Box className={styles.modalContainer} >

      <Box className={styles.specialContainer} data-aos="fade-up">

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

            <p>
              Siendo un gran papá para mí que cada día salió desde muy temprano y claro, regresaba tarde pero siempre llegaba con la mejor
              actitud por más cansado que estuviera.
            </p>

            <p>
              Nos cuidó más que su propia vida y velaba por que estuviéramos bien y cuando se enfermaba, él seguía de pie. Por ello cuando me
              entere de tu fallecimiento mi mundo se vino abajo.
            </p>

            <p>
              Se que ahora eres mi angelito y aunque no estés físicamente, estás en mi corazón y me dejas una gran enseñanza como el ser noble
              y trabajador.
            </p>

            <p>
              Siempre con una gran sonrisa y un gran ejemplo de padre
            </p>

            <p style={{ textAlign: 'right' }} >
              Un beso hasta el cielo...
            </p>

          </Box>

          <Box className={styles.img} >
            <img src={""} alt="" />
          </Box>

        </Box>

      </Box>

    </Box>
  )
}
