import { Avatar, Box, Typography } from '@mui/material'
import styles from './Summary.module.scss';
import { Card } from './components';
import { SECTIONS } from '../../constants/contants';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { IMG } from '../../assets';

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

        <img className={styles.crown} src={IMG.CROWN} alt="crown" />

        <Typography className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reprehenderit! Quo labore vero veritatis tempora enim a quas rerum cum ipsum? Dignissimos repellat architecto illo libero illum magni. Ad, accusantium.
        </Typography>        

      </Box>

    </Box>
  )
}
