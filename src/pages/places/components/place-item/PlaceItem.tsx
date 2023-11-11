import { Box, Button, Modal, Typography } from '@mui/material';
import { IPlace } from '../../constants';
import styles from './PlaceItem.module.scss';
import { ModalMap } from '../../../../components';
import { useState } from 'react';

export const PlaceItem = ({ address, img, placeName, reason, time, url }: IPlace) => {

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);

  const onHandleClose = () => setIsOpen(false);

  return (
    <Box className={styles.place} >

      <Modal open={isOpen}  >
        <>
          <ModalMap url={url} onClose={onHandleClose} />
        </>
      </Modal>

      <Typography className={styles.reason} > {reason} </Typography>

      <Typography className={styles.name} > {placeName} </Typography>

      <Typography className={styles.time} > {time} </Typography>

      <Box className={styles.imgContainer} >
        <img className={styles.img} src={img} alt="" />
      </Box>

      <Typography className={styles.address} > {address} </Typography>

      <Button variant='outlined' onClick={onOpen} >
        Ver ubicacion
      </Button>

    </Box>
  )
}
