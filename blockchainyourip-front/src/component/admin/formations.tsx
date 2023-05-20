import React, { useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface BlockWithPopupProps {
  onAdd: (data: { nom: string, date: string, intervenant: string }) => void;
}

function AdminFormtion({ onAdd }: BlockWithPopupProps) {
  const [open, setOpen] = useState(false);
  const [nom, setNom] = useState('');
  const [date, setDate] = useState('');
  const [intervenant, setIntervenant] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    // Appeler la fonction de rappel onAdd avec les valeurs des paramètres (nom, date, intervenant)
    onAdd({ nom, date, intervenant });

    // Réinitialiser les valeurs des paramètres
    setNom('');
    setDate('');
    setIntervenant('');

    // Fermer la popup
    setOpen(false);
  };

  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="add" onClick={handleClickOpen} style={{ color: 'black' }}>
        <AddIcon />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter un élément</DialogTitle>
        <DialogContent>
          <TextField
            label="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Intervenant"
            value={intervenant}
            onChange={(e) => setIntervenant(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" onClick={handleAdd} color="primary">
            Ajouter
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AdminFormtion;
