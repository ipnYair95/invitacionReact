import { Box, Typography } from '@mui/material';
import styles from './TimelineItem.module.scss'
import { IItineraryItem } from '../../../../pages/Itinerary/constants';

interface Props {
    item: IItineraryItem;
    isEven?: boolean
}

export const TimelineItem = ({ item, isEven }: Props) => {

    return (
        <Box className={styles.timelineItem}>

            <Box className={styles.gridContainer}>

                <Box className={styles.gridItem} sx={{
                    order: isEven ? 1 : 3
                }}>
                    <img src={item.image} alt="" />
                </Box>

                <Box className={styles.gridItem} sx={{
                    order: 2
                }}>
                    <Box className={styles.separator} />
                </Box>

                <Box className={styles.gridItem} sx={{
                    order: isEven ? 3 : 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <Typography className={styles.hour} > {item.hour} </Typography> 
                    <Typography className={styles.description} > {item.description} </Typography> 
                </Box>

            </Box>


        </Box>
    );
}
