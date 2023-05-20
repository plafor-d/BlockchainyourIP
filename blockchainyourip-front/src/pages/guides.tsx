import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Header from '../component/header';

function GuidesPage() {
  const [searchValue, setSearchValue] = useState('');
  const [showGuideDetails, setShowGuideDetails] = useState(false);

  const handleSearchChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  const handleGuideClick = () => {
    setShowGuideDetails(!showGuideDetails);
  };

  const handleClose = () => {
    setShowGuideDetails(false);
  };

  return (
    <Box m={3} mt={'100px'} >
      <Header />
      <Box display="flex" flexDirection="column" alignItems="center" sx={{ pb: 10 }}>
        <Typography variant="h4" gutterBottom>
          Guides
        </Typography>

        <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
          <TextField
            label="Rechercher un guide"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <Button variant="contained" color="primary" sx={{ ml: 2 }}>
            Rechercher
          </Button>
        </Box>
      </Box>
      <Box
        width={400}
        height={200}
        bgcolor="lightblue"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        onClick={handleGuideClick}
        sx={{ cursor: 'pointer' }}
      >
        <Typography variant="h5">First Guide</Typography>

      </Box>

      <Dialog open={showGuideDetails} onClose={handleClose} maxWidth="md">
        <IconButton
          sx={{ position: 'absolute', top: 0, right: 0 }}
          onClick={handleClose}
          color="inherit"
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle>Description du guide</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Nom: First Guide
          </Typography>
          <Typography variant="body1">
            Auteur: John Doe
          </Typography>
          <Typography variant="body1">
            Résumé: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography variant="body1">
            Note: 4.5/5
          </Typography>
          <Typography variant="body1">
            Formations en rapport:
            <ul>
              <li>Formation A</li>
              <li>Formation B</li>
              <li>Formation C</li>
            </ul>
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default GuidesPage;
