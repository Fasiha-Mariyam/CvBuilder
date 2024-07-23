/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ResponsiveAppBar from "../../../components/Navbar/ResponsiveAppBar";
import { Grid, Paper, useMediaQuery } from "@mui/material";
import SectionsList from "../../../components/CvSections/SectionsList";
import PersonalInfo from "../../../components/Forms/PersonalInfo";
import DefaultTemplate from "../../../components/Templates/DefaultTemplate/DefaultTemplate";
import CustomizeForm from "../../../components/Forms/CustomizeForm";
import Summary from "../../../components/Forms/Summary";
import Experience from "../../../components/Forms/Experience";
import Education from "../../../components/Forms/Education";
import Skills from "../../../components/Forms/Skills";
import Interests from "../../../components/Forms/Interest";
import Project from "../../../components/Forms/Project";
import { useLocation } from "react-router-dom";
import FirstStyledTemplate from "../../../components/Templates/StyledTemplate/FirstStyledTemplate";
import SecondStyleTemp from "../../../components/Templates/StyledTemplate/SecondStyleTemp";
import ThirdStyleTemp from "../../../components/Templates/StyledTemplate/ThirdStyleTemp";
import FourthStyledTemplate from "../../../components/Templates/StyledTemplate/FourthStyledTemplate";
import FifthStyledTemplate from "../../../components/Templates/StyledTemplate/FifthStyledTemplate";
import SixthStyledTemplate from "../../../components/Templates/StyledTemplate/SixthStyledTemp";

export default function CreateResumeScreen() {
  const below400 = useMediaQuery("(max-width:400px)");
  const [formValues, setFormValues] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  console.log(formValues, "form form");
  const [currentSection, setCurrentSection] = useState("Personal Details");
  const location = useLocation();
  const templateValue = location.state;

  const handleSectionChange = (section) => {
    setCurrentSection(currentSection === section ? null : section);
  };

  const renderForm = () => {
    switch (currentSection) {
      case "Personal Details":
        return <PersonalInfo handleInputChange={handleInputChange} />;
      case "Summary":
        return <Summary handleInputChange={handleInputChange} />;
      case "Education":
        return <Education handleInputChange={handleInputChange} />;
      case "Experience":
        return <Experience handleInputChange={handleInputChange} />;
      case "Skills":
        return <Skills handleInputChange={handleInputChange} />;
      case "Interests":
        return <Interests handleInputChange={handleInputChange} />;
      case "Projects":
        return <Project handleInputChange={handleInputChange} />;
      default:
        return <CustomizeForm />;
    }
  };
  const renderTemplate = () => {
    console.log(templateValue);
    switch (templateValue) {
      case 1:
        return <DefaultTemplate formValues={formValues} />;
      case 2:
        return <FirstStyledTemplate formValues={formValues} />;
      case 3:
        return <SecondStyleTemp formValues={formValues} />;
      case 4:
        return <ThirdStyleTemp formValues={formValues} />;
      case 5:
        return <FourthStyledTemplate formValues={formValues} />;
      case 6:
        return <FifthStyledTemplate formValues={formValues} />;
      case 7:
        return <SixthStyledTemplate formValues={formValues} />;
      default:
        return <DefaultTemplate formValues={formValues} />;
    }
  };
  return (
    <>
      <ResponsiveAppBar current={"Create Resume"} />

      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={below400 ? 12 : 6} md={6} lg={2}>
          <Paper sx={{ p: 1 }}>
            <SectionsList
              currentSection={currentSection}
              onSectionChange={handleSectionChange}
            />
          </Paper>
        </Grid>

        <Grid item xs={below400 ? 12 : 6} md={6} lg={4}>
          <Paper sx={{ padding: 2, textAlign: "center" }}>{renderForm()}</Paper>
        </Grid>

        <Grid item xs={12} md={12} lg={6}>
          <Paper sx={{ padding: 2 }}>{renderTemplate()}</Paper>
        </Grid>
      </Grid>
    </>
  );
}
