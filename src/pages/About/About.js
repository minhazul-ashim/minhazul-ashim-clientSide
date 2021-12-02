import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import thumbsup from '../../images/thumb-up-avatar..png'
import Slide from 'react-reveal/Slide';
import Flash from 'react-reveal/Flash';


const About = () => {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: '50%' }}>
                <img style={{ width: '100%' }} src={thumbsup} alt="" />
            </Box>
            <Box sx={{ color: '#999' }}>
                <Flash>
                    <Typography className='section-title' variant='h4' sx={{ textAlign: 'center', my: '6%' }}>
                        Md. Minhazul Haque
                    </Typography>
                </Flash>
                <Slide right>
                    <Typography variant='body' sx={{ display: 'block', mb: '2%', textAlign: 'justify', fontSize: '20px' }}>
                        Md. Minhazul Haque aKa Minhazul Ashim. I'm a 22 years old TECH ENTHUSIAST guy who was always fond of new technologies and gadgets. Programming was a childhood dream and currently working professionally as a WEB APPLICATION DEVELOPER. Currently working on MERN Stack but keen to explore PYTHON Programming and use it as second stack.
                        I'm self-driven, self-motivated and enthusiastic when it comes to my passion and programming. Everyday working on my problem solving skills.
                    </Typography>
                </Slide>
                <Slide left>
                    <Typography variant='body' sx={{ display: 'block', mb: '2%', textAlign: 'justify', fontSize: '20px' }}>
                        If we talk about academics then I am still a student. I'm pursuing my Bachelor of Science degree in Mathematics from the University of Chittagong. It's likely to end in 2023 approx.
                    </Typography>
                </Slide>
            </Box>
        </Container>
    );
};

export default About;