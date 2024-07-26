/* eslint-disable react/prop-types */
import { Button, TextField, Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function Links({ addedCustomSections, number, addedSections }) {
  const [links, setLinks] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [projectTitle, setProjectTitle] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [formError, setFormError] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddClick = () => {
    if (projectTitle && linkUrl) {
      if (editIndex !== null) {
        // Update existing link
        const updatedLinks = [...links];
        updatedLinks[editIndex] = { title: projectTitle, url: linkUrl };
        setLinks(updatedLinks);
        setEditIndex(null); // Reset edit index
      } else {
        // Add new link
        const newLink = { title: projectTitle, url: linkUrl };
        setLinks([...links, newLink]);

        // Add number to addedCustomSections if not already present
        if (!addedSections.includes(number)) {
          addedCustomSections(number);
        }
      }
      setProjectTitle('');
      setLinkUrl('');
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
    setProjectTitle(links[index].title);
    setLinkUrl(links[index].url);
    setEditIndex(index);
    setIsFormVisible(true);
  };

  const handleDeleteClick = (index) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
  };

  return (
    <Box sx={{ padding: 2, border: '1px solid grey', borderRadius: 2, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom sx={{textAlign:"start"}}>
        Links
      </Typography>
      {links.map((link, index) => (
        <Box key={index} sx={{ mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="body1">{link.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
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
            {editIndex !== null ? 'Edit Link' : 'Add New Link'}
          </Typography>
          <TextField
            label="Project Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            error={!!formError}
            helperText={formError}
          />
          <TextField
            label="Link URL"
            variant="outlined"
            fullWidth
            margin="normal"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
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
