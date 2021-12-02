import React from 'react';
import { Box } from '@mui/system'
import { Container, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Box sx={{ color: '#ffffff', textAlign: 'center', padding: '8% 0 1% 0' }} >
            <Container>
                <Typography variant='body'>
                    All Rights Reserved. &copy; Minhazul Ashim | 2021
                </Typography>
            </Container>
        </Box >
    );
};

export default Footer;