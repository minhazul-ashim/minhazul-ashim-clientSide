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
                                <img src={hiavatar} style={{ width: '100%' }} alt="" />
                            </Box>
                        </Fade>


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
                                <FaDownload style={{ marginRight: '3px' }} /> <a target='__blank' href="https://drive.google.com/file/d/1tRSbhdEz2FFiTCnXoenXUFN1lyV3kXec/view?usp=sharing">Resume</a>
                            </Button>
                            <Button sx={{
                                ml: {
                                    md: '4%'
                                },
                                mt: {
                                    md: '2%'
                                }
                            }} variant='contained'>
                                <FaEnvelope style={{ marginRight: '3px' }} /> Contact Me
                            </Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
            <Container>
                <Typography variant='h4' sx={{ textAlign: 'center', mb: '3%' }}>
                    Some Projects
                </Typography>
                <Projects></Projects>
            </Container>
        </>
    );
};

export default Home;