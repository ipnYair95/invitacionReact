import { Box } from '@mui/material';
import styles from './Dedications.module.scss';
import { DEDICATIONS } from './constants/constants';
import { CardDedication } from './components/card-dedication/CardDedication';
import { nanoid } from 'nanoid';

export const Dedications = () => {

  const dedications = DEDICATIONS;

  return (
    <Box className={styles.container}>

      {
        dedications.map( (dedication) => <CardDedication key={nanoid()} {...dedication} /> )
      }

    </Box>
  )
}
