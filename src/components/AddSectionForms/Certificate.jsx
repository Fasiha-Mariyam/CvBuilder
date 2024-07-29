/* eslint-disable react/prop-types */
import { Button, TextField, Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "../../redux/store";

export default function Certificate({
  addedCustomSections,
  number,
  addedSections,
  handleInputChange
}) {
  const Certificates = useSelector((state) => state.form.formData?.certificates);
  const [certificates, setCertificates] = useState(Certificates || []);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [certificateName, setCertificateName] = useState("");
  const [institute, setInstitute] = useState("");
  const [formError, setFormError] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Sync component state with Redux state on initial render
  useEffect(() => {
    setCertificates(Certificates || []);
  }, [Certificates]);

  const handleAddClick = () => {
    if (certificateName && institute) {
      let updatedCertificates;
      if (editIndex !== null) {
        // Update existing certificate
        updatedCertificates = [...certificates];
        updatedCertificates[editIndex] = {
          name: certificateName,
          institution: institute,
        };
        setEditIndex(null); // Reset edit index
      } else {
        // Add new certificate
        const newCertificate = {
          name: certificateName,
          institution: institute,
        };
        updatedCertificates = [...certificates, newCertificate];
        if (!addedSections.includes(number)) {
          addedCustomSections(number);
        }
      }
      setCertificates(updatedCertificates);
      handleInputChange({ target: { name: "certificates", value: updatedCertificates } });
      setCertificateName("");
      setInstitute("");
      setFormError("");
      setIsFormVisible(false); // Hide form after adding or editing
    } else {
      setFormError("Please fill in both fields.");
    }
  };

  const handleAddMoreClick = () => {
    setIsFormVisible(true);
    setEditIndex(null); // Reset edit index when opening the form
  };

  const handleEditClick = (index) => {
    setCertificateName(certificates[index].name);
    setInstitute(certificates[index].institution);
    setEditIndex(index);
    setIsFormVisible(true);
  };

  const handleDeleteClick = (index) => {
    const updatedCertificates = certificates.filter((_, i) => i !== index);
    setCertificates(updatedCertificates);
    handleInputChange({ target: { name: "certificates", value: updatedCertificates } });
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
        Certificates
      </Typography>
      <Box>
        {certificates.map((certificate, index) => (
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
              <Typography variant="body1">{certificate.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {certificate.institution}
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
            {editIndex !== null ? "Edit Certificate" : "Add New Certificate"}
          </Typography>
          <TextField
            label="Certificate Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={certificateName}
            onChange={(e) => setCertificateName(e.target.value)}
            error={!!formError}
            helperText={formError}
          />
          <TextField
            label="Institute/Company"
            variant="outlined"
            fullWidth
            margin="normal"
            value={institute}
            onChange={(e) => setInstitute(e.target.value)}
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
