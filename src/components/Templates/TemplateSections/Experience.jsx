import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function Experience() {
  return (
    <>
      <Box>
      <Divider sx={{ my: 1 }} />
        <Typography sx={{ fontSize: "1em", fontWeight: "600" }}>
          Experience
        </Typography>
        <Divider sx={{ mb: 1 }} />
        {/* position */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {" "}
          <Typography sx={{ fontSize: ".9em", fontWeight: "600" }}>
            Developer , Contract
          </Typography>
          <Typography sx={{ fontSize: ".7em", fontWeight: "600" }}>
            05/2024 - Present
          </Typography>
        </div>
        {/* Company name and location */}
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          Tezeract{" "}
          <div
            style={{
              width: "5px",
              background: "black",
              height: "5px",
              borderRadius: "50px",
            }}
          />{" "}
          Karachi
        </Typography>
        {/* Details of working experience */}
        <Typography sx={{fontSize:"10px"}}>
          Developed and maintained responsive web applications using React and
          Material-UI, Collaborated with designers and backend developers to
          enhance user experience, Implemented best practices in coding
          standards, testing, and optimization,Improved website performance,
          resulting in a 20% increase in user engagement.
        </Typography>
      </Box>
    </>
  );
}
