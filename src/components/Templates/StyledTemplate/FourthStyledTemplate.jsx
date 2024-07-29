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

export default function FourthStyledTemplate({
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
  const textStyle = {
    fontSize:
      fontSize == 2
        ? "1em"
        : fontSize == 0
        ? ".8em"
        : fontSize == 1
        ? ".9em"
        : "2em",
    fontWeight: "600",
    color: secondaryColor ? secondaryColor : "rgb(30 55 99)",
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
                  fontSize={fontSize}
                />
              </Grid>
              <Grid item>
                <Skill
                  formValues={formValues}
                  temp={"fourth"}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  fontFamily={fontFamily}
                  fontSize={fontSize}
                />
              </Grid>
              <Grid item>
                <Interest
                  formValues={formValues}
                  temp={"fourth"}
                  fontFamily={fontFamily}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  fontSize={fontSize}
                />
              </Grid>
              <Grid item>
                {addedCustomSections.includes("reference") ? (
                  <References
                    formValues={formValues}
                    fontFamily={fontFamily}
                    temp={"fourth"}
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
                      temp={"fourth"}
                      secondaryColor={secondaryColor}
                      fontSize={fontSize}
                    />
                  )
                )}
              </Grid>
              {addedCustomSections.includes("Language") ? (
                <Language
                  formValues={formValues}
                  temp={"fourth"}
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
                    temp={"fourth"}
                  />
                )
              )}
            </Grid>
          </Grid>

          {/* Second Grid */}
          <Grid item xs={12} sm={7} md={8}>
            <div style={{ marginBottom: "30px" }}>
              <Typography
                sx={{
                  fontSize:
                    fontSize == 2
                      ? "2.5em"
                      : fontSize == 0
                      ? "1.5em"
                      : fontSize == 1
                      ? "2em"
                      : "3em",
                  fontWeight: "600",
                  fontFamily: fontFamily,
                  lineHeight: "1.1",
                  color: secondaryColor ? secondaryColor : "",
                }}
              >
                {formValues?.firstName ? formValues?.firstName : "Fasiha"}
                {formValues?.lastName ? formValues?.lastName : " Mariyam"}
              </Typography>
              <Typography
                sx={{
                  fontSize:
                    fontSize == 2
                      ? "1.2em"
                      : fontSize == 0
                      ? ".8em"
                      : fontSize == 1
                      ? ".9em"
                      : "2em",
                  fontWeight: "500",
                  fontFamily: fontFamily,
                  lineHeight: "2",
                  color: secondaryColor ? secondaryColor : "",
                }}
              >
                {formValues?.jobTitle
                  ? formValues?.jobTitle
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
              fontSize={fontSize}
            />
            <Education
              formValues={formValues}
              temp={"fourth"}
              fontFamily={fontFamily}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              fontSize={fontSize}
            />
            <Experience
              formValues={formValues}
              temp={"fourth"}
              fontFamily={fontFamily}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              fontSize={fontSize}
            />
            <Projects
              formValues={formValues}
              temp={"fourth"}
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
                temp={"fourth"}
                secondaryColor={secondaryColor}
                fontSize={fontSize}
              />
            ) : (
              selectedTemplate === "certificate" && (
                <Certificate
                  formValues={formValues}
                  fontFamily={fontFamily}
                  primaryColor={primaryColor}
                  temp={"fourth"}
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
                temp={"fourth"}
                secondaryColor={secondaryColor}
                fontSize={fontSize}
              />
            ) : (
              selectedTemplate === "course" && (
                <Courses
                  formValues={formValues}
                  fontFamily={fontFamily}
                  temp={"fourth"}
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
                temp={"fourth"}
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
                  temp={"fourth"}
                />
              )
            )}
            {addedCustomSections.includes("Links") ? (
              <Links
                formValues={formValues}
                fontFamily={fontFamily}
                primaryColor={primaryColor}
                temp={"fourth"}
                secondaryColor={secondaryColor}
                fontSize={fontSize}
              />
            ) : (
              selectedTemplate === "Links" && (
                <Links
                  formValues={formValues}
                  fontFamily={fontFamily}
                  primaryColor={primaryColor}
                  temp={"fourth"}
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
                temp={"fourth"}
              />
            ) : (
              selectedTemplate === "Volunteer Experience" && (
                <Volunteer
                  formValues={formValues}
                  fontFamily={fontFamily}
                  temp={"fourth"}
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
                temp={"fourth"}
                fontSize={fontSize}
              />
            ) : (
              selectedTemplate === "Technical Skills" && (
                <TechnicalSkills
                  formValues={formValues}
                  fontFamily={fontFamily}
                  primaryColor={primaryColor}
                  temp={"fourth"}
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
                temp={"fourth"}
                secondaryColor={secondaryColor}
                fontSize={fontSize}
              />
            ) : (
              selectedTemplate === "Publications" && (
                <Publication
                  formValues={formValues}
                  fontFamily={fontFamily}
                  primaryColor={primaryColor}
                  temp={"fourth"}
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
                temp={"fourth"}
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
                  temp={"fourth"}
                  fontSize={fontSize}
                />
              )
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
