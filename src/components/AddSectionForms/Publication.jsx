/* eslint-disable react/prop-types */
import { Button, TextField, Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function Publication({ addedCustomSections, number, addedSections }) {
  const [publications, setPublications] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [publicationTitle, setPublicationTitle] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [formError, setFormError] = useState('');
  const [editIndex, setEditIndex] = useState(null);


  const handleAddClick = () => {
    if (publicationTitle && publicationDate) {
      if (editIndex !== null) {
        // Update existing publication
        const updatedPublications = [...publications];
        updatedPublications[editIndex] = { title: publicationTitle, date: publicationDate };
        setPublications(updatedPublications);
        setEditIndex(null); // Reset edit index
      } else {
        // Add new publication
        const newPublication = { title: publicationTitle, date: publicationDate };
        setPublications([...publications, newPublication]);

        // Add number to addedCustomSections if not already present
        if (!addedSections.includes(number)) {
          addedCustomSections(number);
        }
      }
      setPublicationTitle('');
      setPublicationDate('');
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
    setPublicationTitle(publications[index].title);
    setPublicationDate(publications[index].date);
    setEditIndex(index);
    setIsFormVisible(true);
  };

  const handleDeleteClick = (index) => {
    const updatedPublications = publications.filter((_, i) => i !== index);
    setPublications(updatedPublications);
  };

  return (
    <Box sx={{ padding: 2, border: '1px solid grey', borderRadius: 2, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom sx={{textAlign:"start"}}>
        Publications
      </Typography>
      {publications.map((publication, index) => (
        <Box key={index} sx={{ mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="body1">{publication.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {publication.date}
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
            {editIndex !== null ? 'Edit Publication' : 'Add New Publication'}
          </Typography>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={publicationTitle}
            onChange={(e) => setPublicationTitle(e.target.value)}
            error={!!formError}
            helperText={formError}
          />
          <TextField
            label="Publication Date"
            variant="outlined"
            fullWidth
            margin="normal"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
            error={!!formError}
            helperText={formError}
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
