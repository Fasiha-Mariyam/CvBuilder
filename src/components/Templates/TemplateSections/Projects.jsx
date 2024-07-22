import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function Projects({temp}) {
  return (
    <>
      <Box>
      {!temp && <Divider sx={{ my: 1 }} />}
        <Typography sx={{ fontSize: "1em", fontWeight: "600" }}>
          Projects
        </Typography>

        <Divider sx={{ mb: 1 }} />
             {/* Project Name and date */}
             <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: ".9em", fontWeight: "600" }}>
            FoodPanda Website Clone
          </Typography>
          <Typography sx={{ fontSize: ".7em", fontWeight: "600" }}>
            03/2021 - Present
          </Typography>
        </div>
        {/* Details of working Education */}
        <Typography sx={{fontSize:"10px"}}>
          Developed and maintained responsive web applications using React and
          Material-UI, Collaborated with designers and backend developers to
          enhance user Education, Implemented best practices in coding
          standards, testing, and optimization,Improved website performance,
          resulting in a 20% increase in user engagement.
        </Typography>
      </Box>
    </>
  );
}
