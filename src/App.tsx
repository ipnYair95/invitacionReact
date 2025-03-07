import { useState } from 'react';
import styles from './App.module.scss';
import { MainLayout } from './layout'
import { Box, CssBaseline, ThemeProvider, Typography, createTheme, useTheme } from '@mui/material';
import { MUSIC } from './assets/music';

const breakpointOverrides = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

const getCustomTheme = (theme: any) => createTheme({
  ...theme,
  breakpoints: { values: { ...breakpointOverrides } },
  typography: {
    fontFamily: ['Oregano', 'cursive'].join(','),
  }
});


function App() {

  const theme = useTheme();

  const [disabled,] = useState(false);

  if (disabled) {

    return <Typography> 404 NOT FOUND </Typography>

  }

  return (
    <ThemeProvider theme={getCustomTheme(theme)}>

      <CssBaseline />

      <audio id='vid' controls autoPlay={true} className={styles.audio}   >
        <source src={MUSIC.MAIN} type="audio/mpeg" />
      </audio>

      <Box className={styles.container} >
        <MainLayout />
      </Box>

    </ThemeProvider>
  )
}

export default App
