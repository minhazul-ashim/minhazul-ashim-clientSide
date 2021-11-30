import { AppBar, IconButton, Toolbar, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar sx={{backgroundColor: '#333' }} position="static">
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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Minhazul Ashim
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;