import { Box, Button, Typography } from '@mui/material';
import styles from './Confirm.module.scss';
import CheckIcon from '@mui/icons-material/Check';

export const Confirm = () => {

  const onClick = () => {
    window.open('https://forms.gle/bWq5jREZgUrC1yCh7', '_blank');
  }

  return (
    <Box className={styles.confirm}>

      <Typography className={`${styles.title} title-shadow`} > Confirmar Asistencia </Typography>

      <Typography className={styles.text} > Espero que puedas venir a compartir conmigo este día inolvidable. </Typography>

      <Typography className={styles.text} > Favor de confirmar tu presencia. </Typography>

      <Button className={styles.button}  onClick={onClick} >
        <CheckIcon />
      </Button>

    </Box>
  )
}
