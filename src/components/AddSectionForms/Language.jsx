/* eslint-disable react/prop-types */
import { Button, TextField, Box, Typography, Autocomplete } from '@mui/material';
import React, { useState, useEffect } from 'react';

const proficiencyOptions = ["Native", "Proficient", "Advanced", "Intermediate", "Beginner"];

export default function Language({ addedCustomSections, number, addedSections }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [languageName, setLanguageName] = useState('');
  const [proficiency, setProficiency] = useState(null);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (addedSections && addedSections.includes(number)) {
      setIsButtonDisabled(true);
    }
  }, [addedSections, number]);

  const handleAddClick = () => {
    if (addedSections && !addedSections.includes(number)) {
      if (languageName && proficiency) {
        addedCustomSections(number);
        setIsButtonDisabled(true);
        setLanguageName('');
        setProficiency(null);
        setFormError('');
      } else {
        setFormError('Please fill in all fields.');
      }
    }
  };

  return (
    <Box sx={{ padding: 2, border: '1px solid grey', borderRadius: 2, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Language 
      </Typography>
      <TextField
        label="Language Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={languageName}
        onChange={(e) => setLanguageName(e.target.value)}
        error={!!formError}
        helperText={formError}
      />
      <Autocomplete
        options={proficiencyOptions}
        value={proficiency}
        onChange={(event, newValue) => setProficiency(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Proficiency"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!formError}
            helperText={formError}
          />
        )}
      />
      <Button
        onClick={handleAddClick}
        disabled={isButtonDisabled}
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Add
      </Button>
    </Box>
  );
}
