/* eslint-disable no-unused-vars */
import React from "react";
import ResponsiveAppBar from "../../../components/Navbar/ResponsiveAppBar";
import TemplateCard from "../../../components/Card/TemplateCard";
import templateImg1 from "../../../assets/images/t1.png";
import templateImg2 from "../../../assets/images/t2.png";
import templateImg3 from "../../../assets/images/t3.png";
import templateImg4 from "../../../assets/images/t4.png";
import templateImg5 from "../../../assets/images/t5.png";
import templateImg6 from "../../../assets/images/t6.png";
import templateImg7 from "../../../assets/images/t7.png";
import templateImg8 from "../../../assets/images/t8.png";

import templateImg9 from "../../../assets/images/t9.png";
import { Box, Divider, Typography } from "@mui/material";

export default function HomeScreen() {
  return (
    <>
      <ResponsiveAppBar current={"Home"} />
      <Divider sx={{ mb: 3 }} />
      <Typography
        sx={{
          fontSize: "20px",
          textAlign: "center",
          fontWeight: "bold",
          color: "#f89421",
        }}
      >
        Templates
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          p: 2,
        }}
      >
        <Box>
          <TemplateCard image={templateImg1} title={"Template 1"} number={1} />
          <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
            Classic
          </Typography>
        </Box>
        <Box>
          {" "}
          <TemplateCard image={templateImg2} title={"Template 2"} number={2} />
          <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
            Elegant
          </Typography>
        </Box>

        <Box>
          <TemplateCard image={templateImg3} title={"Template 3"} number={3} />
          <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
            Double Column
          </Typography>
        </Box>
        <Box>
          {" "}
          <TemplateCard image={templateImg4} title={"Template 4"} number={4} />
          <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
            Simple
          </Typography>
        </Box>
        <Box>
          {" "}
          <TemplateCard
            image={templateImg5}
            title={"Template 5"}
            number={5}
          />{" "}
          <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
            Polished
          </Typography>
        </Box>
        <Box>
          {" "}
          <TemplateCard image={templateImg6} title={"Template 6"} number={6} />
          <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
            Modern
          </Typography>
        </Box>
        <Box>
          {" "}
          <TemplateCard image={templateImg7} title={"Template 7"} number={7} />
          <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
            Creative
          </Typography>
        </Box>
        <Box>
          {" "}
          <TemplateCard image={templateImg8} title={"Template 8"} number={8} />
          <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
            Stylish
          </Typography>
        </Box>
        <Box>
          {" "}
          <TemplateCard image={templateImg9} title={"Template 9"} number={9} />
          <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
            Single Column
          </Typography>
        </Box>
      </Box>
    </>
  );
}
