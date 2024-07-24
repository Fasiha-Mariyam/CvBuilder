import * as React from "react";
import CollapsibleProject from "../Collapsible/CollapsibleProjects";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

export default function Project({handleInputChange , formValues}) {
  const below600 = useMediaQuery("(max-width:600px)");
  const [Project, setProject] = React.useState([1]);
  const [openProject, setOpenProject] = React.useState(1);
  const projects = {};
  Object.keys(formValues).forEach((key) => {
    let match = key.match(/^(project\d+)_/);
    if (match) {
      const prefix = match[1];
      if (!projects[prefix]) {
        projects[prefix] = {};
      }
      projects[prefix][key.replace(`${prefix}_`, "")] = formValues[key];
    }
  });

  const handleAddProject = () => {
    const newProject = Project.length + 1;
    setProject([...Project, newProject]);
    setOpenProject(newProject);
  };

  const handleDeleteProject = (index) => {
    const newProjects = Project.filter((_, i) => i !== index);
    setProject(newProjects.map((_, i) => i + 1));
    setOpenProject(
      newProjects.length > 0 ? newProjects[newProjects.length - 1] : 1
    );
  };

  const handleToggleProject = (index) => {
    setOpenProject(openProject === index ? null : index);
  };

  return (
    <div>
      <Typography
        sx={{ fontSize: below600 ? "15px" : "20px", fontWeight: 500 }}
      >
        {`Add Project`}
      </Typography>
      {Project.map((exp, index) => {
          const proKey = `project${index + 1}`;
          const currentFormValues = projects[proKey] || {};
          console.log("propro",currentFormValues);
          return (
        <CollapsibleProject
          key={index}
          index={index + 1}
          handleInputChange={handleInputChange}
          onDelete={() => handleDeleteProject(index)}
          onToggle={() => handleToggleProject(index + 1)}
          isOpen={openProject === index + 1}
          totalProjects={Project.length}
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
          onClick={handleAddProject}
        >
          Add Another Project
        </Button>
      </Box>
    </div>
  );
}
