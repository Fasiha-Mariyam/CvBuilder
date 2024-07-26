/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import PersonalInfo from "../TemplateSections/PersonalInfo";
import Summary from "../TemplateSections/Summary";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import Skill from "../TemplateSections/Skill";
import Interest from "../TemplateSections/Interest";
import Education from "../TemplateSections/Education";
import Experience from "../TemplateSections/Experience";
import Projects from "../TemplateSections/Projects";
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

export default function SeventhStyledTemplate({
  formValues,
  fontFamily,
  primaryColor,
  secondaryColor,
  fontSize,
  backgroundImage,
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
          Template 8
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
      <Box sx={{ position: "relative" }}>
        {/* Grid content */}
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
          {/* Overlapping Box */}
          <Box
            sx={{
              position: "absolute",
              top: 40,
              left: 0,
              right: 0,
              backgroundColor: "rgb(4 50 128)",
              color: secondaryColor ? secondaryColor : "white",
              zIndex: 10,
              display: "flex",
              height: "100px",
              justifyContent: "space-around",
              alignItems: "center",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.5)",
            }}
          >
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                justifyContent: "center",
              }}
            >
              <Avatar sx={{ width: 150, height: 150 }} />
            </div>
            <div>
              <Typography
                sx={{
                  fontSize:
                    fontSize == 2
                      ? "2em"
                      : fontSize == 0
                      ? "1.5em"
                      : fontSize == 1
                      ? "1.7em"
                      : "2.5em",
                  fontWeight: "600",
                  fontFamily: fontFamily,
                  lineHeight: "1.1",
                }}
              >
                {formValues.firstName ? formValues.firstName : "Fasiha"}
                {formValues.lastName ? formValues.lastName : " Mariyam"}
              </Typography>
              <Typography
                sx={{
                  fontSize:
                    fontSize == 2
                      ? "1em"
                      : fontSize == 0
                      ? ".8em"
                      : fontSize == 1
                      ? ".9em"
                      : "1.5em",
                  fontWeight: "500",
                  lineHeight: "1.5",
                  fontFamily: fontFamily,
                }}
              >
                {formValues.jobTitle
                  ? formValues.jobTitle
                  : `Frontend Developer`}
              </Typography>
            </div>
          </Box>
          <Grid container spacing={1}>
            {/* First Grid */}
            <Grid
              item
              xs={12}
              sm={5}
              md={4}
              sx={{ background: "black", mx: 2, px: 1, color: "white" }}
            >
              <Grid container direction="column" spacing={2} sx={{ py: 20 }}>
                <Grid item>
                  <Summary
                    formValues={formValues}
                    temp={"seventh"}
                    fontFamily={fontFamily}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    fontSize={fontSize}
                  />
                </Grid>
                <Grid item>
                  <PersonalInfo
                    temp={"seventh"}
                    formValues={formValues}
                    fontFamily={fontFamily}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    fontSize={fontSize}
                  />
                </Grid>
                <Grid item>
                  <Skill
                    temp={"seventh"}
                    formValues={formValues}
                    fontFamily={fontFamily}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    fontSize={fontSize}
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* Second Grid */}
            <Grid item xs={12} sm={6} md={7}>
              <Grid
                container
                direction="column"
                spacing={2}
                sx={{ pt: 20, px: 2 }}
              >
                <Education
                  formValues={formValues}
                  temp={"seventh"}
                  fontFamily={fontFamily}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  fontSize={fontSize}
                />
                <Experience
                  formValues={formValues}
                  temp={"seventh"}
                  fontFamily={fontFamily}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  fontSize={fontSize}
                />
                <Projects
                  formValues={formValues}
                  temp={"seventh"}
                  fontFamily={fontFamily}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  fontSize={fontSize}
                />
                <Interest
                  formValues={formValues}
                  temp={"seventh"}
                  fontFamily={fontFamily}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  fontSize={fontSize}
                />
                {addedCustomSections.includes("certificate") ? (
                  <Certificate
                    formValues={formValues}
                    fontFamily={fontFamily}
                    temp={"seventh"}
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
                      temp={"seventh"}
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
                    temp={"seventh"}
                    fontSize={fontSize}
                  />
                ) : (
                  selectedTemplate === "course" && (
                    <Courses
                      formValues={formValues}
                      fontFamily={fontFamily}
                      primaryColor={primaryColor}
                      secondaryColor={secondaryColor}
                      temp={"seventh"}
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
                    temp={"seventh"}
                    fontSize={fontSize}
                  />
                ) : (
                  selectedTemplate === "Language" && (
                    <Language
                      formValues={formValues}
                      fontFamily={fontFamily}
                      primaryColor={primaryColor}
                      temp={"seventh"}
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
                    temp={"seventh"}
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
                      temp={"seventh"}
                      fontSize={fontSize}
                    />
                  )
                )}
                {addedCustomSections.includes("Links") ? (
                  <Links
                    formValues={formValues}
                    temp={"seventh"}
                    fontFamily={fontFamily}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    fontSize={fontSize}
                  />
                ) : (
                  selectedTemplate === "Links" && (
                    <Links
                      formValues={formValues}
                      temp={"seventh"}
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
                    temp={"seventh"}
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
                      temp={"seventh"}
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
                    temp={"seventh"}
                  />
                ) : (
                  selectedTemplate === "Technical Skills" && (
                    <TechnicalSkills
                      formValues={formValues}
                      fontFamily={fontFamily}
                      primaryColor={primaryColor}
                      temp={"seventh"}
                      secondaryColor={secondaryColor}
                      fontSize={fontSize}
                    />
                  )
                )}
                {addedCustomSections.includes("Publications") ? (
                  <Publication
                    formValues={formValues}
                    fontFamily={fontFamily}
                    primaryColor={primaryColor}
                    temp={"seventh"}
                    secondaryColor={secondaryColor}
                    fontSize={fontSize}
                  />
                ) : (
                  selectedTemplate === "Publications" && (
                    <Publication
                      formValues={formValues}
                      fontFamily={fontFamily}
                      temp={"seventh"}
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
                    temp={"seventh"}
                    secondaryColor={secondaryColor}
                    fontSize={fontSize}
                  />
                ) : (
                  selectedTemplate === "Customize" && (
                    <Customize
                      formValues={formValues}
                      fontFamily={fontFamily}
                      primaryColor={primaryColor}
                      temp={"seventh"}
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
                    temp={"seventh"}
                    secondaryColor={secondaryColor}
                    fontSize={fontSize}
                  />
                ) : (
                  selectedTemplate === "reference" && (
                    <References
                      temp={"seventh"}
                      formValues={formValues}
                      fontFamily={fontFamily}
                      primaryColor={primaryColor}
                      secondaryColor={secondaryColor}
                      fontSize={fontSize}
                    />
                  )
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
