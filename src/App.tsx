import styles from './App.module.scss';

import { MainLayout } from './layout'
import { Box } from '@mui/material';


function App() {

  return (
    <Box className={styles.container} >    
      <MainLayout />
    </Box>
  )
}

export default App
