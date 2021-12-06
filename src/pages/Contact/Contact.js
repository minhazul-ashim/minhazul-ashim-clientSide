import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { Box } from '@mui/system';
import emailjs from 'emailjs-com';
import Typewriter from 'typewriter-effect';
import img from '../../images/64653.jpg'

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
        <Container sx={{ p: '9% 0 5% 0' }}>
            <Grid container>

                <Grid item xs={12} md={6}>
                    <img src={img} style={{ width: '100%', borderRadius: '5px' }} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant='h4' sx={{
                            textAlign: 'center', color: '#999', mt: {
                                xs: '2%',
                                md: '0%'
                            }
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
                    <Box sx={{
                        display: 'flex', justifyContent: 'center', width: '100%'
                    }}>
                        <form ref={form} onSubmit={sendEmail} style={{ width: '100%', padding: '4%' }}>

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

        </Container >
    );
};

export default Contact;