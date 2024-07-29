/* eslint-disable react/prop-types */
import { Button, TextField, Box, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useSelector } from 'react-redux';

const proficiencyLevels = ["Beginner", "Intermediate", "Advanced", "Expert", "Specialist"];

export default function TechnicalSkills({ addedCustomSections, number, addedSections, handleInputChange }) {
  const TechnicalSkills = useSelector((state) => state.form.formData?.technicalSkills);

  const [skills, setSkills] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [skillName, setSkillName] = useState('');
  const [proficiencyLevel, setProficiencyLevel] = useState('');
  const [formError, setFormError] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    setSkills(TechnicalSkills || []);
  }, [TechnicalSkills]);

  const handleAddClick = () => {
    if (skillName && proficiencyLevel) {
      if (editIndex !== null) {
        // Update existing skill
        const updatedSkills = [...skills];
        updatedSkills[editIndex] = { name: skillName, level: proficiencyLevel };
        setSkills(updatedSkills);
        handleInputChange({ target: { name: 'technicalSkills', value: updatedSkills } });
        setEditIndex(null); // Reset edit index
      } else {
        // Add new skill
        const newSkill = { name: skillName, level: proficiencyLevel };
        const updatedSkills = [...skills, newSkill];
        setSkills(updatedSkills);
        handleInputChange({ target: { name: 'technicalSkills', value: updatedSkills } });

        // Add number to addedCustomSections if not already present
        if (!addedSections.includes(number)) {
          addedCustomSections(number);
        }
      }
      setSkillName('');
      setProficiencyLevel('');
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
    setSkillName(skills[index].name);
    setProficiencyLevel(skills[index].level);
    setEditIndex(index);
    setIsFormVisible(true);
  };

  const handleDeleteClick = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    handleInputChange({ target: { name: 'technicalSkills', value: updatedSkills } });

    // Remove number from addedCustomSections if no skills remain
    if (updatedSkills.length === 0 && addedSections.includes(number)) {
      // Implement a function to remove the number from addedCustomSections if needed
      // Example: removeCustomSection(number);
    }
  };

  return (
    <Box sx={{ padding: 2, border: '1px solid grey', borderRadius: 2, maxWidth: 400, mx: 'auto' }}>
      {skills.length > 0 && (
        <Typography variant="h6" gutterBottom sx={{ textAlign: "start" }}>
          Technical Skills
        </Typography>
      )}
      {skills.map((skill, index) => (
        <Box key={index} sx={{ mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="body1">{skill.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {skill.level}
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
            {editIndex !== null ? 'Edit Skill' : 'Add New Skill'}
          </Typography>
          <TextField
            label="Skill"
            variant="outlined"
            fullWidth
            margin="normal"
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
            error={!!formError}
            helperText={formError}
          />
          <FormControl fullWidth margin="normal" error={!!formError}>
            <InputLabel>Proficiency Level</InputLabel>
            <Select
              value={proficiencyLevel}
              onChange={(e) => setProficiencyLevel(e.target.value)}
              label="Proficiency Level"
            >
              {proficiencyLevels.map((level, index) => (
                <MenuItem key={index} value={level}>
                  {level}
                </MenuItem>
              ))}
            </Select>
            {formError && <Typography color="error">{formError}</Typography>}
          </FormControl>
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
