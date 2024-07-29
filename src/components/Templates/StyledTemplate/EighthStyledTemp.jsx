/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import PersonalInfo from "../TemplateSections/PersonalInfo";
import Summary from "../TemplateSections/Summary";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
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

export default function EighthStyledTemplate({
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
          Template 9
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
          fontFamily: "fantasy",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover", // Adjust the background size as needed
          backgroundPosition: "center",
        }}
        ref={templateRef}
      >
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            gap: 10,
            color: secondaryColor ? secondaryColor : "black",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              marginTop: "10px",
            }}
          >
            <Avatar sx={{ width: 150, height: 150 }} />
          </div>
          <Box>
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
                lineHeight: "1.1",
                fontFamily: fontFamily,
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
                color: secondaryColor ? secondaryColor : "rgb(0 35 43)",
                lineHeight: "2",
                fontFamily: fontFamily,
              }}
            >
              {formValues?.jobTitle
                ? formValues?.jobTitle
                : `Frontend Developer`}
              <Divider sx={{ background: "white", width: "50%" }} />
            </Typography>
            <Typography
              variant="body2"
              sx={{
                lineHeight: "1",
                mt: 0.5,
                color: "black",
                fontSize:
                  fontSize == 2
                    ? "12px"
                    : fontSize == 0
                    ? "8px"
                    : fontSize == 1
                    ? "9px"
                    : "15px",
                fontFamily: fontFamily,
              }}
            >
              {formValues?.Summary
                ? formValues?.Summary
                : `Dedicated and results-driven Frontend Developer with a strong background
        in building responsive and user-friendly web applications. Proficient in
        React and Material-UI, with extensive experience in creating dynamic
        interfaces and seamless user experiences. Skilled in modern web
        technologies, including JavaScript, HTML, and CSS, and adept at
        collaborating with cross-functional teams to deliver high-quality
        projects on time. Proven ability to adapt to new challenges and
        continuously enhance technical skills in fast-paced environments.`}
            </Typography>
          </Box>
        </div>
        <PersonalInfo
          temp={"eighth"}
          formValues={formValues}
          fontFamily={fontFamily}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          fontSize={fontSize}
        />

        <Skill
          formValues={formValues}
          temp={"eighth"}
          fontFamily={fontFamily}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          fontSize={fontSize}
        />

        <Education
          formValues={formValues}
          temp={"eighth"}
          fontFamily={fontFamily}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          fontSize={fontSize}
        />
        <Experience
          formValues={formValues}
          temp={"eighth"}
          fontFamily={fontFamily}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          fontSize={fontSize}
        />
        <Projects
          formValues={formValues}
          temp={"eighth"}
          fontFamily={fontFamily}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          fontSize={fontSize}
        />

        <Interest
          formValues={formValues}
          temp={"eighth"}
          fontFamily={fontFamily}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          fontSize={fontSize}
        />
        {addedCustomSections.includes("certificate") ? (
          <Certificate
            formValues={formValues}
            temp={"eighth"}
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
              temp={"eighth"}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              fontSize={fontSize}
            />
          )
        )}
        {addedCustomSections.includes("course") ? (
          <Courses
            formValues={formValues}
            temp={"eighth"}
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
              temp={"eighth"}
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
            temp={"eighth"}
            fontSize={fontSize}
          />
        ) : (
          selectedTemplate === "Language" && (
            <Language
              formValues={formValues}
              fontFamily={fontFamily}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              temp={"eighth"}
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
            temp={"eighth"}
            fontSize={fontSize}
          />
        ) : (
          selectedTemplate === "Awards and Honors" && (
            <Awards
              formValues={formValues}
              fontFamily={fontFamily}
              primaryColor={primaryColor}
              temp={"eighth"}
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
            temp={"eighth"}
            secondaryColor={secondaryColor}
            fontSize={fontSize}
          />
        ) : (
          selectedTemplate === "Links" && (
            <Links
              formValues={formValues}
              fontFamily={fontFamily}
              primaryColor={primaryColor}
              temp={"eighth"}
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
            temp={"eighth"}
            fontSize={fontSize}
          />
        ) : (
          selectedTemplate === "Volunteer Experience" && (
            <Volunteer
              formValues={formValues}
              fontFamily={fontFamily}
              temp={"eighth"}
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
            temp={"eighth"}
            fontSize={fontSize}
          />
        ) : (
          selectedTemplate === "Technical Skills" && (
            <TechnicalSkills
              formValues={formValues}
              fontFamily={fontFamily}
              temp={"eighth"}
              primaryColor={primaryColor}
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
            secondaryColor={secondaryColor}
            temp={"eighth"}
            fontSize={fontSize}
          />
        ) : (
          selectedTemplate === "Publications" && (
            <Publication
              formValues={formValues}
              fontFamily={fontFamily}
              primaryColor={primaryColor}
              temp={"eighth"}
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
            temp={"eighth"}
            fontSize={fontSize}
          />
        ) : (
          selectedTemplate === "Customize" && (
            <Customize
              formValues={formValues}
              fontFamily={fontFamily}
              primaryColor={primaryColor}
              temp={"eighth"}
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
            temp={"eighth"}
            fontSize={fontSize}
          />
        ) : (
          selectedTemplate === "reference" && (
            <References
              formValues={formValues}
              fontFamily={fontFamily}
              primaryColor={primaryColor}
              temp={"eighth"}
              secondaryColor={secondaryColor}
              fontSize={fontSize}
            />
          )
        )}
      </Box>
    </>
  );
}
