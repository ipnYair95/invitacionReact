
import { Box } from '@mui/material';
import styles from './SlideShow.module.scss';
import { CustomSlideshow, SeparatorHearTitle } from '../../components';
import { SECTIONS } from '../../constants';

import AOS from 'aos';
import { useEffect } from 'react';

export const SlideShow = () => {

  const images: any[] = [];

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
