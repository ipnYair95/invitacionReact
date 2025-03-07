import styles from './VerticalTimeLine.module.scss';
import { Box } from "@mui/material"
import { TimelineItem } from "./components/timeline-item/TimelineItem"

interface Props {
    items: any
}

export const VerticalTimeline = ({ items }: Props) => {
    return (
        <Box className={styles.timeline} >

            <Box className={styles.container}>

                <Box className={styles.verticalLine} />

                <Box className={styles.items}>
                    {
                        items.map((item: any, index: number) => (
                            <TimelineItem key={index} item={item} isEven={index % 2 === 0} />
                        ))
                    }
                </Box>

            </Box>


        </Box>
    )
}
