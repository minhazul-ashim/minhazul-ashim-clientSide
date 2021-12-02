import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ProjectBox from '../ProjectBox.js/ProjectBox';

const Projects = ({ home }) => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetch('./projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
            })

    }, [])

    return (
        <Box>
            <Grid mx='auto' container xs={8} md={12}>

                {
                    !home ?
                        projects.map(project => {
                            return (
                                <ProjectBox data={project} key={project.name}></ProjectBox>
                            )
                        })
                        :
                        projects.slice(0, 4).map(project => {
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