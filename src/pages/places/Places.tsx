import styles from './Places.module.scss';
import { Box } from '@mui/material';
import { PLACES } from './constants';
import { PlaceItem } from './components';
import { SeparatorHearTitle } from '../../components';
import { SECTIONS } from '../../constants';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const Places = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  const places = PLACES;

  return (
    <Box className={styles.placeContainer} id={SECTIONS.PLACES} data-aos="fade-up" >

      <SeparatorHearTitle text='Ubicaciones' />

      <Box className={styles.places} >
        {
          places.map((place) => <PlaceItem key={place.reason} {...place} />)
        }
      </Box>


    </Box>
  )
}
