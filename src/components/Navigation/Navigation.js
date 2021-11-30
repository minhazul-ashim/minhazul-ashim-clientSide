import { AppBar, IconButton, Toolbar, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Menu from '../Drawer/Drawer';

const Navigation = () => {

    const [drawer, setDrawer] = useState({
        'right': false
    })

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ backgroundColor: 'transparent' }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        Minhazul Ashim
                    </Typography>
                    <Button onClick={() => {
                        setDrawer({
                            'right': true
                        })
                    }}>Drawer</Button>
                </Toolbar>
                <Menu toggle={drawer} setToggle={setDrawer}></Menu>
            </AppBar>
        </Box>
    );
};

export default Navigation;