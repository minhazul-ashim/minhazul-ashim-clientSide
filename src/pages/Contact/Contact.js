import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { TextareaAutosize } from '@mui/base';
import { Box } from '@mui/system';
import emailjs from 'emailjs-com';


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
                    textAlign: 'center'
                }}>
                    Let's do something great! Send me an Email
                </Typography>
            </Box>

            <Box sx={{
                display: 'flex', justifyContent: 'center', p: '5%'
            }}>

                <form ref={form} onSubmit={sendEmail}>

                    <TextField sx={{ display: 'block' }} label="Email" variant="filled" name='email' />

                    <TextField sx={{ display: 'block' }} label="Your Name" variant="filled" name='name' />

                    <TextField sx={{ display: 'block' }} label="Subject" variant="filled" name='subject' />

                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={8}
                        placeholder="Your Message"
                        style={{ width: '100%' }} name='message'
                    />

                    <Button variant='contained' sx={{ display: 'block', backgroundColor: 'tomato' }} type='submit'>
                        Send Email
                    </Button>
                </form>

            </Box>

        </Container >
    );
};

export default Contact;