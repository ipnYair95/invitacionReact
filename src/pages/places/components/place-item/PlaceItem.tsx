import { Avatar, Box, Modal, Typography } from '@mui/material';
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
                <Box>
                    <ModalMap url={url} onClose={onHandleClose} />
                </Box>
            </Modal>

            <Box className={styles.header} >

                <Box className={styles.cardHeader}>

                    <Typography className={styles.reason}> {reason} </Typography>

                    <br />

                    <Box className={styles.avatarContainer}>
                        <Avatar src={img} sx={{ width: 100, height: 100 }} />
                    </Box>

                </Box>

                <Box className={styles.info}>

                    <Typography className={styles.placeName}> {placeName} </Typography>

                    <Box className={styles.time}> {time} </Box>

                    <Box className={styles.divider}>✦ ❋ ✦</Box>

                    <Box className={styles.addressSection}>

                        <Typography className={styles.label}>Dirección</Typography>

                        <Typography className={styles.address}>
                            {address}
                        </Typography>

                    </Box>

                    <Box className={styles.mapButton} onClick={onOpen} >
                        <span className={styles.buttonIcon}>📍</span>
                        Ver Ubicación
                    </Box>



                </Box>

            </Box>

        </Box>
    )
}
