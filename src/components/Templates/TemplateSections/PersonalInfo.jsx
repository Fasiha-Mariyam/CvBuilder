import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const textStyle = { fontSize: "0.8em", fontWeight: "500", lineHeight: "1.1" };

const Temp2Style = { fontSize: "0.8em", fontWeight: "500", lineHeight: "2" }; // for div style
const Temp3Style = {
  fontSize: "0.8em",
  fontWeight: "500",
  lineHeight: "1.5",
}; // for textStyle only
const Temp3DivStyle = { textAlign: "center" };
const Temp3MainBox = {
  display: "flex",
  justifyContent: "space-between",
  my: 0.5,
};
const Temp3InnerBox = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "end",
  flexDirection: "column",
  my: 0.5,
};

export default function PersonalInfo({ temp }) {
  const below450 = useMediaQuery("(max-width:450px)");
  const Temp1Style = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: below450 && "column",
  }; // for box style
  return (
    <>
      <Box sx={temp === "first" ? Temp1Style : {}}>
        <div style={temp === "third" ? Temp3DivStyle : {}}>
          <Typography
            sx={{ fontSize: "2em", fontWeight: "600", lineHeight: "1.1" }}
          >
            Fasiha Mariyam
          </Typography>
          <Typography
            sx={{ fontSize: "1em", fontWeight: "600", lineHeight: "1.5" }}
          >
            Frontend Developer
          </Typography>
        </div>
        <div>
          {temp === "third" && <Divider sx={{ my: 1 }} />}
          <Box sx={temp === "third" ? Temp3MainBox : {}}>
            <Box>
              <Typography
                sx={
                  temp === "third"
                    ? Temp3Style
                    : temp === "second"
                    ? Temp2Style
                    : textStyle
                }
              >
                n@gmail.com
              </Typography>
              <Typography
                sx={
                  temp === "third"
                    ? Temp3Style
                    : temp === "second"
                    ? Temp2Style
                    : textStyle
                }
              >
                +92 331-3933467
              </Typography>
              <Typography
                sx={
                  temp === "third"
                    ? Temp3Style
                    : temp === "second"
                    ? Temp2Style
                    : textStyle
                }
              >
                Sana Heights Sector 14-B Shadman Town
              </Typography>
            </Box>
            <Box sx={temp === "third" ? Temp3InnerBox : {}}>
              <Typography
                sx={
                  temp === "third"
                    ? Temp3Style
                    : temp === "second"
                    ? Temp2Style
                    : textStyle
                }
              >
                https://www.linkedin.com/feed/
              </Typography>
              <Typography
                sx={
                  temp === "third"
                    ? Temp3Style
                    : temp === "second"
                    ? Temp2Style
                    : textStyle
                }
              >
                https://github.com/
              </Typography>
            </Box>
          </Box>
        </div>
      </Box>
    </>
  );
}
