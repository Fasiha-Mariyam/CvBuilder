import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import TemplateCard from "../Card/TemplateCard"; // Adjust the import path as necessary
import templateImg1 from "../../assets/images/t1.png";
import templateImg2 from "../../assets/images/t2.png";
import templateImg3 from "../../assets/images/t3.png";
import templateImg4 from "../../assets/images/t4.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Certificate from "../AddSectionForms/Certificate";
import Courses from "../AddSectionForms/Courses";
import Language from "../AddSectionForms/Language";
import References from "../AddSectionForms/References";

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
      // case 5:
      //   return <FourthStyledTemplate />;
      // case 6:
      //   return <FifthStyledTemplate />;
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
              image={templateImg1}
              title={"Template 1"}
              number={"certificate"}
              handleTemplateSelect={handleTemplateSelect}
            />
            <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
              Certificate
            </Typography>
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
              image={templateImg2}
              title={"Template 2"}
              number={"course"}
              handleTemplateSelect={handleTemplateSelect}
            />
            <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
              Courses
            </Typography>
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
              image={templateImg3}
              title={"Template 3"}
              number={"reference"}
              handleTemplateSelect={handleTemplateSelect}
            />
            <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
              References
            </Typography>
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
              image={templateImg4}
              number={"Language"}
              handleTemplateSelect={handleTemplateSelect}
            />
            <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
              Language
            </Typography>
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
