import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../../../components/Navbar/ResponsiveAppBar";
import { Box, Button, Grid, Paper, useMediaQuery } from "@mui/material";
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
import SeventhStyledTemplate from "../../../components/Templates/StyledTemplate/SeventhStyledTemp";
import EighthStyledTemplate from "../../../components/Templates/StyledTemplate/EighthStyledTemp";
import BasicModal from "../../../components/Modal/SwitchTemplateModal";
import SelectFont from "../../../components/Forms/FontSelect";
import { dispatch } from "../../../redux/store";
import { getformData } from "../../../redux/slices/form";

export default function CreateResumeScreen() {
  const below400 = useMediaQuery("(max-width:400px)");
  const [formValues, setFormValues] = useState(() => {
    const savedValues = localStorage.getItem("formValues");
    return savedValues ? JSON.parse(savedValues) : {};
  });
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [addedCustomSections, setAddedCustomSections] = useState([]);
  const [primaryColor, setPrimaryColor] = React.useState("");
  const [secondaryColor, setSecondaryColor] = React.useState("");
  const [backgroundImage, setBackgroundImage] = React.useState("");
  const [fontSize, setFontSize] = React.useState(2);

  const addSection = (number) => {
    setAddedCustomSections((prevSections) => [...prevSections, number]);
  };
  const handleFontSizeChange = (newValue) => {
    setFontSize(newValue);
  };
  const handleBackgroundImageChange = (image) => setBackgroundImage(image);
  const handleColorChange = (primary) => {
    setPrimaryColor(primary);
  };
  const handleSecColorChange = (secondary) => {
    setSecondaryColor(secondary);
  };

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
    dispatch(getformData(formValues));
  }, [formValues]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const [currentSection, setCurrentSection] = useState("Personal Details");
  const location = useLocation();
  const [fontFamily, setFontFamily] = useState("select");
  const templateValue = location.state;

  const handleSectionChange = (section) => {
    setCurrentSection((prevSection) =>
      prevSection === section ? section : section
    );
  };

  const handleFontChange = (event) => {
    setFontFamily(event.target.value);
  };

  const renderForm = () => {
    switch (currentSection) {
      case "Personal Details":
        return (
          <PersonalInfo
            handleInputChange={handleInputChange}
            formValues={formValues}
          />
        );
      case "Summary":
        return (
          <Summary
            handleInputChange={handleInputChange}
            formValues={formValues}
          />
        );
      case "Education":
        return (
          <Education
            handleInputChange={handleInputChange}
            formValues={formValues}
          />
        );
      case "Experience":
        return (
          <Experience
            handleInputChange={handleInputChange}
            formValues={formValues}
          />
        );
      case "Skills":
        return (
          <Skills
            handleInputChange={handleInputChange}
            formValues={formValues}
          />
        );
      case "Interests":
        return (
          <Interests
            handleInputChange={handleInputChange}
            formValues={formValues}
          />
        );
      case "Projects":
        return (
          <Project
            handleInputChange={handleInputChange}
            formValues={formValues}
          />
        );
      case "Add Section":
        return (
          <CustomizeForm
            setSelectedTemplate={setSelectedTemplate}
            selectedTemplate={selectedTemplate}
            addedCustomSections={addSection}
            addedSections={addedCustomSections}
          />
        );
      //
      case "Font":
        return (
          <SelectFont
            fontFamily={fontFamily}
            handleFontChange={handleFontChange}
            priColor={primaryColor}
            secColor={secondaryColor}
            handleColorChange={handleColorChange}
            handleSecColorChange={handleSecColorChange}
            backgroundImage={backgroundImage}
            handleBackgroundImageChange={handleBackgroundImageChange}
            fontSize={fontSize}
            handleFontSizeChange={handleFontSizeChange}
          />
        );
      default:
        return (
          <CustomizeForm
            handleInputChange={handleInputChange}
            formValues={formValues}
          />
        );
    }
  };

  const renderTemplate = () => {
    switch (templateValue) {
      case 1:
        return (
          <DefaultTemplate
            formValues={formValues}
            fontFamily={fontFamily}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            backgroundImage={backgroundImage}
            fontSize={fontSize}
            selectedTemplate={selectedTemplate}
            addedCustomSections={addedCustomSections}
          />
        );
      case 2:
        return (
          <FirstStyledTemplate
            formValues={formValues}
            fontFamily={fontFamily}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            backgroundImage={backgroundImage}
            fontSize={fontSize}
            selectedTemplate={selectedTemplate}
            addedCustomSections={addedCustomSections}
          />
        );
      case 3:
        return (
          <SecondStyleTemp
            formValues={formValues}
            fontFamily={fontFamily}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            backgroundImage={backgroundImage}
            fontSize={fontSize}
            selectedTemplate={selectedTemplate}
            addedCustomSections={addedCustomSections}
          />
        );
      case 4:
        return (
          <ThirdStyleTemp
            formValues={formValues}
            fontFamily={fontFamily}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            backgroundImage={backgroundImage}
            fontSize={fontSize}
            selectedTemplate={selectedTemplate}
            addedCustomSections={addedCustomSections}
          />
        );
      case 5:
        return (
          <FourthStyledTemplate
            formValues={formValues}
            fontFamily={fontFamily}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            backgroundImage={backgroundImage}
            fontSize={fontSize}
            selectedTemplate={selectedTemplate}
            addedCustomSections={addedCustomSections}
          />
        );
      case 6:
        return (
          <FifthStyledTemplate
            formValues={formValues}
            fontFamily={fontFamily}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            backgroundImage={backgroundImage}
            fontSize={fontSize}
            selectedTemplate={selectedTemplate}
            addedCustomSections={addedCustomSections}
          />
        );
      case 7:
        return (
          <SixthStyledTemplate
            formValues={formValues}
            fontFamily={fontFamily}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            backgroundImage={backgroundImage}
            fontSize={fontSize}
            selectedTemplate={selectedTemplate}
            addedCustomSections={addedCustomSections}
          />
        );
      case 8:
        return (
          <SeventhStyledTemplate
            formValues={formValues}
            fontFamily={fontFamily}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            backgroundImage={backgroundImage}
            fontSize={fontSize}
            selectedTemplate={selectedTemplate}
            addedCustomSections={addedCustomSections}
          />
        );
      case 9:
        return (
          <EighthStyledTemplate
            formValues={formValues}
            fontFamily={fontFamily}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            backgroundImage={backgroundImage}
            fontSize={fontSize}
            selectedTemplate={selectedTemplate}
            addedCustomSections={addedCustomSections}
          />
        );
      case 10:
        return (
          <EighthStyledTemplate
            formValues={formValues}
            fontFamily={fontFamily}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            backgroundImage={backgroundImage}
            fontSize={fontSize}
            selectedTemplate={selectedTemplate}
            addedCustomSections={addedCustomSections}
          />
        );
      default:
        return (
          <DefaultTemplate
            formValues={formValues}
            fontFamily={fontFamily}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            backgroundImage={backgroundImage}
            fontSize={fontSize}
            selectedTemplate={selectedTemplate}
            addedCustomSections={addedCustomSections}
          />
        );
    }
  };

  console.log(addedCustomSections, "hohahoha");

  return (
    <>
      <ResponsiveAppBar current={"Create Resume"} />

      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={below400 ? 12 : 6} md={6} lg={2}>
          <Paper sx={{ p: 1 }}>
            <Box sx={{ m: 2 }}>
              <BasicModal />
            </Box>
            <Box sx={{ m: 2 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{ py: 1.5 }}
                onClick={() => handleSectionChange("Font")}
              >
                Fonts & Colors
              </Button>
            </Box>
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
