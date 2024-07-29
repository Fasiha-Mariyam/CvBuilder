/* eslint-disable react/prop-types */
import { Button, TextField, Box, Typography, Autocomplete } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useSelector } from 'react-redux';

const proficiencyOptions = ["Native", "Proficient", "Advanced", "Intermediate", "Beginner"];

export default function Language({ addedCustomSections, number, addedSections, handleInputChange }) {
  const Language = useSelector((state) => state.form.formData?.languages);
  const [languages, setLanguages] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [languageName, setLanguageName] = useState('');
  const [proficiency, setProficiency] = useState(null);
  const [formError, setFormError] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    setLanguages(Language || []);
  }, [Language]);

  const handleAddClick = () => {
    if (languageName && proficiency) {
      let updatedLanguages;
      if (editIndex !== null) {
        // Update existing language
        updatedLanguages = [...languages];
        updatedLanguages[editIndex] = { name: languageName, proficiency };
        setEditIndex(null); // Reset edit index
      } else {
        // Add new language
        const newLanguage = { name: languageName, proficiency };
        updatedLanguages = [...languages, newLanguage];

        // Add number to addedCustomSections if not already present
        if (!addedSections.includes(number)) {
          addedCustomSections(number);
        }
      }
      setLanguages(updatedLanguages);
      handleInputChange({ target: { name: 'languages', value: updatedLanguages } });
      setLanguageName('');
      setProficiency(null);
      setFormError('');
      setIsFormVisible(false); // Hide form after adding or editing
    } else {
      setFormError('Please fill in all fields.');
    }
  };

  const handleAddMoreClick = () => {
    setIsFormVisible(true);
    setEditIndex(null); // Reset edit index when opening the form
  };

  const handleEditClick = (index) => {
    setLanguageName(languages[index].name);
    setProficiency(languages[index].proficiency);
    setEditIndex(index);
    setIsFormVisible(true);
  };

  const handleDeleteClick = (index) => {
    const updatedLanguages = languages.filter((_, i) => i !== index);
    setLanguages(updatedLanguages);
    handleInputChange({ target: { name: 'languages', value: updatedLanguages } });
  };

  return (
    <Box sx={{ padding: 2, border: '1px solid grey', borderRadius: 2, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom sx={{textAlign:"start"}}>
        Languages
      </Typography>
      {languages.map((language, index) => (
        <Box key={index} sx={{ mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="body1">{language.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {language.proficiency}
            </Typography>
          </Box>
          <Box>
            <Button onClick={() => handleEditClick(index)} color="primary" size="small" sx={{ ml: 1 }}>
              <CreateOutlinedIcon />
            </Button>
            <Button onClick={() => handleDeleteClick(index)} color="error" size="small" sx={{ ml: 1 }}>
              <DeleteOutlinedIcon />
            </Button>
          </Box>
        </Box>
      ))}
      {isFormVisible && (
        <Box sx={{ padding: 2, border: '1px solid grey', borderRadius: 2, mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            {editIndex !== null ? 'Edit Language' : 'Add New Language'}
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
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            {editIndex !== null ? 'Save Changes' : 'Add'}
          </Button>
        </Box>
      )}
      <Button
        onClick={handleAddMoreClick}
        variant="outlined"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Add More +
      </Button>
    </Box>
  );
}
