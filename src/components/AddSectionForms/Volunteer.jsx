/* eslint-disable react/prop-types */
import { Button, TextField, Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function Volunteer({ addedCustomSections, number, addedSections }) {
  const [volunteers, setVolunteers] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [organizationName, setOrganizationName] = useState('');
  const [roleTitle, setRoleTitle] = useState('');
  const [formError, setFormError] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddClick = () => {
    if (organizationName && roleTitle) {
      if (editIndex !== null) {
        // Update existing volunteer experience
        const updatedVolunteers = [...volunteers];
        updatedVolunteers[editIndex] = { organization: organizationName, role: roleTitle };
        setVolunteers(updatedVolunteers);
        setEditIndex(null); // Reset edit index
      } else {
        // Add new volunteer experience
        const newVolunteer = { organization: organizationName, role: roleTitle };
        setVolunteers([...volunteers, newVolunteer]);

        // Add number to addedCustomSections if not already present
        if (!addedSections.includes(number)) {
          addedCustomSections(number);
        }
      }
      setOrganizationName('');
      setRoleTitle('');
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
    setOrganizationName(volunteers[index].organization);
    setRoleTitle(volunteers[index].role);
    setEditIndex(index);
    setIsFormVisible(true);
  };

  const handleDeleteClick = (index) => {
    const updatedVolunteers = volunteers.filter((_, i) => i !== index);
    setVolunteers(updatedVolunteers);
  };

  return (
    <Box sx={{ padding: 2, border: '1px solid grey', borderRadius: 2, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom sx={{textAlign:"start"}}>
        Volunteer Experience
      </Typography>
      {volunteers.map((volunteer, index) => (
        <Box key={index} sx={{ mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="body1">{volunteer.organization}</Typography>
            <Typography variant="body2" color="textSecondary">
              {volunteer.role}
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
            {editIndex !== null ? 'Edit Volunteer Experience' : 'Add New Volunteer Experience'}
          </Typography>
          <TextField
            label="Organization Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
            error={!!formError}
            helperText={formError}
          />
          <TextField
            label="Role/Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={roleTitle}
            onChange={(e) => setRoleTitle(e.target.value)}
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
