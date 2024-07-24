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
  handleInputChange,
  totalExperiences,
  formValues,
}) {
  const [aboutText, setAboutText] = React.useState(
    formValues?.ExperienceDescription || ""
  );
  const [isCurrentlyWorking, setIsCurrentlyWorking] = React.useState(
    formValues.isCurrentlyWorking || false
  );
  const maxLength = 2000;

  React.useEffect(() => {
    if (isCurrentlyWorking) {
      handleInputChange({
        target: {
          name: `experience${index}_endYearOfExperience`,
          value: "Present",
        },
      });
      handleInputChange({
        target: {
          name: `experience${index}_endDateOfExperience`,
          value: "Present",
        },
      });
    }
  }, [isCurrentlyWorking]);

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
  const handleAutocompleteChange = (newValue, fieldName) => {
    handleInputChange({ target: { name: fieldName, value: newValue.label } });
    console.log(newValue.label, fieldName);
  };
  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxLength) {
      setAboutText(inputText);
      handleInputChange(event);
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
                name={`experience${index}_title`}
                onChange={handleInputChange}
                value={formValues.title || ""}
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
                value={formValues.Type || ""}
                options={top10EmploymentTypes}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Please Select"
                    name="Type"
                  />
                )}
                onChange={(event, newValue) => {
                  handleAutocompleteChange(newValue, `experience${index}_Type`);
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>Company name*</Typography>
              <TextField
                name={`experience${index}_companyName`}
                onChange={handleInputChange}
                id="outlined-basic"
                variant="outlined"
                value={formValues.companyName || ""}
                placeholder="Ex: Amazon"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>Location</Typography>
              <TextField
                name={`experience${index}_location`}
                onChange={handleInputChange}
                id="outlined-basic"
                value={formValues.location || ""}
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
              onChange={(event) => {
                handleCheckboxChange(event);
                handleInputChange({
                  target: {
                    name: `experience${index}_isCurrentlyWorking`,
                    value: event.target.checked,
                  },
                });
              }}
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
                value={formValues.startDateOfExperience || ""}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Month"
                    name="startDateOfExperience"
                  />
                )}
                onChange={(event, newValue) => {
                  handleAutocompleteChange(
                    newValue,
                    `experience${index}_startDateOfExperience`
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>Year</Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={formValues.startYearOfExperience || ""}
                options={Year}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Year"
                    name="startYearOfExperience"
                  />
                )}
                onChange={(event, newValue) => {
                  handleAutocompleteChange(
                    newValue,
                    `experience${index}_startYearOfExperience`
                  );
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>End date*</Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={
                  isCurrentlyWorking
                    ? "Present"
                    : formValues.endDateOfExperience || ""
                }
                options={Month}
                sx={{ background: "rgba(232, 232, 232, 1)" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Month"
                    name="endDateOfExperience"
                  />
                )}
                onChange={(event, newValue) => {
                  handleAutocompleteChange(
                    newValue,
                    `experience${index}_endDateOfExperience`
                  );
                }}
                disabled={isCurrentlyWorking}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>Year</Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={Year}
                value={
                  isCurrentlyWorking
                    ? "Present"
                    : formValues.endYearOfExperience || ""
                }
                sx={{ background: "rgba(232, 232, 232, 1)" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Year"
                    name="endYearOfExperience"
                  />
                )}
                onChange={(event, newValue) => {
                  handleAutocompleteChange(
                    newValue,
                    `experience${index}_endYearOfExperience`
                  );
                }}
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
              name={`experience${index}_ExperienceDescription`}
              onChange={handleChange}
              style={{
                width: "100%",
                resize: "vertical",
                borderRadius: "5px",
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
