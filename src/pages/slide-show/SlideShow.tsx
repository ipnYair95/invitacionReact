
import { Box } from '@mui/material';
import { IMG } from '../../assets';
import styles from './SlideShow.module.scss';
import { CustomSlideshow, SeparatorHearTitle } from '../../components';
import { SECTIONS } from '../../constants';

import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const SlideShow = () => {

  const images = [IMG.IMG1, IMG.IMG2, IMG.IMG3];

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
