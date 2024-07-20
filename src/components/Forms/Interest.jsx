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

export default function Interest() {
  const below600 = useMediaQuery("(max-width:600px)");
  const [inputValue, setInputValue] = React.useState("");
  const [skillList, setSkillList] = React.useState([]);

  const Interest = [
    "Artificial Intelligence and Machine Learning",
    "Data Science and Analytics",
    "Software Development",
    "Web Design and Development",
    "Cybersecurity",
    "Project Management",
    "Digital Marketing",
    "User Experience (UX) Design",
    "Financial Technology (FinTech)",
    "Entrepreneurship and Startups",
    "Sustainability and Environmental Impact",
    "Creative Writing and Content Creation",
    "Public Speaking and Communication",
    "Painting",
    "Writing",
    "Photography",
    "Music (playing an instrument, composing)",
    "Crafting (knitting, woodworking)",
    "Reading",
    "Chess",
    "Puzzles and Brain Games",
    "Learning new languages",
    "Programming",
    "Meditation",
    "Listening to music",
    "Watching movies or TV shows",
    "Spa and self-care activities",
    "Graphic Design",
    "Cloud Computing and DevOps",
    "Blockchain Technology",
    "Product Management",
    "Human-Computer Interaction",
    "Health Technology",
    "International Relations and Diplomacy",
    "Education Technology"
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
            {`Add Interest`}
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} flexItem />

        <Grid
          container
          spacing={2}
          sx={{ mb: 1, display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} md={12}>
            <Typography sx={textStyle}>Interest*</Typography>
            <Autocomplete
              freeSolo
              disablePortal
              id="combo-box-demo"
              options={Interest}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Interest" />
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
          <Typography sx={descriptionStyle}>Areas of Interest</Typography>
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
