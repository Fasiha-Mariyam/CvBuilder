import React, { useState } from "react";
import ResponsiveAppBar from "../../../components/Navbar/ResponsiveAppBar";
import { Grid, Paper, useMediaQuery } from "@mui/material";
import SectionsList from "../../../components/CvSections/SectionsList";
import PersonalInfo from "../../../components/Forms/PersonalInfo";
import DefaultTemplate from "../../../components/Templates/DefaultTemplate";
import CustomizeForm from "../../../components/Forms/CustomizeForm";
import Summary from "../../../components/Forms/Summary";
import Experience from "../../../components/Forms/Experience";
import Education from "../../../components/Forms/Education";
import Skills from "../../../components/Forms/Skills";
import Interests from "../../../components/Forms/Interest";
import Project from "../../../components/Forms/Project"

export default function CreateResumeScreen() {
  const below400 = useMediaQuery("(max-width:400px)");
  const [currentSection, setCurrentSection] = useState('Personal Details');

  const handleSectionChange = (section) => {
    setCurrentSection(currentSection === section ? null : section);
  };

  const renderForm = () => {
    switch (currentSection) {
      case "Personal Details":
        return <PersonalInfo />;
      case "Summary":
        return <Summary />;
      case "Education":
        return <Education />;
      case "Experience":
        return <Experience />;
      case "Skills":
        return <Skills />;
      case "Interests":
        return <Interests/>;
      case "Projects":
        return <Project />;
      default:
        return <CustomizeForm />;
    }
  };

  return (
    <>
      <ResponsiveAppBar current={"Create Resume"} />

      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={below400?12:6} md={6} lg={2}>
          <Paper sx={{ p: 1 }}>
            <SectionsList
              currentSection={currentSection}
              onSectionChange={handleSectionChange}
            />
          </Paper>
        </Grid>

        <Grid item xs={below400?12:6} md={6} lg={4}>
          <Paper sx={{ padding: 2, textAlign: "center" }}>{renderForm()}</Paper>
        </Grid>

        <Grid item xs={12} md={12} lg={6}>
          <Paper sx={{ padding: 2, textAlign: "center" }}>
            <DefaultTemplate />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
