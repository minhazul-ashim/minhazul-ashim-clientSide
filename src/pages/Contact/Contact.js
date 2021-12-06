import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { Box } from '@mui/system';
import emailjs from 'emailjs-com';
import Typewriter from 'typewriter-effect';
import img from '../../images/64653.jpg'
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vxqem6h', 'template_3ls9vpt', form.current,
            'user_GLMGa3QiH8Us2ODblTLrc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <Container sx={{ p: '2% 4%' }}>
            <Box>
                <Typography variant='h4' sx={{
                    textAlign: 'center', color: '#999', my: '4%'
                }}>
                    <Typewriter
                        options={{
                            strings: ['Let\'s get in touch.', 'We will do something amazing!!!', 'Email me'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </Typography>
            </Box>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <img src={img} style={{ width: '100%', borderRadius: '5px' }} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        width: '100%'
                    }}>
                        <form ref={form} onSubmit={sendEmail} style={{ width: '100%', padding: '5%' }}>

                            <input className='contact-email' type="text" name="email" placeholder='Enter your Email' />

                            <input className='contact-email' type="text" name="name" placeholder='Enter your Name' />

                            <input className='contact-email' type="text" name="subject" placeholder='Subject' />

                            <textarea className='contact-email' name="message" style={{ width: '100%' }} rows="10" placeholder='Write me'>

                            </textarea>

                            <Button variant='contained' sx={{ display: 'block', backgroundColor: '#FE915E' }} type='submit'>
                                Send Email
                            </Button>
                        </form>

                    </Box>
                </Grid>
            </Grid>

            <Grid container sx={{ my: '5%' }}>

                <Grid item xs={6} md={6} color='#999' p={5}>

                    <Typography variant='h4' my={2}>
                        Reach me
                    </Typography>

                    <Typography variant='h6'>
                        Address: Nandir Haat, Hathazari, Chittagong-4330, Bangladesh
                    </Typography>

                    <Typography variant='h6'>
                        Phone: (+880)1620268721
                    </Typography>

                </Grid>

                <Grid item xs={6} md={6} color='#999' p={5}>

                    <Typography variant='h4' my={2}>
                        Digital Footprints
                    </Typography>

                    <Box sx={{
                        width: {
                            xs: '100%',
                            md: '50%'
                        }, py: '4%', display: 'flex', justifyContent: 'space-around'
                    }}>
                        <a className='social-icon' target='__blank' style={{ color: '#999' }} href="https://github.com/minhazul-ashim">
                            <BsGithub style={{ fontSize: '20px' }} />
                        </a>
                        <a className='social-icon' target='__blank' style={{ color: '#999' }} href="https://facebook.com/minhazulhaque.ashim">
                            <BsFacebook style={{ fontSize: '20px' }} />
                        </a>
                        <a className='social-icon' target='__blank' style={{ color: '#999' }} href="https://twitter.com/">
                            <BsTwitter style={{ fontSize: '20px' }} />
                        </a>
                        <a className='social-icon' target='__blank' style={{ color: '#999' }} href="https://linkedin.com/in/minhazulhaqueashim">
                            <BsLinkedin style={{ fontSize: '20px' }} />
                        </a>
                    </Box>

                </Grid>
            </Grid>
        </Container >
    );
};

export default Contact;