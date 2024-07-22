import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function Summary({ temp }) {
  return (
    <>
      <Divider sx={{ mb: temp ? 1 : 0, my: temp ? 0 : 1 }} />
      <Typography
        variant="body2"
        sx={{ lineHeight: "1", mt: 0.5, color: "grey", fontSize: "12px" }}
      >
        Dedicated and results-driven Frontend Developer with a strong background
        in building responsive and user-friendly web applications. Proficient in
        React and Material-UI, with extensive experience in creating dynamic
        interfaces and seamless user experiences. Skilled in modern web
        technologies, including JavaScript, HTML, and CSS, and adept at
        collaborating with cross-functional teams to deliver high-quality
        projects on time. Proven ability to adapt to new challenges and
        continuously enhance technical skills in fast-paced environments.
      </Typography>
      <Divider sx={{ my: temp ? 0 : 1, pb: temp && 1 }} />
    </>
  );
}
