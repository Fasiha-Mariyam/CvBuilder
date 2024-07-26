/* eslint-disable react/prop-types */
import { Button, TextField, Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

export default function Certificate({ addedCustomSections, number, addedSections }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [certificateName, setCertificateName] = useState('');
  const [institute, setInstitute] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (addedSections && addedSections.includes(number)) {
      setIsButtonDisabled(true);
    }
  }, [addedSections, number]);

  const handleAddClick = () => {
    if (addedSections && !addedSections.includes(number)) {
      if (certificateName && institute) {
    
        addedCustomSections(number);
        setIsButtonDisabled(true);
        setCertificateName('');
        setInstitute('');
        setFormError('');
      } else {
        setFormError('Please fill in both fields.');
      }
    }
  };

  return (
    <Box sx={{ padding: 2, border: '1px solid grey', borderRadius: 2, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Certificate
      </Typography>
      <TextField
        label="Certificate Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={certificateName}
        onChange={(e) => setCertificateName(e.target.value)}
        error={!!formError}
        helperText={formError}
      />
      <TextField
        label="Institute/Company"
        variant="outlined"
        fullWidth
        margin="normal"
        value={institute}
        onChange={(e) => setInstitute(e.target.value)}
        error={!!formError}
        helperText={formError}
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
