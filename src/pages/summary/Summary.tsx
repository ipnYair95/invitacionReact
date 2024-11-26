import { Box } from '@mui/material'
import styles from './Summary.module.scss';
import { Card } from './components';
import { SECTIONS } from '../../constants/contants';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Summary = () => {

  useEffect(() => {
    AOS.init();
  }, [])

 /*  const onDownload = () => {
    window.open(ASSETS.INVITATION, '_blank');
  }

  const button = <Button className={styles.buttonDownload} startIcon={<Download fontSize='large' />} onClick={onDownload} > </Button> */

  return (
    <Box className={styles.summary} id={SECTIONS.SUMMARY}  >

      <Box className={styles.content} data-aos="fade-up">

        <Box className={styles.card} >
          <Card />
        </Box>

      </Box>

    </Box>
  )
}
