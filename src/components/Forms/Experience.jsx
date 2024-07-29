import * as React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import CollapsibleExperience from "../Collapsible/CollapsibleExperience";

export default function Experience({handleInputChange , formValues}) {
  const below600 = useMediaQuery("(max-width:600px)");
  const [experiences, setExperiences] = React.useState([1]);
  const [openExperience, setOpenExperience] = React.useState(1);
  const exp = {};
  if (formValues) {
    Object.keys(formValues).forEach((key) => {
      const match = key.match(/^(experience\d+)_/);
      if (match) {
        const prefix = match[1];
        if (!exp[prefix]) {
          exp[prefix] = {};
        }
        exp[prefix][key.replace(`${prefix}_`, "")] = formValues[key];
      }
    });
  } else {
    // Handle the case where formValues is undefined or null
    console.warn('formValues is undefined or null');
  }
  const handleAddExperience = () => {
    const newExperience = experiences.length + 1;
    setExperiences([...experiences, newExperience]);
    setOpenExperience(newExperience);
  };

  const handleDeleteExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences.map((_, i) => i + 1));
    setOpenExperience(
      newExperiences.length > 0 ? newExperiences[newExperiences.length - 1] : 1
    );
  };

  const handleToggleExperience = (index) => {
    setOpenExperience(openExperience === index ? null : index);
  };

  return (
    <div>
      <Typography
        sx={{ fontSize: below600 ? "15px" : "20px", fontWeight: 500 }}
      >
        {`Add Experience`}
      </Typography>
      {experiences.map((no, index) => {
          const expKey = `experience${index + 1}`;
          const currentFormValues = exp[expKey] || {};
          console.log("expexp",currentFormValues);
         return (
        <CollapsibleExperience
          key={index}
          index={index + 1}
          handleInputChange={handleInputChange}
          onDelete={() => handleDeleteExperience(index)}
          onToggle={() => handleToggleExperience(index + 1)}
          isOpen={openExperience === index + 1}
          totalExperiences={experiences.length}
          formValues={currentFormValues}
          />
        );
      })}
      <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
        <Button
          variant="outline"
          sx={{
            textTransform: "none",
            border: "1px solid #cacccf",
            color: "#8cc63e",
          }}
          onClick={handleAddExperience}
        >
          Add Another Experience
        </Button>
      </Box>
    </div>
  );
}
