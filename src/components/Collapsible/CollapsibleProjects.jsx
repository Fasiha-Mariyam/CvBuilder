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

export default function CollapsibleProjects({
  isOpen,
  index,
  onDelete,
  onToggle,
  handleInputChange,
  totalProjects,
}) {
  const [aboutText, setAboutText] = React.useState("");
  const [isCurrentlyWorking, setIsCurrentlyWorking] = React.useState(false);
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
    if (isCurrentlyWorking) {
      handleInputChange({
        target: { name: "endYearOfProject", value: "Present" },
      });
      handleInputChange({
        target: { name: "endDateOfProject", value: "Present" },
      });
    }
  }, [isCurrentlyWorking]);

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
          Project {index}
        </Typography>
        {totalProjects > 1 && (
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
            Showcase Your Expertise Through Projects
          </Typography>
          <Grid container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={12} md={12}>
              <Typography sx={textStyle}>Project Name*</Typography>
              <TextField
              name="projectName"
              onChange={handleInputChange}
                id="outlined-basic"
                variant="outlined"
                placeholder="Ex: Website "
                fullWidth
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
                renderInput={(params) => (
                  <TextField {...params} placeholder="Month"   name="startDateOfProject"
                  />
                )}
                onChange={(event, newValue) => {
                  handleAutocompleteChange(newValue, "startDateOfProject");
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={textStyle}>Year</Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={Year}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Year"   name="startYearOfProject"
                  />
                )}
                onChange={(event, newValue) => {
                  handleAutocompleteChange(newValue, "startYearOfProject");
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
                sx={{ background: "rgba(232, 232, 232, 1)" }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Month"   name="endDateOfProject"
                  />
                )}
                onChange={(event, newValue) => {
                  handleAutocompleteChange(newValue, "endDateOfProject");
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
                sx={{ background: "rgba(232, 232, 232, 1)" }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Year"   name="endYearOfProject"
                  />
                )}
                onChange={(event, newValue) => {
                  handleAutocompleteChange(newValue, "endYearOfProject");
                }}
                disabled={isCurrentlyWorking} 
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
              I am currently Working
            </Typography>
          </div>
          <Grid item xs={12} md={12}>
            <Typography sx={textStyle}>Description</Typography>
            <TextareaAutosize
              id="outlined-basic"
              placeholder="Write about your Project (2,000 words max)"
              minRows={6}
              maxRows={10}
              name="projectDescription"
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
