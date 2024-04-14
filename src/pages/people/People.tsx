import { Box, Divider, Typography } from "@mui/material"
import styles from './People.module.scss';



export const People = () => {
  return (
    <Box className={styles.people} >

      <Box className={styles.parentCard}>
        <Typography className={styles.title} > Mis padres </Typography>

        <Divider />

        <Typography className={styles.parent} > Sonia Luz María Zenil Garcia </Typography>

        <Typography className={styles.parent} > Fernando Raúl Figueroa Munguía </Typography>

      </Box>

      <Box className={styles.parentCard}>
        <Typography className={styles.title} > Mis padrinos </Typography>

        <Divider />

        <Typography className={styles.parent} > Maria Patricia Hernández Munguía </Typography>

        <Typography className={styles.parent} > Braulio Miguel Ruiz Martínez </Typography>
      </Box>


    </Box>
  )
}
