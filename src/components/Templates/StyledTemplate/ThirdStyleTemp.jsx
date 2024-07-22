import React, { useRef } from "react";
import PersonalInfo from "../TemplateSections/PersonalInfo";
import Summary from "../TemplateSections/Summary";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Interest from "../TemplateSections/Interest";
import Skill from "../TemplateSections/Skill";
import Education from "../TemplateSections/Education";
import Experience from "../TemplateSections/Experience";
import Projects from "../TemplateSections/Projects";

const textStyle = { fontSize: "1em", fontWeight: "600" };
export default function ThirdStyleTemp() {
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
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
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
        <PersonalInfo temp={"third"} />
        <Grid container spacing={2}>
          {/* First Grid */}
          <Grid item xs={12} sm={5} md={5}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Divider sx={{ mb: 1 }} />
                <Typography sx={textStyle}>Summary</Typography>
                <Summary temp={"third"} />
              </Grid>
              <Grid item>
                <Skill temp={"third"} />
              </Grid>
              <Grid item>
                <Interest />
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Divider orientation="vertical" />
          </Grid>

          {/* Second Grid */}
          <Grid item xs={12} sm={6} md={6}>
            <Divider sx={{ mb: 1 }} />
            <Education />
            <Experience />
            <Projects />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
