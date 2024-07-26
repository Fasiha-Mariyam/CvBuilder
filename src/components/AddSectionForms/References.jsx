/* eslint-disable react/prop-types */
import { Button, TextField, Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export default function Reference({ addedCustomSections, number, addedSections }) {
  const [references, setReferences] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [referenceName, setReferenceName] = useState("");
  const [referenceEmail, setReferenceEmail] = useState("");
  const [formError, setFormError] = useState("");
  const [editIndex, setEditIndex] = useState(null); // Index of the reference being edited


  const handleAddClick = () => {
    if (referenceName && referenceEmail) {
      if (editIndex !== null) {
        // Update existing reference
        const updatedReferences = [...references];
        updatedReferences[editIndex] = { name: referenceName, email: referenceEmail };
        setReferences(updatedReferences);
        setEditIndex(null); // Reset edit index
      } else {
        // Add new reference
        const newReference = { name: referenceName, email: referenceEmail };
        setReferences([...references, newReference]);

        // Add number to addedCustomSections if not already present
        if (!addedSections.includes(number)) {
          addedCustomSections(number);
        }
      }
      setReferenceName("");
      setReferenceEmail("");
      setFormError("");
      setIsFormVisible(false); // Hide form after adding or editing
    } else {
      setFormError("Please fill in all fields.");
    }
  };

  const handleAddMoreClick = () => {
    setIsFormVisible(true);
    setEditIndex(null); // Reset edit index when opening the form
  };

  const handleEditClick = (index) => {
    setReferenceName(references[index].name);
    setReferenceEmail(references[index].email);
    setEditIndex(index);
    setIsFormVisible(true);
  };

  const handleDeleteClick = (index) => {
    const updatedReferences = references.filter((_, i) => i !== index);
    setReferences(updatedReferences);
  };

  return (
    <Box
      sx={{
        padding: 2,
        border: "1px solid grey",
        borderRadius: 2,
        maxWidth: 400,
        mx: "auto",
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ textAlign: "start" }}>
        References
      </Typography>
      <Box>
        {references.map((reference, index) => (
          <Box
            key={index}
            sx={{
              mb: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="body1">{reference.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {reference.email}
              </Typography>
            </Box>
            <Box>
              <Button
                onClick={() => handleEditClick(index)}
                color="primary"
                size="small"
                sx={{ ml: 1 }}
              >
                <CreateOutlinedIcon />
              </Button>
              <Button
                onClick={() => handleDeleteClick(index)}
                color="error"
                size="small"
                sx={{ ml: 1 }}
              >
                <DeleteOutlinedIcon />
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
      {isFormVisible && (
        <Box
          sx={{ padding: 2, border: "1px solid grey", borderRadius: 2, mt: 2 }}
        >
          <Typography variant="h6" gutterBottom>
            {editIndex !== null ? "Edit Reference" : "Add New Reference"}
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
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            {editIndex !== null ? "Save Changes" : "Add"}
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
