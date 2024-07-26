/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import PersonalInfo from "../TemplateSections/PersonalInfo";
import Summary from "../TemplateSections/Summary";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Box, Button, Grid, Select, MenuItem } from "@mui/material";
import Skill from "../TemplateSections/Skill";
import Interest from "../TemplateSections/Interest";
import Education from "../TemplateSections/Education";
import Experience from "../TemplateSections/Experience";
import Projects from "../TemplateSections/Projects";

export default function SixthStyledTemplate({
  formValues,
  fontFamily,
  primaryColor,
  secondaryColor,
  fontSize,
  backgroundImage,
}) {
  const templateRef = useRef(null);
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
          Template 7
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
      <Box
        sx={{
          border: "1px solid black",
          p: 1,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover", // Adjust the background size as needed
          backgroundPosition: "center",
        }}
        ref={templateRef}
      >
        <Grid container spacing={1}>
          {/* First Grid */}
          <Grid
            item
            xs={12}
            sm={5}
            md={4}
            sx={{ background: "rgb(240 240 240)", mx: 2, px: 1 }}
          >
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <PersonalInfo
                  temp={"sixth"}
                  formValues={formValues}
                  fontFamily={fontFamily}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  fontSize={fontSize}
                />
              </Grid>
              <Grid item>
                <Education
                  formValues={formValues}
                  temp={"sixth"}
                  fontFamily={fontFamily}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  fontSize={fontSize}
                />
              </Grid>
              {/* <Grid item>
               
              </Grid> */}
            </Grid>
          </Grid>

          {/* Second Grid */}
          <Grid item xs={12} sm={6} md={7}>
            <Summary
              formValues={formValues}
              temp={"sixth"}
              fontFamily={fontFamily}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              fontSize={fontSize}
            />
            <Experience
              formValues={formValues}
              temp={"sixth"}
              fontFamily={fontFamily}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              fontSize={fontSize}
            />
            <Projects
              formValues={formValues}
              temp={"sixth"}
              fontFamily={fontFamily}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              fontSize={fontSize}
            />
            <Skill
              formValues={formValues}
              temp={"sixth"}
              fontFamily={fontFamily}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              fontSize={fontSize}
            />
            <Interest
              formValues={formValues}
              temp={"sixth"}
              fontFamily={fontFamily}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              fontSize={fontSize}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
