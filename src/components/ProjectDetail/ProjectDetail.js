import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectDetail = ({ data, state, setState }) => {

    const { img, name, desc, clientSide, backSide, tech, preview } = data;

    const handleClose = () => {
        setState(false);
    };

    return (
        <div>
            <Dialog
                fullScreen
                open={state}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative', background: '#333' }}>

                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <Button variant='outlined'>
                            <a target='__blank' style={{
                                textDecoration: 'none', color: '#999'
                            }} href="https://github.com/minhazul-ashim">
                                Follow Me
                            </a>
                        </Button>

                        <CloseIcon onClick={handleClose} sx={{ fontSize: '30px', color: 'white', opacity: '0.6', border: '1px solid white' }}></CloseIcon>

                    </Toolbar>

                </AppBar>

                <Grid container p={5}>

                    <Grid item xs={12} md={5}>

                        <Box>
                            <img src={img} style={{ width: '100%' }} alt="" />
                        </Box>

                    </Grid>

                    <Grid item xs={12} md={7}>

                        <Typography sx={{ my: '4%' }} variant='h3'>
                            {name}
                        </Typography>

                        <Typography variant='body' textAlign='justify'>
                            {desc}
                        </Typography>

                        <Typography variant='h6' sx={{ my: '1%' }}>
                            Technolgies Used:
                        </Typography>

                        <List sx={{ display: 'flex', mb: '3%', flexWrap: 'wrap' }}>
                            {
                                tech.map(el => {
                                    return (
                                        <ListItem sx={{
                                            padding: '1px 1px',
                                            borderRadius: '20px',
                                            border: '1px solid #00a873',
                                            mr: '5px',
                                            textAlign: 'center'
                                        }}>
                                            <ListItemText>
                                                {el}
                                            </ListItemText>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>

                        <Typography variant='h6'>
                            Links :
                            <a style={{
                                color: 'blue',
                                mx: '2%', textDecoration: 'none', display: 'block'
                            }} target='__blank' href={preview}>Livesite</a>

                            <a style={{
                                color: 'blue',
                                mr: '2%', textDecoration: 'none', display: 'block'
                            }} target='__blank' href={clientSide}>Client Side Code</a>

                            {
                                backSide ?
                                    <a style={{
                                        color: 'blue',
                                        mr: '2%', textDecoration: 'none', display: 'block'
                                    }} target='__blank' href={backSide}>Server Side Code</a>
                                    :
                                    ''
                            }
                        </Typography>

                    </Grid>

                </Grid>

            </Dialog>
        </div>
    );
}

export default ProjectDetail;