import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ProjectBox from '../../ProjectBox.js/ProjectBox';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetch('./projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                console.log(data)
            })

    }, [])

    return (
        <Box>
            <Grid mx='auto' container xs={8} md={12}>
                {
                    projects.map(project => {
                        return (
                            <ProjectBox data={project} key={project.name}></ProjectBox>
                        )
                    })
                }
            </Grid>
        </Box>
    );
};

export default Projects;