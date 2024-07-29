/* eslint-disable react/prop-types */
import { Button, TextField, Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useSelector } from 'react-redux';

export default function Courses({ addedCustomSections, number, addedSections, handleInputChange }) {
  const Courses = useSelector((state) => state.form.formData?.courses);
  const [courses, setCourses] = useState(Courses || []);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [formError, setFormError] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    setCourses(Courses || []);
  }, [Courses]);

  const handleAddClick = () => {
    if (courseName && courseDescription) {
      let updatedCourses;
      if (editIndex !== null) {
        // Update existing course
        updatedCourses = [...courses];
        updatedCourses[editIndex] = { title: courseName, description: courseDescription };
        setEditIndex(null); // Reset edit index
      } else {
        // Add new course
        const newCourse = { title: courseName, description: courseDescription };
        updatedCourses = [...courses, newCourse];

        // Add number to addedCustomSections if not already present
        if (!addedSections.includes(number)) {
          addedCustomSections(number);
        }
      }
      setCourses(updatedCourses);
      handleInputChange({ target: { name: 'courses', value: updatedCourses } });
      setCourseName('');
      setCourseDescription('');
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
    setCourseName(courses[index].title);
    setCourseDescription(courses[index].description);
    setEditIndex(index);
    setIsFormVisible(true);
  };

  const handleDeleteClick = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
    handleInputChange({ target: { name: 'courses', value: updatedCourses } });
  };

  return (
    <Box sx={{ padding: 2, border: '1px solid grey', borderRadius: 2, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom sx={{ textAlign: 'start' }}>
        Courses
      </Typography>
      {courses.map((course, index) => (
        <Box key={index} sx={{ mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="body1">{course.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {course.description}
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
            {editIndex !== null ? 'Edit Course' : 'Add New Course'}
          </Typography>
          <TextField
            label="Course Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            error={!!formError}
            helperText={formError}
          />
          <TextField
            label="Course Description"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
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
