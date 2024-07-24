/* eslint-disable react/prop-types */
import { Box, Divider, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";

export default function Summary({
  temp,
  formValues,
  fontFamily,
  secondaryColor,
  primaryColor,
}) {
  const temp6style = {
    display: "flex",
    gap: 1,
    fontSize: "1.2em",
    fontFamily: fontFamily,
    color: secondaryColor ? secondaryColor : "black",
    mt: 3,
    fontWeight: "600",
  };
  const temp7style = {
    textAlign: "center",

    color: secondaryColor ? secondaryColor : "rgb(166 166 166)",
    fontFamily: fontFamily,
    mt: 2,
    fontSize: "1.2em",
    fontWeight: "600",
  };
  return (
    <>
      {temp !== "sixth" && temp !== "seventh" && (
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
              fontFamily: fontFamily,
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
            <AccountCircleIcon
              sx={{
                fontSize: "1.2em",
                fontFamily: fontFamily,
                color: secondaryColor ? secondaryColor : "black",
              }}
            />
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
            sx={{
              lineHeight: "1",
              mt: 0.5,
              fontSize: "12px",
              mb: 3,
              fontFamily: fontFamily,
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
        </>
      )}
      {temp === "seventh" && (
        <>
          <Typography sx={temp7style}>About Me</Typography>
          <Divider
            sx={{
              mb: temp ? 1 : 0,
              my: temp ? 0 : 1,
            }}
          />
          <Typography
            variant="body2"
            sx={{
              lineHeight: "1",
              mt: 0.5,
              fontSize: "12px",
              fontFamily: fontFamily,
              color: "rgb(166 166 166)",
              mb: 3,
              textAlign: "center",
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
        </>
      )}
    </>
  );
}
