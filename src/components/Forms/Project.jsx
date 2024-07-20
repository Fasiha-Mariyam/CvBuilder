import * as React from "react";
import CollapsibleProject from "../Collapsible/CollapsibleProjects";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

export default function Project() {
  const below600 = useMediaQuery("(max-width:600px)");
  const [Project, setProject] = React.useState([1]);
  const [openProject, setOpenProject] = React.useState(1);

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
      {Project.map((exp, index) => (
        <CollapsibleProject
          key={index}
          index={index + 1}
          onDelete={() => handleDeleteProject(index)}
          onToggle={() => handleToggleProject(index + 1)}
          isOpen={openProject === index + 1}
          totalProjects={Project.length}
        />
      ))}
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
