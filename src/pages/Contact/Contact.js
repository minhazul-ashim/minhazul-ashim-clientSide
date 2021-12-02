import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { TextareaAutosize } from '@mui/base';
import { Box } from '@mui/system';
import emailjs from 'emailjs-com';
import Typewriter from 'typewriter-effect';


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
        <Container sx={{ py: '4%' }}>
            <Box>
                <Typography variant='h4' sx={{
                    textAlign: 'center', color: '#999'
                }}>
                    <Typewriter
                        options={{
                            strings: ['Let\'s get in touch. Email me'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </Typography>
            </Box>

            <Box sx={{
                display: 'flex', justifyContent: 'center', p: '5%'
            }}>

                <form ref={form} onSubmit={sendEmail}>

                    <TextField sx={{ display: 'block', background: '#ffffff', mb: '2%' }} label="Email" variant="filled" name='email' />

                    <TextField sx={{ display: 'block', background: '#ffffff', mb: '2%' }} label="Your Name" variant="filled" name='name' />

                    <TextField sx={{ display: 'block', background: '#ffffff', mb: '5%' }} label="Subject" variant="filled" name='subject' />

                    <TextField sx={{ display: 'block', background: '#ffffff', mb: '5%' }} label="Message" variant="outlined" name='message' />

                    <Button variant='contained' sx={{ display: 'block', backgroundColor: 'tomato' }} type='submit'>
                        Send Email
                    </Button>
                </form>

            </Box>

        </Container >
    );
};

export default Contact;