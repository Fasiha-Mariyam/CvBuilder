/* eslint-disable react/prop-types */
import { Box, Divider, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";

const temp6style = { display: "flex", gap: 1, fontSize: "1.2em",mt:3 , fontWeight:"600"}
export default function Summary({ temp, formValues }) {
  return (
    <>
      {temp !== "sixth" && (
        <>
          <Divider
            sx={{
              mb: temp ? 1 : 0,
              my: temp ? 0 : 1,
              background: temp === "fourth" && "black",
            }}
          />
          <Typography
            variant="body2"
            sx={{
              lineHeight: "1",
              mt: 0.5,
              color: temp === "fourth" ? "black" : "grey",
              fontSize: "12px",
            }}
          >
            {formValues.Summary
              ? formValues.Summary
              : `Dedicated and results-driven Frontend Developer with a strong background
        in building responsive and user-friendly web applications. Proficient in
        React and Material-UI, with extensive experience in creating dynamic
        interfaces and seamless user experiences. Skilled in modern web
        technologies, including JavaScript, HTML, and CSS, and adept at
        collaborating with cross-functional teams to deliver high-quality
        projects on time. Proven ability to adapt to new challenges and
        continuously enhance technical skills in fast-paced environments.`}
          </Typography>
          {temp !== "fourth" && (
            <Divider sx={{ my: temp ? 0 : 1, pb: temp && 1 }} />
          )}
        </>
      )}
      {temp === "sixth" && (
        <>
          <Typography sx={temp6style}>
            <AccountCircleIcon sx={{ fontSize: "1.2em" }} />
            ABOUT ME
          </Typography>
          <Divider
            sx={{
              mb: temp ? 1 : 0,
              my: temp ? 0 : 1,
            }}
          />
          <Typography
            variant="body2"
            sx={{ lineHeight: "1", mt: 0.5, fontSize: "12px" ,mb:3}}
          >
            {formValues.Summary
              ? formValues.Summary
              : `Dedicated and results-driven Frontend Developer with a strong background
         in building responsive and user-friendly web applications. Proficient in
         React and Material-UI, with extensive experience in creating dynamic
         interfaces and seamless user experiences. Skilled in modern web
         technologies, including JavaScript, HTML, and CSS, and adept at
         collaborating with cross-functional teams to deliver high-quality
         projects on time. Proven ability to adapt to new challenges and
         continuously enhance technical skills in fast-paced environments.`}
          </Typography>
              
        </>
      )}
    </>
  );
}
