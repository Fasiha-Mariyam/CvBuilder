/* eslint-disable react/prop-types */
import { Button, TextField, Box, Typography, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useSelector } from 'react-redux';

export default function CustomSection({ handleInputChange }) {
  const CustomizeSections = useSelector((state) => state.form.formData?.sections);
  const [sections, setSections] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [sectionName, setSectionName] = useState('');
  const [fields, setFields] = useState([{ title: '', description: '', date: '' }]);
  const [formError, setFormError] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    setSections(CustomizeSections || []);
  }, [CustomizeSections]);

  const updateSections = (newSections) => {
    setSections(newSections);
    handleInputChange({ target: { name: 'sections', value: newSections } });
  };

  const handleAddSectionClick = () => {
    if (sectionName && fields.every(field => field.title && field.description && field.date)) {
      const newSection = {
        name: sectionName,
        fields: fields
      };
      
      if (editIndex !== null) {
        const updatedSections = [...sections];
        updatedSections[editIndex] = newSection;
        updateSections(updatedSections);
        setEditIndex(null);
      } else {
        updateSections([...sections, newSection]);
      }

      setSectionName('');
      setFields([{ title: '', description: '', date: '' }]);
      setFormError('');
      setIsFormVisible(false);
    } else {
      setFormError('Please fill in all required fields.');
    }
  };

  const handleAddFieldClick = () => {
    setFields([...fields, { title: '', description: '', date: '' }]);
  };

  const handleFieldChange = (index, field, value) => {
    const updatedFields = fields.map((f, i) => (i === index ? { ...f, [field]: value } : f));
    setFields(updatedFields);
    updateSections(sections.map((section, i) => (i === editIndex ? { ...section, fields: updatedFields } : section)));
  };

  const handleDeleteFieldClick = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
    updateSections(sections.map((section, i) => (i === editIndex ? { ...section, fields: updatedFields } : section)));
  };

  const handleAddMoreClick = () => {
    setIsFormVisible(true);
    setEditIndex(null);
  };

  const handleEditClick = (index) => {
    const section = sections[index];
    setSectionName(section.name);
    setFields(section.fields);
    setEditIndex(index);
    setIsFormVisible(true);
  };

  const handleDeleteClick = (index) => {
    const updatedSections = sections.filter((_, i) => i !== index);
    updateSections(updatedSections);
  };

  return (
    <Box sx={{ padding: 2, border: '1px solid grey', borderRadius: 2, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Custom Sections
      </Typography>
      {sections.map((section, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography variant="h6">{section.name}</Typography>
          {section.fields.map((field, idx) => (
            <Box key={idx} sx={{ mb: 1, pl: 2 }}>
              <Typography variant="body1">Title: {field.title}</Typography>
              <Typography variant="body2" color="textSecondary">Description: {field.description}</Typography>
              <Typography variant="body2" color="textSecondary">Date: {field.date}</Typography>
            </Box>
          ))}
          <Box>
            <IconButton onClick={() => handleEditClick(index)} color="primary">
              <CreateOutlinedIcon />
            </IconButton>
            <IconButton onClick={() => handleDeleteClick(index)} color="error">
              <DeleteOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      ))}
      {isFormVisible && (
        <Box sx={{ padding: 2, border: '1px solid grey', borderRadius: 2, mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            {editIndex !== null ? 'Edit Custom Section' : 'Add New Custom Section'}
          </Typography>
          <TextField
            label="Section Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={sectionName}
            onChange={(e) => setSectionName(e.target.value)}
            error={!!formError}
            helperText={formError}
          />
          {fields.map((field, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                margin="normal"
                value={field.title}
                onChange={(e) => handleFieldChange(index, 'title', e.target.value)}
                error={!!formError}
                helperText={formError}
              />
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={2}
                value={field.description}
                onChange={(e) => handleFieldChange(index, 'description', e.target.value)}
                error={!!formError}
                helperText={formError}
              />
              <TextField
                label="Date"
                variant="outlined"
                fullWidth
                margin="normal"
                type="date"
                value={field.date}
                onChange={(e) => handleFieldChange(index, 'date', e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              <br />
              <IconButton onClick={() => handleDeleteFieldClick(index)} color="error">
                <DeleteOutlinedIcon />
              </IconButton>
            </Box>
          ))}
          <Button
            onClick={handleAddFieldClick}
            variant="outlined"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            startIcon={<AddCircleOutlineIcon />}
          >
            Add Field
          </Button>
          <Button
            onClick={handleAddSectionClick}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            {editIndex !== null ? 'Save Changes' : 'Add Section'}
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
        Add More Sections +
      </Button>
    </Box>
  );
}
