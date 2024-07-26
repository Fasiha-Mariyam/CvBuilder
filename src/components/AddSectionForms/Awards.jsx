/* eslint-disable react/prop-types */
import { Button, TextField, Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function Awards({ addedCustomSections, number, addedSections }) {
  const [awards, setAwards] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [awardTitle, setAwardTitle] = useState('');
  const [awardDate, setAwardDate] = useState('');
  const [formError, setFormError] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddClick = () => {
    if (awardTitle && awardDate) {
      if (editIndex !== null) {
        // Update existing award
        const updatedAwards = [...awards];
        updatedAwards[editIndex] = { title: awardTitle, date: awardDate };
        setAwards(updatedAwards);
        setEditIndex(null); // Reset edit index
      } else {
        // Add new award
        const newAward = { title: awardTitle, date: awardDate };
        setAwards([...awards, newAward]);

        // Add number to addedCustomSections if not already present
        if (!addedSections.includes(number)) {
          addedCustomSections(number);
        }
      }
      setAwardTitle('');
      setAwardDate('');
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
    setAwardTitle(awards[index].title);
    setAwardDate(awards[index].date);
    setEditIndex(index);
    setIsFormVisible(true);
  };

  const handleDeleteClick = (index) => {
    const updatedAwards = awards.filter((_, i) => i !== index);
    setAwards(updatedAwards);
  };

  return (
    <Box sx={{ padding: 2, border: '1px solid grey', borderRadius: 2, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom sx={{textAlign:"start"}}>
        Awards and Honors
      </Typography>
      {awards.map((award, index) => (
        <Box key={index} sx={{ mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="body1">{award.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {award.date}
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
            {editIndex !== null ? 'Edit Award' : 'Add New Award'}
          </Typography>
          <TextField
            label="Award Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={awardTitle}
            onChange={(e) => setAwardTitle(e.target.value)}
            error={!!formError}
            helperText={formError}
          />
          <TextField
            label="Date"
            variant="outlined"
            fullWidth
            margin="normal"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={awardDate}
            onChange={(e) => setAwardDate(e.target.value)}
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
