import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react';

const ProjectBox = ({ data }) => {

    const { img, name, desc, clientSide, backSide, tech, preview } = data;

    return (
        <Grid p={2} item xs={12} md={6}>

            <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                <Box sx={{ width: '60%', my: '3%' }}>
                    <img src={img} style={{ width: '100%' }} alt="" />
                </Box>

                <Typography textAlign="center" variant='h4'>
                    {name}
                </Typography>
                <Typography textAlign='justify' display='block' my={2} variant='body'>
                    {desc.slice(0, 150)}...
                </Typography>
                <Button variant='outlined'>
                    View Detail
                </Button>
            </Paper>

        </Grid>
    );
};

export default ProjectBox;