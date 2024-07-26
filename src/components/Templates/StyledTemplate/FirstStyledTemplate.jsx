/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import PersonalInfo from "../TemplateSections/PersonalInfo";
import Summary from "../TemplateSections/Summary";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Box, Button, Grid } from "@mui/material";
import Experience from "../TemplateSections/Experience";
import Education from "../TemplateSections/Education";
import Skill from "../TemplateSections/Skill";
import Projects from "../TemplateSections/Projects";
import Interest from "../TemplateSections/Interest";
import Certificate from "../TemplateSections/Certificate";
import Courses from "../TemplateSections/Courses";
import Language from "../TemplateSections/Language";
import References from "../TemplateSections/Reference";
import Awards from "../TemplateSections/Awards";
import Links from "../TemplateSections/Links";
import Volunteer from "../TemplateSections/Volunteer";
import TechnicalSkills from "../TemplateSections/TechnicalSkills";
import Publication from "../TemplateSections/Publication";
import Customize from "../TemplateSections/Customize";

export default function FirstStyledTemplate({
  formValues,
  fontFamily,
  primaryColor,
  secondaryColor,
  backgroundImage,
  fontSize,
  selectedTemplate,
  addedCustomSections,
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
          Template 2
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
          backgroundPosition: "center", // A
        }}
        ref={templateRef}
      >
        <PersonalInfo
          temp={"first"}
          formValues={formValues}
          fontFamily={fontFamily}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          fontSize={fontSize}
        />
        <Summary
          formValues={formValues}
          fontFamily={fontFamily}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          fontSize={fontSize}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <Box>
                <Education
                  formValues={formValues}
                  fontFamily={fontFamily}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  fontSize={fontSize}
                />
                <Experience
                  formValues={formValues}
                  fontFamily={fontFamily}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  fontSize={fontSize}
                />
                {addedCustomSections.includes("Publications") ? (
                  <Publication
                    formValues={formValues}
                    fontFamily={fontFamily}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    fontSize={fontSize}
                  />
                ) : (
                  selectedTemplate === "Publications" && (
                    <Publication
                      formValues={formValues}
                      fontFamily={fontFamily}
                      primaryColor={primaryColor}
                      secondaryColor={secondaryColor}
                      fontSize={fontSize}
                    />
                  )
                )}
                {addedCustomSections.includes("Customize") ? (
                  <Customize
                    formValues={formValues}
                    fontFamily={fontFamily}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    fontSize={fontSize}
                  />
                ) : (
                  selectedTemplate === "Customize" && (
                    <Customize
                      formValues={formValues}
                      fontFamily={fontFamily}
                      primaryColor={primaryColor}
                      secondaryColor={secondaryColor}
                      fontSize={fontSize}
                    />
                  )
                )}

                {addedCustomSections.includes("reference") ? (
                  <References
                    formValues={formValues}
                    fontFamily={fontFamily}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    fontSize={fontSize}
                  />
                ) : (
                  selectedTemplate === "reference" && (
                    <References
                      formValues={formValues}
                      fontFamily={fontFamily}
                      primaryColor={primaryColor}
                      secondaryColor={secondaryColor}
                      fontSize={fontSize}
                    />
                  )
                )}
                <Skill
                  formValues={formValues}
                  fontFamily={fontFamily}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  fontSize={fontSize}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box>
                <Projects
                  temp={"first"}
                  formValues={formValues}
                  fontFamily={fontFamily}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  fontSize={fontSize}
                />
                <Interest
                  formValues={formValues}
                  fontFamily={fontFamily}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  fontSize={fontSize}
                />

                {addedCustomSections.includes("certificate") ? (
                  <Certificate
                    formValues={formValues}
                    fontFamily={fontFamily}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    fontSize={fontSize}
                  />
                ) : (
                  selectedTemplate === "certificate" && (
                    <Certificate
                      formValues={formValues}
                      fontFamily={fontFamily}
                      primaryColor={primaryColor}
                      secondaryColor={secondaryColor}
                      fontSize={fontSize}
                    />
                  )
                )}
                {addedCustomSections.includes("course") ? (
                  <Courses
                    formValues={formValues}
                    fontFamily={fontFamily}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    fontSize={fontSize}
                  />
                ) : (
                  selectedTemplate === "course" && (
                    <Courses
                      formValues={formValues}
                      fontFamily={fontFamily}
                      primaryColor={primaryColor}
                      secondaryColor={secondaryColor}
                      fontSize={fontSize}
                    />
                  )
                )}
                {addedCustomSections.includes("Language") ? (
                  <Language
                    formValues={formValues}
                    fontFamily={fontFamily}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    fontSize={fontSize}
                  />
                ) : (
                  selectedTemplate === "Language" && (
                    <Language
                      formValues={formValues}
                      fontFamily={fontFamily}
                      primaryColor={primaryColor}
                      secondaryColor={secondaryColor}
                      fontSize={fontSize}
                    />
                  )
                )}

                {addedCustomSections.includes("Awards and Honors") ? (
                  <Awards
                    formValues={formValues}
                    fontFamily={fontFamily}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    fontSize={fontSize}
                  />
                ) : (
                  selectedTemplate === "Awards and Honors" && (
                    <Awards
                      formValues={formValues}
                      fontFamily={fontFamily}
                      primaryColor={primaryColor}
                      secondaryColor={secondaryColor}
                      fontSize={fontSize}
                    />
                  )
                )}
                {addedCustomSections.includes("Links") ? (
                  <Links
                    formValues={formValues}
                    fontFamily={fontFamily}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    fontSize={fontSize}
                  />
                ) : (
                  selectedTemplate === "Links" && (
                    <Links
                      formValues={formValues}
                      fontFamily={fontFamily}
                      primaryColor={primaryColor}
                      secondaryColor={secondaryColor}
                      fontSize={fontSize}
                    />
                  )
                )}
                {addedCustomSections.includes("Volunteer Experience") ? (
                  <Volunteer
                    formValues={formValues}
                    fontFamily={fontFamily}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    fontSize={fontSize}
                  />
                ) : (
                  selectedTemplate === "Volunteer Experience" && (
                    <Volunteer
                      formValues={formValues}
                      fontFamily={fontFamily}
                      primaryColor={primaryColor}
                      secondaryColor={secondaryColor}
                      fontSize={fontSize}
                    />
                  )
                )}
                {addedCustomSections.includes("Technical Skills") ? (
                  <TechnicalSkills
                    formValues={formValues}
                    fontFamily={fontFamily}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    fontSize={fontSize}
                  />
                ) : (
                  selectedTemplate === "Technical Skills" && (
                    <TechnicalSkills
                      formValues={formValues}
                      fontFamily={fontFamily}
                      primaryColor={primaryColor}
                      secondaryColor={secondaryColor}
                      fontSize={fontSize}
                    />
                  )
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
