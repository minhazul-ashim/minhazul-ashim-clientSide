import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import thumbsup from '../../images/thumb-up-avatar..png'

const About = () => {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: '50%' }}>
                <img style={{ width: '100%' }} src={thumbsup} alt="" />
            </Box>
            <Box>
                <Typography variant='h4' sx={{ textAlign: 'center', my: '3%', textDecoration: 'underline' }}>
                    Md. Minhazul Haque
                </Typography>
                <Typography variant='body' sx={{ display: 'block', mb: '2%', textAlign: 'justify', fontSize: '20px' }}>
                    Md. Minhazul Haque aKa Minhazul Ashim. I'm a 22 years old TECH ENTHUSIAST guy who was always fond of new technologies and gadgets. Programming was a childhood dream and currently working professionally as a WEB APPLICATION DEVELOPER. Currently working on MERN Stack but keen to explore PYTHON Programming and use it as second stack.
                    I'm self-driven, self-motivated and enthusiastic when it comes to my passion and programming. Everyday working on my problem solving skills.
                </Typography>
                <Typography variant='body' sx={{ display: 'block', mb: '2%', textAlign: 'justify', fontSize: '20px' }}>
                    If we talk about academics then I am still a student. I'm pursuing my Bachelor of Science degree in Mathematics from the University of Chittagong. It's likely to end in 2023 approx.
                </Typography>
            </Box>
        </Container>
    );
};

export default About;