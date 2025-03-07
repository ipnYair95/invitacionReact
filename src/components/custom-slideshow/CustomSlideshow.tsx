import { Box } from '@mui/material';
import styles from './CustomSlideshow.module.scss';
import { useCustomSlideshow } from './hooks';

interface Props {
  images: string[];
  enableDots?: boolean;
}

export const CustomSlideshow = ({ images, enableDots = false }: Props) => {

  const { index, onDot } = useCustomSlideshow(images);

  return (
    <Box className={styles.customSlideshow} >

      <Box className={styles.content} sx={{
        transform: `translate3d(${-index * 100}%, 0, 0 )`
      }} >

        {
          images.map((image) => (
            <Box key={image} className={styles.slide} data-testid="slide-id">
              <img src={image} alt="" />
            </Box>
          ))
        }

      </Box>

      {
        enableDots &&
        <Box className={styles.slideDots} data-testid="dots-id">

          {
            images.map((image, idx) => (
              <Box data-testid="dot-id" key={image} className={styles.dots} onClick={() => onDot(idx)} sx={{
                backgroundColor: index === idx ? 'red' : '#E6E6E6'
              }} />
            ))
          }

        </Box>
      }

    </Box>
  )
}
