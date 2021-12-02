import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { RiQuestionnaireFill } from 'react-icons/ri'
import { FaLocationArrow } from 'react-icons/fa'
import { FaThList } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import { Divider } from '@mui/material';

export default function Menu({ toggle, setToggle }) {

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setToggle({ ...toggle, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, background: '#333', height: '100vh', color: '#999', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button>
                    <ListItemIcon sx={{ color: '#999' }}>
                        <FaHome />
                    </ListItemIcon>
                    <ListItemText activeStyle={{ borderBottom: '2px solid #FE915E' }} as={NavLink} sx={{ color: '#999', textDecoration: 'none' }} to='/home' primary={'Home'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{ color: '#999' }}>
                        <RiQuestionnaireFill />
                    </ListItemIcon>
                    <ListItemText activeStyle={{ borderBottom: '2px solid #FE915E' }} as={NavLink} sx={{ color: '#999', textDecoration: 'none' }} to='/about' primary={'About Me'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{ color: '#999' }}>
                        <FaLocationArrow />
                    </ListItemIcon>
                    <ListItemText activeStyle={{ borderBottom: '2px solid #FE915E' }} as={NavLink} sx={{ color: '#999', textDecoration: 'none' }} to='/contact' primary={'Contact'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{ color: '#999' }}>
                        <FaThList />
                    </ListItemIcon>
                    <ListItemText as={NavLink} to='/projects' activeStyle={{ borderBottom: '2px solid #FE915E' }} sx={{ color: '#999', textDecoration: 'none' }} primary={'Projects'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{ color: '#999' }}>
                        <FiDownload />
                    </ListItemIcon>
                    <ListItemText>
                        <a style={{ color: '#999', textDecoration: 'none' }} target='__blank' href="https://drive.google.com/file/d/1tRSbhdEz2FFiTCnXoenXUFN1lyV3kXec/view?usp=sharing">Download Resume</a>
                    </ListItemText>
                </ListItem>
            </List>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #999', py: '4%' }}>
                <a target='__blank' style={{color: '#999'}} href="https://github.com/minhazul-ashim">
                    <BsGithub style={{ fontSize: '20px' }} />
                </a>
                <a target='__blank' style={{color: '#999'}} href="https://facebook.com/minhazulhaque.ashim">
                    <BsFacebook style={{ fontSize: '20px' }} />
                </a>
                <a target='__blank' style={{color: '#999'}} href="https://twitter.com/">
                    <BsTwitter style={{ fontSize: '20px' }} />
                </a>
                <a target='__blank' style={{color: '#999'}} href="https://linkedin.com/in/minhazulhaqueashim">
                    <BsLinkedin style={{ fontSize: '20px' }} />
                </a>
            </Box>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={'right'}>
                <Drawer
                    anchor={'right'}
                    open={toggle['right']}
                    onClose={toggleDrawer('right', false)}
                >
                    {list('right')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
