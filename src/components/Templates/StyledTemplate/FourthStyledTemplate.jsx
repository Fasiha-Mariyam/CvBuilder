/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import PersonalInfo from "../TemplateSections/PersonalInfo";
import Summary from "../TemplateSections/Summary";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Skill from "../TemplateSections/Skill";
import Interest from "../TemplateSections/Interest";
import Education from "../TemplateSections/Education";
import Experience from "../TemplateSections/Experience";
import Projects from "../TemplateSections/Projects";

export default function FourthStyledTemplate({
  formValues,
  fontFamily,
  primaryColor,
  secondaryColor,
  backgroundImage,
  fontSize,
}) {
  const templateRef = useRef(null);
  const textStyle = {
    fontSize: "1em",
    fontWeight: "600",
    color:secondaryColor?secondaryColor:"rgb(30 55 99)",
    fontFamily: fontFamily,
  };
  const downloadCV = () => {
    if (templateRef.current) {
      html2canvas(templateRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg");

        const pdf = new jsPDF("p", "mm", "a4");
        const width = 210; // A4 width in mm
        const height = 297; // A4 height in mm
        pdf.addImage(imgData, "JPEG", 0, 0, width, height);
        pdf.save("cv.pdf");
      });
    } else {
      console.error("No element found to capture");
    }
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Button
          sx={{
            background: "rgb(234 235 235)",
            textTransform: "none",
          }}
          disabled
        >
          Template 5
        </Button>
        <Button
          sx={{
            color: "#498fcd",
            background: "rgb(234 235 235)",
            "&:hover": {
              backgroundColor: "#003d4d",
            },
          }}
          onClick={downloadCV}
        >
          Download
        </Button>
      </Box>
      <Box sx={{ border: "1px solid black", p: 1,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Adjust the background size as needed
        backgroundPosition: "center", // A
       }} ref={templateRef}>
        <Grid container spacing={1}>
          {/* First Grid */}
          <Grid item xs={12} sm={5} md={4} sx={{ background: "rgb(30 55 99)" }}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <PersonalInfo
                  temp={"fourth"}
                  formValues={formValues}
                  fontFamily={fontFamily}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                />
              </Grid>
              <Grid item>
                <Skill
                  formValues={formValues}
                  temp={"fourth"}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  fontFamily={fontFamily}
                />
              </Grid>
              <Grid item>
                <Interest
                  formValues={formValues}
                  temp={"fourth"}
                  fontFamily={fontFamily}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Second Grid */}
          <Grid item xs={12} sm={7} md={8}>
            <div style={{ marginBottom: "30px" }}>
              <Typography
                sx={{
                  fontSize: "2.5em",
                  fontWeight: "600",
                  fontFamily: fontFamily,
                  lineHeight: "1.1",
                  color:secondaryColor?secondaryColor:""
                }}
              >
                {formValues.firstName ? formValues.firstName : "Fasiha"}
                {formValues.lastName ? formValues.lastName : " Mariyam"}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2em",
                  fontWeight: "500",
                  fontFamily: fontFamily,
                  lineHeight: "2",
                  color:secondaryColor?secondaryColor:""
                }}
              >
                {formValues.jobTitle
                  ? formValues.jobTitle
                  : `Frontend Developer`}
              </Typography>
            </div>{" "}
            <Typography sx={textStyle}>PROFILE</Typography>
            <Summary
              formValues={formValues}
              temp={"fourth"}
              fontFamily={fontFamily}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
            />
            <Education
              formValues={formValues}
              temp={"fourth"}
              fontFamily={fontFamily}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
            />
            <Experience
              formValues={formValues}
              temp={"fourth"}
              fontFamily={fontFamily}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
            />
            <Projects
              formValues={formValues}
              temp={"fourth"}
              fontFamily={fontFamily}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
