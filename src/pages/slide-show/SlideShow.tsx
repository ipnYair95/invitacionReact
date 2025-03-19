
import { Box } from '@mui/material';
import { IMG } from '../../assets';
import styles from './SlideShow.module.scss';
import { CustomSlideshow, SeparatorHearTitle } from '../../components';
import { SECTIONS } from '../../constants';

import AOS from 'aos';
import { useEffect } from 'react';

export const SlideShow = () => {

  const images = [IMG.IMG1, IMG.IMG2, IMG.IMG3, IMG.IMG4, IMG.IMG5, IMG.IMG6];

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Box className={styles.main} id={SECTIONS.SLIDES} data-aos="fade-up">

      <SeparatorHearTitle text={'Fotos'} />

      <Box className={styles.slideContainer} >

        <CustomSlideshow images={images} enableDots />

      </Box>

    </Box>
  )
}
