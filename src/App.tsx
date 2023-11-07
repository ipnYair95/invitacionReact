import styles from './App.module.scss';

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
    fontFamily: ['Sansita Swashed', 'sans-serif'].join(','),
  }
});


function App() {

  const theme = useTheme();

  return (
    <ThemeProvider theme={getCustomTheme(theme)}>
      <CssBaseline />
      <Box className={styles.container} >
        <MainLayout />
      </Box>
    </ThemeProvider>
  )
}

export default App
