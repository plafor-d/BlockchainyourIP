import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';

function RightSidebar() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const [note, setNote] = useState('');

  const handleAdd = () => {
    // Logique pour ajouter les données (par exemple, envoyer une requête vers un serveur)
    console.log('Titre:', title);
    console.log('Auteur:', author);
    console.log('Résumé:', summary);
    console.log('Note:', note);

    // Réinitialiser les valeurs des zones de texte après l'ajout
    setTitle('');
    setAuthor('');
    setSummary('');
    setNote('');
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <TextField
          label="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          label="Auteur"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          label="Résumé"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          multiline
          rows={4}
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          label="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Ajouter un Guide
        </Button>
      </Grid>
    </Grid>
  );
}

export default RightSidebar;
