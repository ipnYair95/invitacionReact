import styles from './Header.module.scss';
import { Box, Button, IconButton } from "@mui/material"
import { useState } from "react";
import { navItems } from "./constants";
import { Menu } from "./components";
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useScrolling } from '../../hooks/useScrolling';
import { SECTIONS } from '../../constants';


export const Header = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollY } = useScrolling();

  const goTo = ( section: SECTIONS ) => {

    const element: any = document.querySelector(`#${section}`);

    window.scrollTo({
      top: element!.offsetTop,
      behavior: "smooth",
    })

  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const getBackground = () => {

    const opacity = scrollY <= 255
      ? scrollY / 255
      : 1;

    return `rgba( 255, 175, 199 , ${opacity} );`

  }

  return (
    <Box className={styles.header} sx={{
      backgroundColor: getBackground()
    }} >

      <Box className={styles.customHeader} >

        <IconButton className={styles.menuIcon} aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
          <DehazeIcon color='inherit' />
        </IconButton>

        <Box className={styles.menuItems}  >
          {
            navItems.map((item) => (
              <Button className={styles.button} key={item.title} onClick={ () => goTo(item.section) }  >
                {item.title}
              </Button>
            ))
          }
        </Box>

      </Box>

      <Menu handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} goTo={goTo} />

    </Box>


  )
}
