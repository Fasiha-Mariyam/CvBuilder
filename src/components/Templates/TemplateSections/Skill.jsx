import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function Skill({ temp }) {
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
  ];
  return (
    <>
      <Box>
        {!temp && <Divider sx={{ my: 1 }} />}
        <Typography sx={{ fontSize: "1em", fontWeight: "600", mt: temp && -1 }}>
          Skills
        </Typography>

        <Divider sx={{ mb: 1 }} />
        {skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              color: "rgba(83, 97, 103, 1)",
              border: "1px solid rgba(217, 217, 217, 0.85)",
              borderRadius: "17px",
              padding: ".5rem",
              mb: 0.5,
              cursor: "pointer",
              fontSize: "10px",
              marginRight: "8px",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>{skill}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}
