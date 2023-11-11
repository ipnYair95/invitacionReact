import { SeparatorHearTitle } from '../../components';
import styles from './Gifs.module.scss';
import { Box } from "@mui/material"
import { GIFS } from './constants';
import { CardGif } from './components';
import { nanoid } from 'nanoid';
import { SECTIONS } from '../../constants/contants';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Gifs = () => {

  const gifs = GIFS;

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <Box className={styles.gifContainer} id={SECTIONS.GIFS} data-aos="fade-up" >

      <SeparatorHearTitle text='No olvidar' />

      <Box className={styles.gifs}>
        {
          gifs.map((gif) => <CardGif key={nanoid()}  {...gif} />)
        }
      </Box>

    </Box>
  )
}
