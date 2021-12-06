import { Container, Grid, List, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import thumbsup from '../../images/thumb-up-avatar..png'
import Slide from 'react-reveal/Slide';
import Flash from 'react-reveal/Flash';


const About = () => {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Grid container>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
                    <Box>
                        <img style={{ width: '90%' }} src={thumbsup} alt="" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ color: '#999', p: '5% 2%' }}>
                    <Flash>
                        <Typography variant='h4' sx={{
                            textAlign: {
                                md: 'left',
                                xs: 'center'
                            }
                        }}>
                            Md. Minhazul Haque
                        </Typography>
                        <Typography className='section-title' variant='h5' sx={{
                            textAlign: {
                                md: 'left',
                                xs: 'center'
                            }, mb: '6%'
                        }}>
                            MERN Stack Developer
                        </Typography>
                    </Flash>
                    <Slide right>
                        <Typography variant='body' sx={{ display: 'block', mb: '2%', textAlign: 'justify', fontSize: '20px' }}>
                            Md. Minhazul Haque aKa Minhazul Ashim. I'm a 22 years old Tech Enthusiast guy who was always fond of new technologies and gadgets. Programming was a childhood dream and currently working professionally as a Web Application Developer. Currently working on MERN Stack but keen to explore Python Programming and use it as second stack.
                            I'm self-driven, self-motivated and enthusiastic when it comes to my passion and programming. Everyday working on my problem solving skills.
                        </Typography>
                        <Typography variant='body' sx={{ display: 'block', mb: '2%', textAlign: 'justify', fontSize: '20px' }}>
                            Apart from professional information if we talk about hobbies, then I am really fond of Photography and Travelling. I love to try different kind of foods though I consider myself as a skinny guy. Haha! I am an animal lover. Not that outdoor sports lover but I am really into e-sports and video games!
                        </Typography>
                    </Slide>
                </Grid>
            </Grid>
            <Grid container sx={{ color: '#999' }}>
                <Grid item xs={12} md={6}>

                    <Typography variant='h4' sx={{ my: '4%' }}>
                        Education
                    </Typography>
                    <List sx={{ paddingLeft: '5%', borderLeft: '1px solid grey' }}>
                        <Slide right>
                            <List className='education' sx={{ pl: '2%', borderLeft: '1px solid #444', mb: '2%' }}>
                                <ListItemText>
                                    University of Chittagong, Bangladesh
                                </ListItemText>
                                <ListItemText>
                                    B.Sc in Mathematics
                                </ListItemText>
                                <ListItemText>
                                    2018 - Present
                                </ListItemText>
                            </List>
                        </Slide>
                        <Slide left>
                            <List className='education' sx={{ pl: '2%', borderLeft: '1px solid #444', mb: '2%' }}>
                                <ListItemText>
                                    Comilla Govt. College, Bangladesh
                                </ListItemText>
                                <ListItemText>
                                    Higher Secondary (Science)
                                </ListItemText>
                                <ListItemText>
                                    Year of 2017
                                </ListItemText>
                            </List>
                        </Slide>
                        <Slide right>
                            <List sx={{ pl: '2%', borderLeft: '1px solid #444', mb: '2%' }}>
                                <ListItemText>
                                    Comilla Modern High School, Bangladesh
                                </ListItemText>
                                <ListItemText>
                                    Secondary School (Science)
                                </ListItemText>
                                <ListItemText>
                                    Year of 2015
                                </ListItemText>
                            </List>
                        </Slide>
                    </List>
                </Grid>
                <Grid item xs={12} md={6}>

                    <Typography variant='h4' sx={{ my: '4%' }}>
                        Awards & Certifications
                    </Typography>

                    <List sx={{ paddingLeft: '5%', borderLeft: '1px solid grey' }}>
                        <Slide left>
                            <List className='education' sx={{ pl: '2%', borderLeft: '1px solid #444', mb: '2%' }}>
                                <ListItemText>
                                    MERN Stack Development Certification
                                </ListItemText>
                                <ListItemText>
                                    Year 2021
                                </ListItemText>
                                <ListItemText>
                                    From Programming Hero
                                </ListItemText>
                            </List>
                        </Slide>
                        <Slide right>
                            <List className='education' sx={{ pl: '2%', borderLeft: '1px solid #444', mb: '2%' }}>
                                <ListItemText>
                                    Spoken English & Phonetics
                                </ListItemText>
                                <ListItemText>
                                    Year 2021
                                </ListItemText>
                                <ListItemText>
                                    From Speakers Council, Bangladesh
                                </ListItemText>
                            </List>
                        </Slide>
                        <Slide left>
                            <List className='education' sx={{ pl: '2%', borderLeft: '1px solid #444', mb: '2%' }}>
                                <ListItemText>
                                    Fundamental Digital Marketing
                                </ListItemText>
                                <ListItemText>
                                    Year 2020
                                </ListItemText>
                                <ListItemText>
                                    From Google Digital Garage
                                </ListItemText>
                            </List>
                        </Slide>
                    </List>
                </Grid>
            </Grid>
        </Container >
    );
};

export default About;