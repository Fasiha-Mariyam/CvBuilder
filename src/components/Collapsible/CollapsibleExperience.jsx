/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Accordion,
  AccordionSummary,
  Autocomplete,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";

const textStyle = {
  color: "rgba(131, 131, 131, 1)",
  fontSize: "15px",
  textAlign: "start",
};
const descriptionStyle = {
  color: "rgba(131, 131, 131, 1)",
  fontWeight: "400",
  fontSize: "14px",
  my: 2,
  textAlign: "start",
};
export default function CollapsibleExperience({
  isOpen,
  index,
  onDelete,
  onToggle,
  totalExperiences,
}) {
  const [aboutText, setAboutText] = React.useState("");
  const [isCurrentlyWorking, setIsCurrentlyWorking] = React.useState(false);
  const maxLength = 2000;

  const top10EmploymentTypes = [
    { label: "Full-Time", year: 2023 },
    { label: "Part-Time", year: 2023 },
    { label: "Contract", year: 2023 },
    { label: "Temporary", year: 2023 },
    { label: "Internship", year: 2023 },
    { label: "Freelance", year: 2023 },
    { label: "Seasonal", year: 2023 },
    { label: "Commission", year: 2023 },
    { label: "Volunteer", year: 2023 },
    { label: "Apprenticeship", year: 2023 },
  ];
  const Month = [
    { label: "Jan", year: 2023 },
    { label: "Feb", year: 2023 },
    { label: "March", year: 2023 },
  ];
  const Year = [
    { label: "2024", year: 2023 },
    { label: "2023", year: 2023 },
    { label: "2022", year: 2023 },
  ];

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxLength) {
      setAboutText(inputText);
    }
  };

  const handleCheckboxChange = (event) => {
    setIsCurrentlyWorking(event.target.checked);
  };

  return (
    <Accordion
      expanded={isOpen}
      sx={{ boxShadow: "none", border: "1px solid #cacccf", mb: 2 }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
        onClick={onToggle}
      >
        <Typography sx={{ flexGrow: 1, textAlign: "start" }}>
          Experience {index}
        </Typography>
        {totalExperiences > 1 && (
          <IconButton
            aria-label="delete"
            onClick={() => {
              onDelete();
            }}
            sx={{
              color: "red",
              padding: "4px",
              marginLeft: "8px",
            }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        )}
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Divider flexItem />
          <Typography sx={descriptionStyle}>
            <span style={{ fontWeight: "bold" }}>Experience: </span>showcase
            your expertise on your profile
          </Typography>
          <Grid container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>Title*</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Ex: Retail sales Manager"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>Employment type</Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top10EmploymentTypes}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Please Select" />
                )}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>Company name*</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Ex: Amazon"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>Location</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Ex: London, United state"
                fullWidth
              />
            </Grid>
          </Grid>
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Checkbox
              sx={{ ml: -1.5 }}
              checked={isCurrentlyWorking}
              onChange={handleCheckboxChange}
            />
            <Typography sx={descriptionStyle}>
              I am currently working in this role
            </Typography>
          </div>
          <Grid container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>Start date*</Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={Month}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Month" />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>Year</Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={Year}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Year" />
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>End date*</Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={Month}
                sx={{ background: "rgba(232, 232, 232, 1)" }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Month" />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>Year</Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={Year}
                sx={{ background: "rgba(232, 232, 232, 1)" }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Year" />
                )}
                disabled={isCurrentlyWorking}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} sx={{ mt: 2 }}>
            <Typography sx={textStyle}>Description</Typography>
            <TextareaAutosize
              id="outlined-basic"
              placeholder="Write about your experience (2,000 words max)"
              minRows={6}
              maxRows={10}
              value={aboutText}
              onChange={handleChange}
              style={{
                width: "100%",
                resize: "vertical",
                border: "1px solid rgba(64, 64, 64, 1)",
              }}
            />
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Typography
                fontSize={"13px"}
                color={aboutText.length > maxLength ? "error" : "textSecondary"}
              >
                {aboutText.length}/2,000
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
