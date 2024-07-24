import React from "react";
import { ListItem, Button, Typography} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

// List of section names and their labels
const sections = [
  "Personal Details",
  "Summary",
  "Experience",
  "Education",
  "Skills",
  "Projects",
  "Interests",
  "Add Section"
];

export default function SectionsList({ currentSection, onSectionChange }) {
  return (
    <div>
      {sections.map((section) => (
        <>
          <ListItem
            sx={{
              borderRadius: "4px",
              backgroundColor:
                currentSection === section ? "#f89421" : "transparent",
              mb: 1,
              "&:hover": {
                backgroundColor: "#8cc63e",
              },
            }}
          >
            <Button
              variant="contained"
              onClick={() => onSectionChange(section)}
              fullWidth
              sx={{
                textAlign: "left",
                justifyContent: "flex-start",
                color: currentSection === section ? "white" : "white",
                padding: "8px",
                borderRadius: "4px",
                textTransform: "none",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  flexGrow: 1,
                  fontWeight: currentSection === section ? 600 : 200,
                }}
              >
                {section}
              </Typography>
              <Typography>
                {currentSection === section ? <RemoveIcon /> : <AddIcon />}
              </Typography>
            </Button>
          </ListItem>
        </>
      ))}
      
    </div>
  );
}
