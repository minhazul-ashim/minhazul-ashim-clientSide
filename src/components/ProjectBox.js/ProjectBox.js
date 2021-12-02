import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import ProjectDetail from '../ProjectDetail/ProjectDetail';


const ProjectBox = ({ data }) => {

    const { img, name, desc, clientSide, backSide, tech, preview } = data;

    const [openDetail, setOpenDetail] = useState(false)

    return (
        <Grid p={2} item xs={12} md={6}>

            <LightSpeed right>

                <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#999' }}>

                    <Box sx={{ width: '60%', my: '3%' }}>
                        <img src={img} style={{ width: '100%' }} alt="" />
                    </Box>

                    <Typography textAlign="center" variant='h4'>
                        {name}
                    </Typography>
                    <Typography textAlign='justify' display='block' my={2} variant='body'>
                        {desc.slice(0, 150)}...
                    </Typography>
                    <Button onClick={() => setOpenDetail(true)} variant='outlined' sx={{ color: 'white', borderColor: '#00a873' }}>
                        View Detail
                    </Button>
                </Paper>
            </LightSpeed>
            <ProjectDetail data={data} state={openDetail} setState={setOpenDetail}></ProjectDetail>
        </Grid>
    );
};

export default ProjectBox;