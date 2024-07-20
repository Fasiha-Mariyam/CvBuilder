import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import {
  Autocomplete,
  Divider,
  Grid,
  TextField,
  useMediaQuery,
  IconButton,
} from "@mui/material";

const textStyle = {
  color: "rgba(131, 131, 131, 1)",
  fontSize: "15px",
  textAlign: "start",
};
const descriptionStyle = {
  color: "rgba(41, 41, 41, 1)",
  fontWeight: "500",
  fontSize: "18px",
  my: 2,
};

export default function Skills() {
  const below600 = useMediaQuery("(max-width:600px)");
  const [inputValue, setInputValue] = React.useState("");
  const [skillList, setSkillList] = React.useState([]);

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Python",
    "Redux",
    "TypeScript",
    "SQL",
    "Git",
    "UI/UX Design",
    "Responsive Design",
  ];

  const handleAddSkill = () => {
    if (inputValue && !skillList.includes(inputValue)) {
      setSkillList([...skillList, inputValue]);
      setInputValue(""); // Clear the input field after adding the skill
    }
  };

  const handleDeleteSkill = (skillToDelete) => {
    setSkillList(skillList.filter((skill) => skill !== skillToDelete));
  };

  return (
    <div>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: below600 ? "20px" : "28px", fontWeight: 500 }}
          >
            {`Add Skills`}
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} flexItem />

        <Grid
          container
          spacing={2}
          sx={{ mb: 1, display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} md={12}>
            <Typography sx={textStyle}>Skill*</Typography>
            <Autocomplete
              freeSolo
              disablePortal
              id="combo-box-demo"
              options={skills}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Skills" />
              )}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Button variant="contained" onClick={handleAddSkill}>
              Add
            </Button>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          sx={{ border: "1px solid  rgba(0, 0, 0, 0.1)", px: 2 }}
        >
          <Typography sx={descriptionStyle}>Your skills collection</Typography>
          {skillList.map((skill, index) => (
            <Box
              key={index}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                color: "rgba(83, 97, 103, 1)",
                border: "1px solid rgba(217, 217, 217, 0.85)",
                borderRadius: "17px",
                padding: ".5rem",
                marginBottom: 2,
                cursor: "pointer",
                fontSize: "10px",
                marginRight: "8px",
              }}
            >
              <Typography sx={{ marginRight: "8px", fontSize: "12px" }}>
                {skill}
              </Typography>
              <IconButton
                size="small"
                onClick={() => handleDeleteSkill(skill)}
                sx={{ padding: "4px" }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
