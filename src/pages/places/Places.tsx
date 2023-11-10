import styles from './Places.module.scss';
import { Box } from '@mui/material';
import { PLACES } from './constants';
import { PlaceItem } from './components';
import { SeparatorHearTitle } from '../../components';

export const Places = () => {

  const places = PLACES;

  return (
    <Box className={styles.placeContainer} >

      <SeparatorHearTitle text='Ubicaciones' />

      <Box className={styles.places} >
        {
          places.map((place) => <PlaceItem {...place} />)
        }
      </Box>


    </Box>
  )
}
