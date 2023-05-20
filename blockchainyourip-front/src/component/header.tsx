import logo from "../assets/logo.png";
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar style={{ backgroundColor: 'transparent', width: '100vw', display: 'flex', position: 'fixed', top: 0, left: 0, justifyContent: 'center', marginBottom: '100px  '}}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu} style={{ color: 'black' }}>
          <MenuIcon />
        </IconButton >
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <Link to="/">
            <MenuItem onClick={handleClose}>Guides</MenuItem>
          </Link>
          <Link to="/formations">
            <MenuItem onClick={handleClose}>Formations</MenuItem>
          </Link>
          <Link to='/calendrier'>
            <MenuItem onClick={handleClose}>Agenda</MenuItem>
          </Link>
        </Menu>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, m: '10px 0px 0px 1œ5px' }}>
          <img src={logo} alt="" width={290} height={50} />
        </Typography>
        <Link to="/auth">
          <Button
            color="inherit"
            style={{ color: '#2790E8' }}
            sx={{ '&:hover': { color: '#f05300' } }}
          >
            Login
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;