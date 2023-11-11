import styles from './App.module.scss';
import { MUSIC } from './assets/music/constants';

import { MainLayout } from './layout'
import { Box, CssBaseline, ThemeProvider, createTheme, useTheme } from '@mui/material';

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

  const onPlay = () => {

    console.log("click")

    const audioElement: any = document.getElementById('vid')!;
    audioElement.volume = 0.1;
    audioElement.loop = true;
    audioElement.play();

  }

  return (
    <ThemeProvider theme={getCustomTheme(theme)}>

      <CssBaseline />

      <audio id='vid' controls autoPlay={true} className={styles.audio}   >
        <source src={MUSIC.MAIN} type="audio/mpeg" />
      </audio>

      <Box className={styles.container} >
        <MainLayout onPlay={onPlay} />
      </Box>

    </ThemeProvider>
  )
}

export default App
