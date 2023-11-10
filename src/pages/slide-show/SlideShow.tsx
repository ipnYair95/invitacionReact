
import { Box } from '@mui/material';
import { IMG } from '../../assets';
import styles from './SlideShow.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { nanoid } from 'nanoid'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { SeparatorHearTitle } from '../../components';

export const SlideShow = () => {

  const images = [IMG.IMG1, IMG.IMG2, IMG.IMG3, IMG.IMG4, IMG.IMG5, IMG.IMG6, IMG.IMG7, IMG.IMG8];

  return (
    <Box className={styles.main}>

      <SeparatorHearTitle text={'Mis amores'} />

      <Box className={styles.slideContainer} >

        <Swiper
          className={styles.swiper}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          effect={'fade'}
          modules={[Autoplay, Pagination, EffectFade]}
        >
          {
            images.map((image) => (
              <SwiperSlide key={nanoid()} >

                <Box className={styles.slide} sx={{ backgroundImage: `url(${image})` }} >
                  ds
                </Box>

              </SwiperSlide>
            ))
          }
        </Swiper>

      </Box>

    </Box>
  )
}
