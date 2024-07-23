/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";
import React, { useRef } from "react";
import PersonalInfo from "../TemplateSections/PersonalInfo";
import Summary from "../TemplateSections/Summary";
import Experience from "../TemplateSections/Experience";
import Education from "../TemplateSections/Education";
import Skill from "../TemplateSections/Skill";
import Interest from "../TemplateSections/Interest";
import Projects from "../TemplateSections/Projects";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function DefaultTemplate({ formValues }) {
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
          Template 1
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
      <Box sx={{ border: "1px solid black", p: 1 }} ref={templateRef}>
        <PersonalInfo formValues={formValues} />
        <Summary formValues={formValues} />
        <Education formValues={formValues} />
        <Experience formValues={formValues} />

        <Skill formValues={formValues} />
        <Projects formValues={formValues} />
        <Interest formValues={formValues} />
      </Box>
    </>
  );
}
