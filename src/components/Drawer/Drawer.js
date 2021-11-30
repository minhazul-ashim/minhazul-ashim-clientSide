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

export default function Menu({ toggle, setToggle }) {

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setToggle({ ...toggle, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, background: '#333', height: '100vh', color: 'white' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button>
                    <ListItemIcon sx={{color: 'white'}}>
                        <RiQuestionnaireFill />
                    </ListItemIcon>
                    <ListItemText primary={'About Me'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{color: 'white'}}>
                        <FaLocationArrow />
                    </ListItemIcon>
                    <ListItemText primary={'Contact'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{color: 'white'}}>
                        <FaThList />
                    </ListItemIcon>
                    <ListItemText primary={'Projects'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{color: 'white'}}>
                        <FiDownload />
                    </ListItemIcon>
                    <ListItemText primary={'Download Resume'} />
                </ListItem>
            </List>
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
