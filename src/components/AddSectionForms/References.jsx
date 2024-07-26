import { Button, TextField, Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

export default function Reference({ addedCustomSections, number, addedSections }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [referenceName, setReferenceName] = useState('');
  const [referenceEmail, setReferenceEmail] = useState('');
  const [formError, setFormError] = useState('');

  // Effect to check if the number is already added and update button state
  useEffect(() => {
    if (addedSections && addedSections.includes(number)) {
      setIsButtonDisabled(true);
    }
  }, [addedSections, number]);

  const handleAddClick = () => {
    if (addedSections && !addedSections.includes(number)) {
      if (referenceName && referenceEmail) {
        // Call the function passed via props
        addedCustomSections(number);
        // Disable the button after it is clicked
        setIsButtonDisabled(true);
        // Clear form
        setReferenceName('');
        setReferenceEmail('');
        setFormError('');
      } else {
        setFormError('Please fill in all fields.');
      }
    }
  };

  return (
    <Box sx={{ padding: 2, border: '1px solid grey', borderRadius: 2, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Reference
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={referenceName}
        onChange={(e) => setReferenceName(e.target.value)}
        error={!!formError}
        helperText={formError}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={referenceEmail}
        onChange={(e) => setReferenceEmail(e.target.value)}
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
