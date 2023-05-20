import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <Box left={0}>
        <IconButton onClick={toggleMenu}>
          <MenuIcon  />
        </IconButton>
      </Box>
      <div
        style={{
          position: 'absolute',
          top: '64px',
          left: 0,
          backgroundColor: '#fff',
          width: 'fit-content',
          boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
          display: isMenuOpen ? 'block' : 'none',
          zIndex: 998,
        }}
      >
        <Divider />
        <List style={{ color: 'black' }}>
          {['Guides', 'Formations', 'Calendrier'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 997,
          }}
          onClick={toggleMenu}
        />
      )}
    </>
  );
}