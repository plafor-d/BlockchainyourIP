import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Header from '../component/header';
import AdminFormtion from '../component/admin/formations';

function Formationpage() {
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
                    Formations
                </Typography>

                <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                    <TextField
                        label="Rechercher une formation"
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
                <Typography variant="h5">First Formation</Typography>

            </Box>

            <Dialog open={showGuideDetails} onClose={handleClose} maxWidth="md">
                <IconButton
                    sx={{ position: 'absolute', top: 0, right: 0 }}
                    onClick={handleClose}
                    color="inherit"
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    <Typography variant="body1">
                        Nom: Formation complète en marketing digital
                    </Typography>
                    <Typography variant="body1">
                        Date: 2023-06-15
                    </Typography>
                    <Typography variant="body1">
                        instructor: Julien Lavanchy
                    </Typography>
                    <Typography variant="body1">
                        Formations en rapport:
                        <ul>
                            <li>Guide A</li>
                            <li>Guide B</li>
                            <li>Guide C</li>
                        </ul>
                    </Typography>
                </DialogContent>
            </Dialog>
            <AdminFormtion onAdd={function (data: { nom: string; date: string; intervenant: string; }): void {
                throw new Error('Function not implemented.');
            } }/>
        </Box>
         
    );
};

export default Formationpage;
