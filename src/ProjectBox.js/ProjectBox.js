import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const ProjectBox = ({ data }) => {

    const { name, desc, clientSide, backSide, tech, preview } = data;

    return (
        <Grid p={2} item xs={12} md={6} display='flex' justifyContent='center'>

            <Paper elevation={0}>

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