import * as React from "react";
import CollapsibleEducation from "../Collapsible/CollapsibleEducation";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

export default function Education({ handleInputChange, formValues }) {
  const below600 = useMediaQuery("(max-width:600px)");
  const [education, setEducation] = React.useState([1]);
  const [openEducation, setOpenEducation] = React.useState(1);

  const handleAddEducation = () => {
    const newEducation = education.length + 1;
    setEducation([...education, newEducation]);
    setOpenEducation(newEducation);
  };

  const handleDeleteEducation = (index) => {
    const newEducations = education.filter((_, i) => i !== index);
    setEducation(newEducations.map((_, i) => i + 1));
    setOpenEducation(
      newEducations.length > 0 ? newEducations[newEducations.length - 1] : 1
    );
  };
  // const handleDeleteEducation = (index) => {
  //   // Remove the education entry from state
  //   const newEducations = education.filter((_, i) => i !== index);
  //   setEducation(newEducations.map((_, i) => i + 1));
  //   setOpenEducation(
  //     newEducations.length > 0 ? newEducations[newEducations.length - 1] : 1
  //   );
  
  //   // Remove the education entry from local storage
  //   const currentFormValues = { ...formValues };
  
  //   // Find and remove all keys related to the deleted index
  //   Object.keys(currentFormValues).forEach((key) => {
  //     if (key.startsWith(`education${index + 1}_`)) {
  //       delete currentFormValues[key];
  //       localStorage.removeItem(key);
  //     }
  //   });
  
  //   // Save updated formValues to local storage
  //   Object.entries(currentFormValues).forEach(([key, value]) => {
  //     localStorage.setItem(key, JSON.stringify(value));
  //   });
  // };
  const handleToggleEducation = (index) => {
    setOpenEducation(openEducation === index ? null : index);
  };
  let edu = {};
  Object.keys(formValues).forEach((key) => {
    let match = key.match(/^(education\d+)_/);
    if (match) {
      const prefix = match[1];
      if (!edu[prefix]) {
        edu[prefix] = {};
      }
      edu[prefix][key.replace(`${prefix}_`, "")] = formValues[key];
    }
  });

  return (
    <div>
      <Typography
        sx={{ fontSize: below600 ? "15px" : "20px", fontWeight: 500 }}
      >
        {`Add Education`}
      </Typography>
      {education.map((exp, index) => {
        const eduKey = `education${index + 1}`;
        const currentFormValues = edu[eduKey] || {};
        console.log(currentFormValues, "mmmm");
        return (
          <CollapsibleEducation
            key={index}
            index={index + 1}
            handleInputChange={handleInputChange}
            onDelete={() => handleDeleteEducation(index)}
            onToggle={() => handleToggleEducation(index + 1)}
            isOpen={openEducation === index + 1}
            totalEducations={education.length}
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
          onClick={handleAddEducation}
        >
          Add Another Education
        </Button>
      </Box>
    </div>
  );
}
