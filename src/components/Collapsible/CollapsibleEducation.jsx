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

export default function CollapsibleEducation({
  isOpen,
  index,
  onDelete,
  onToggle,
  totalEducations,
  handleInputChange,
  formValues,
}) {
  const [aboutText, setAboutText] = React.useState(
    formValues?.DescriptionOfSchool || ""
  );
  console.log(aboutText, "mmmm");
  const [isCurrentlyStudying, setIsCurrentlyStudying] = React.useState(
    formValues.isCurrentlyStudying || false
  );
  const maxLength = 2000;
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

  React.useEffect(() => {
    if (isCurrentlyStudying === true) {
      handleInputChange({
        target: { name: `education${index}_endYearOfSchool`, value: "Present" },
      });
      handleInputChange({
        target: {
          name: `education${index}_endMonthOfSchool`,
          value: "Present",
        },
      });
    }
  }, [isCurrentlyStudying]);

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxLength) {
      setAboutText(inputText);
      handleInputChange(event);
    }
  };
  const handleAutocompleteChange = (newValue, fieldName) => {
    handleInputChange({ target: { name: fieldName, value: newValue.label } });
    console.log(newValue.label, fieldName);
  };
  const handleCheckboxChange = (event) => {
    setIsCurrentlyStudying(event.target.checked);
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
          Education {index}
        </Typography>
        {totalEducations > 1 && (
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
            Education display authentication of your expertise
          </Typography>
          <Grid container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>School*</Typography>
              <TextField
                name={`education${index}_Institute`}
                onChange={handleInputChange}
                id="outlined-basic"
                variant="outlined"
                placeholder="Ex: Boston University "
                fullWidth
                value={formValues.Institute || ""}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>Degree</Typography>
              <TextField
                name={`education${index}_Degree`}
                onChange={handleInputChange}
                id="outlined-basic"
                variant="outlined"
                placeholder="Ex: Bachelor’s "
                fullWidth
                value={formValues.Degree || ""}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>Filed of study</Typography>
              <TextField
                name={`education${index}_Field`}
                onChange={handleInputChange}
                id="outlined-basic"
                variant="outlined"
                placeholder="Ex: Business"
                fullWidth
                value={formValues.Field || ""}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>Grade</Typography>
              <TextField
                name={`education${index}_Grade`}
                onChange={handleInputChange}
                id="outlined-basic"
                variant="outlined"
                fullWidth
                value={formValues.Grade || ""}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>Start date*</Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={Month}
                value={formValues.startDateOfSchool || ""}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Month"
                    name="startDateOfSchool"
                  />
                )}
                onChange={(event, newValue) => {
                  handleAutocompleteChange(
                    newValue,
                    `education${index}_startDateOfSchool`
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>Year</Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={formValues.startYearOfSchool || ""}
                options={Year}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Year"
                    name="startYearOfSchool"
                  />
                )}
                onChange={(event, newValue) => {
                  handleAutocompleteChange(
                    newValue,
                    `education${index}_startYearOfSchool`
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
                options={Month}
                value={
                  isCurrentlyStudying
                    ? "Present"
                    : formValues.endMonthOfSchool || ""
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Month"
                    name="endMonthOfSchool"
                    disabled={isCurrentlyStudying}
                  />
                )}
                onChange={(event, newValue) => {
                  handleAutocompleteChange(
                    newValue,
                    `education${index}_endMonthOfSchool`
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>Year</Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={Year}
                value={
                  isCurrentlyStudying
                    ? "Present"
                    : formValues.endYearOfSchool || ""
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Year"
                    name="endYearOfSchool"
                    disabled={isCurrentlyStudying}
                  />
                )}
                onChange={(event, newValue) => {
                  handleAutocompleteChange(
                    newValue,
                    `education${index}_endYearOfSchool`
                  );
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Checkbox
                  name="isCurrentlyStudying"
                  checked={isCurrentlyStudying}
                  onChange={(event) => {
                    handleCheckboxChange(event);
                    handleInputChange({
                      target: {
                        name: `education${index}_isCurrentlyStudying`,
                        value: event.target.checked,
                      },
                    });
                  }}
                />
                <Typography sx={textStyle}>I currently study here</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={12}>
              <Typography sx={textStyle}>Description</Typography>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={5}
                placeholder="I managed multiple designers for several projects; I've already completed 10+ projects."
                style={{ width: "100%", borderRadius: "5px"}}
                name={`education${index}_DescriptionOfSchool`}
                onChange={handleChange}
                value={aboutText}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: 1,
                  flexWrap: "wrap",
                }}
              >
                <Typography sx={{ fontSize: "12px" }}>
                  {aboutText.length}/{maxLength}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
