import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { navItems } from '../../constants';
import styles from './Menu.module.scss';

export const Menu = ({ handleDrawerToggle, mobileOpen, window }: any) => {

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Drawer className={styles.menu} container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}          
        >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

                <List>
                    {navItems.map((item) => (
                        <ListItem key={item} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>

        </Drawer>
    )
}
