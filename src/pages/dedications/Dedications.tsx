import { Box } from '@mui/material';
import styles from './Dedications.module.scss';
import { DEDICATIONS } from './constants/constants';
import { CardDedication } from './components/card-dedication/CardDedication';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { SECTIONS } from '../../constants/contants';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Dedications = () => {

  const [ , ] = useState(false);

  const dedications = DEDICATIONS;

  useEffect(() => {
    AOS.init();
  }, [])

  /* const onOpen = () => {

    setTimeout(() => {
      setIsOpen(true);
    }, 1000);

  }

  const onClose = () => setIsOpen(false); */

  return (
    <Box className={styles.dedicationsContainer} id={SECTIONS.DEDICATIONS} data-aos="fade-up">

      {/* <Box className={styles.special} data-aos="fade-up">

        <Modal open={isOpen} >          
            <SpecialDedication onClose={onClose} />          
        </Modal>

        <Letter className={styles.letter} onClick={onOpen} />

      </Box> */}

      <Box className={styles.container} data-aos="fade-up">

        {
          dedications.map((dedication) => <CardDedication key={nanoid()} {...dedication} />)
        }

      </Box>


    </Box>

  )
}
