import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import hiavatar from '../../images/hi-avatar.png'
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade'
import { FaDownload } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa';
import Projects from '../../components/Projects/Projects';

const Home = () => {

    return (
        <>
            <Box sx={{ pt: '2%', pb: '1%' }}>
                <Grid container>

                    <Grid item xs={12} md={5}>

                        <Fade left>
                            <Box sx={{ width: '100%' }}>
                                <img src={hiavatar} style={{ width: '80%' }} alt="" />
                            </Box>
                        </Fade>


                    </Grid>

                    <Grid item xs={12} md={7} sx={{ display: 'flex', flexDirection: ' column', justifyContent: 'center', p: '5%' }}>
                        <Box>
                            <Typography variant='h2'>
                                <span style={{ fontSize: '3.4rem', color: 'white' }}>This is</span> <span style={{ color: 'tomato', fontWeight: '500' }}>Minhazul Ashim</span>
                            </Typography>
                            <Typography variant='h4' sx={{ my: '3%', color: '#00a873', fontWeight: '500' }}>
                                <Typewriter
                                    options={{
                                        strings: ['React Developer', 'MERN Stack Developer', 'Tech Enthusiast'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', my: '4%' }}>
                            <Button variant='contained' sx={{
                                backgroundColor
                                    : 'tomato'
                            }}>
                                <FaDownload style={{ marginRight: '3px' }} /> <a style={{ textDecoration: 'none', color: 'white' }} target='__blank' href="https://drive.google.com/file/d/1tRSbhdEz2FFiTCnXoenXUFN1lyV3kXec/view?usp=sharing">Resume</a>
                            </Button>
                            <Button sx={{ mt: '3%', background: '#00a873' }} variant='contained'>
                                <FaEnvelope style={{ marginRight: '3px' }} /> Contact Me
                            </Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
            <Container>
                <Typography className='section-title' variant='h4' sx={{ textAlign: 'center', mb: '3%', color: 'white' }}>
                    Some Projects
                </Typography>
                <Projects home={true}></Projects>
            </Container>
        </>
    );
};

export default Home;