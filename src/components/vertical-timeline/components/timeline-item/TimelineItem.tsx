import { Box, Typography } from '@mui/material';
import styles from './Timelineitem.module.scss';
import { IItineraryItem } from '../../../../pages/Itinerary/constants';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
                    <FavoriteIcon className={styles.icon} />
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
