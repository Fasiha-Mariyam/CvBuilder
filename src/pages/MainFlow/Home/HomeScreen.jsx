/* eslint-disable no-unused-vars */
import React from "react";
import ResponsiveAppBar from "../../../components/Navbar/ResponsiveAppBar";
import TemplateCard from "../../../components/Card/TemplateCard";
import templateImg1 from "../../../assets/images/t1.png";
import templateImg2 from "../../../assets/images/t2.png";
import templateImg3 from "../../../assets/images/t3.png";
import templateImg4 from "../../../assets/images/t4.png";
import { Box, Divider } from "@mui/material";

export default function HomeScreen() {
  return (
    <>
      <ResponsiveAppBar current={"Home"} />
      <Divider sx={{ mb: 3 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap", // Allows items to wrap to the next line on smaller screens
          gap: 2, // Adds spacing between items
          p: 2, // Adds padding around the Box
        }}
      >
        <TemplateCard
          image={templateImg1}
          title={"Template 1"}
          subheader={"September 14, 2016"}
        />
        <TemplateCard
          image={templateImg2}
          title={"Template 2"}
          subheader={"September 14, 2016"}
        />
        <TemplateCard
          image={templateImg3}
          title={"Template 3"}
          subheader={"September 14, 2016"}
        />
        <TemplateCard
          image={templateImg4}
          title={"Template 4"}
          subheader={"September 14, 2016"}
        />
      </Box>
    </>
  );
}
