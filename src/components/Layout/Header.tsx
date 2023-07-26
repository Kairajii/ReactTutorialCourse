import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ListIcon from '@mui/icons-material/List';
import {Link} from 'react-router-dom'
import '../.././styles/Header.css'
import { Drawer } from '@mui/material';

function Header() {

    const [mobileOpen, setMobileOpen] = useState<boolean | HTMLElement>(false);

    const handleDrawerToggle=()=>{
        setMobileOpen(!mobileOpen)
    }


    const drawer= (
        <Box onClick={handleDrawerToggle}
        sx={{textAlign:'center'}}>

<Typography color={'goldenrod'}
            variant='h6' component='div'
            sx={{flexGrow:1}}>
                <FastfoodIcon />
                My Resturant
            </Typography>
           
                <ul className='mobile__navigation__menu'>
                    <li> <Link to={'/'} >Home</Link> </li>
                    <li> <Link to={'/menu'} >Menu</Link> </li>
                    <li> <Link to={'/contact'} >Contact us</Link> </li>
                    <li> <Link to={'/about'} >About us</Link> </li>
                </ul>
          
        </Box>
    )

  return(
    <Box>
        <AppBar component={'nav'} sx={{bgcolor:'black'}}>  
        <Toolbar>

            <IconButton color='inherit' aria-aria-label='open drawer'
            edge="start" sx={{mr:2,display:{sm:'none'}}}
            onClick={handleDrawerToggle} >
                <ListIcon />
            </IconButton>

            <Typography color={'goldenrod'}
            variant='h6' component='div'
            sx={{flexGrow:1}}>
                <FastfoodIcon />
                My Resturant
            </Typography>
            <Box sx={{display:{xs:'none', sm:'block'}}}>
                <ul className='navigation__menu'>
                    <li> <Link to={'/'} >Home</Link> </li>
                    <li> <Link to={'/menu'} >Menu</Link> </li>
                    <li> <Link to={'/contact'} >Contact us</Link> </li>
                    <li> <Link to={'/about'} >About us</Link> </li>
                </ul>
            </Box>
        </Toolbar>
        </AppBar>

        <Box component='nav'>
            <Drawer variant='temporary' open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{display:{xs:'block',sm:'none'}}}
                >
                {drawer}
            </Drawer>
        </Box>

    </Box>
  );
}

export default Header