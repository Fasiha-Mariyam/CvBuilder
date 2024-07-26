/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TemplateCard from "../Card/TemplateCard"; 
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Certificate from "../AddSectionForms/Certificate";
import Courses from "../AddSectionForms/Courses";
import Language from "../AddSectionForms/Language";
import References from "../AddSectionForms/References";
import Awards from "../AddSectionForms/Awards";
import Links from "../AddSectionForms/Links";
import Volunteer from "../AddSectionForms/Volunteer";
import TechnicalSkills from "../AddSectionForms/TechnicalSkills";
import Publication from "../AddSectionForms/Publication";
import CustomSection from "../AddSectionForms/CustomizeYourself";

export default function CustomizeForm({
  selectedTemplate,
  addedSections,
  setSelectedTemplate,
  addedCustomSections,
}) {
  const handleTemplateSelect = (number) => {
    setSelectedTemplate(number);
  };

  const handleBackClick = () => {
    setSelectedTemplate(null);
  };

  const renderCustomizeForm = () => {
    switch (selectedTemplate) {
      case "certificate":
        return (
          <Certificate
            number={"certificate"}
            addedCustomSections={addedCustomSections}
            addedSections={addedSections}
          />
        );
      case "course":
        return (
          <Courses
            number={"course"}
            addedCustomSections={addedCustomSections}
            addedSections={addedSections}
          />
        );
      case "reference":
        return (
          <References
            number={"reference"}
            addedCustomSections={addedCustomSections}
            addedSections={addedSections}
          />
        );
      case "Language":
        return (
          <Language
            number={"Language"}
            addedCustomSections={addedCustomSections}
            addedSections={addedSections}
          />
        );
      case "Awards and Honors":
        return (
          <Awards
            number={"Awards and Honors"}
            addedCustomSections={addedCustomSections}
            addedSections={addedSections}
          />
        );
      case "Links":
        return (
          <Links
            number={"Links"}
            addedCustomSections={addedCustomSections}
            addedSections={addedSections}
          />
        );
      case "Volunteer Experience":
        return (
          <Volunteer
            number={"Volunteer Experience"}
            addedCustomSections={addedCustomSections}
            addedSections={addedSections}
          />
        );
      case "Technical Skills":
        return (
          <TechnicalSkills
            number={"Technical Skills"}
            addedCustomSections={addedCustomSections}
            addedSections={addedSections}
          />
        );
      case "Publications":
        return (
          <Publication
            number={"Publications"}
            addedCustomSections={addedCustomSections}
            addedSections={addedSections}
          />
        );
      case "Customize":
        return (
          <CustomSection
            number={"Customize"}
            addedCustomSections={addedCustomSections}
            addedSections={addedSections}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        height: "80vh",
        overflowY: "auto",
        padding: 2,
        "&::-webkit-scrollbar": { width: "8px" },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#888",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": { backgroundColor: "#555" },
      }}
    >
      {selectedTemplate === null ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TemplateCard
              number={"certificate"}
              handleTemplateSelect={handleTemplateSelect}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TemplateCard
              number={"course"}
              handleTemplateSelect={handleTemplateSelect}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TemplateCard
              number={"reference"}
              handleTemplateSelect={handleTemplateSelect}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TemplateCard
              number={"Language"}
              handleTemplateSelect={handleTemplateSelect}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TemplateCard
              number={"Links"}
              handleTemplateSelect={handleTemplateSelect}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TemplateCard
              number={"Volunteer Experience"}
              handleTemplateSelect={handleTemplateSelect}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TemplateCard
              number={"Awards and Honors"}
              handleTemplateSelect={handleTemplateSelect}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TemplateCard
              number={"Technical Skills"}
              handleTemplateSelect={handleTemplateSelect}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TemplateCard
              number={"Publications"}
              handleTemplateSelect={handleTemplateSelect}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TemplateCard
              number={"Customize"}
              handleTemplateSelect={handleTemplateSelect}
            />
          </Box>
          {/* Add more TemplateCard items similarly */}
        </Box>
      ) : (
        <>
          <Box sx={{ display: "flex", justifyContent: "start" }}>
            <Button
              onClick={handleBackClick}
              startIcon={<ArrowBackIosIcon />}
              sx={{ marginBottom: 2 }}
            >
              Back
            </Button>
          </Box>
          {renderCustomizeForm()}
        </>
      )}
    </Box>
  );
}
