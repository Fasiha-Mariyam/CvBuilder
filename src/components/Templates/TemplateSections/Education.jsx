import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function Education() {
  return (
    <>
      <Box>
        <Typography sx={{ fontSize: "1em", fontWeight: "600" }}>
          Education
        </Typography>
        <Divider sx={{ mb: 1 }} />
        {/* Field and date */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {" "}
          <Typography sx={{ fontSize: ".9em", fontWeight: "600" }}>
            BS , Computer Science
          </Typography>
          <Typography sx={{ fontSize: ".7em", fontWeight: "600" }}>
            03/2021 - Present
          </Typography>
        </div>
        {/* school name and Grade */}
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          Dawood Uni{" "}
          <div
            style={{
              width: "5px",
              background: "black",
              height: "5px",
              borderRadius: "50px",
            }}
          />
          3.7 CGPA
        </Typography>
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
