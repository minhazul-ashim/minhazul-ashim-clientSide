import { Button, Drawer, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import hiavatar from '../../images/hi-avatar.png'
import Typewriter from 'typewriter-effect';

const Home = () => {

    return (
        <Box sx={{ py: '2%' }}>
            <>
                <Grid container>

                    <Grid item xs={12} md={5}>
                        <Box sx={{ width: '100%' }}>
                            <img src={hiavatar} style={{ width: '100%' }} alt="" />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={7} sx={{ display: 'flex', flexDirection: ' column', justifyContent: 'center', p: '5%' }}>
                        <Box>
                            <Typography variant='h2'>
                                This is <span style={{ color: 'tomato' }}>Minhazul Ashim</span>
                            </Typography>
                            <Typography variant='h4'>
                                <Typewriter
                                    options={{
                                        strings: ['A React Developer', 'A MERN Stack Developer', 'A Tech Enthusiast'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Typography>
                        </Box>
                        <Box sx={{ width: '60%', m: '5% 0' }}>
                            <Button variant='contained'>
                                Download Resume
                            </Button>
                            <Button sx={{
                                ml: {
                                    md: '4%'
                                },
                                mt: {
                                    md: '2%'
                                }
                            }} variant='contained'>
                                Contact Me
                            </Button>
                        </Box>
                    </Grid>

                </Grid>
            </>
        </Box>
    );
};

export default Home;