/* eslint-disable react/prop-types */
import { Box, colors, Divider, Typography } from "@mui/material";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import React from "react";

export default function Skill({
  temp,
  formValues,
  fontFamily,
  secondaryColor,
  primaryColor,
  fontSize,
}) {
  const skills = ["JavaScript", "React", "Node.js", "HTML", "CSS"];
  const temp6style = {
    fontSize:
      fontSize == 2
        ? "1.2em"
        : fontSize == 0
        ? "0.8em"
        : fontSize == 1
        ? "1em"
        : "2em",
    fontWeight: "600",
    display: "flex",
    color: secondaryColor ? secondaryColor : "black",
    fontFamily: fontFamily,
    gap: 1,
  };
  return (
    <>
      {temp !== "sixth" && (
        <Box>
          {!temp && <Divider sx={{ my: 1 }} />}
          <Typography
            sx={{
              fontSize:
                fontSize == 2
                  ? temp === "fourth"
                    ? "20px"
                    : "1.2em"
                  : fontSize == 0
                  ? temp === "fourth"
                    ? "10px"
                    : ".9em"
                  : fontSize == 1
                  ? temp === "fourth"
                    ? "15px"
                    : "1em"
                  : temp === "fourth"
                  ? "25px"
                  : "2em",
              fontWeight: "600",
              fontFamily: fontFamily,
              border: temp === "seventh" && "1px solid rgb(4 118 188)",
              borderRadius: temp === "seventh" && "50px",
              mt: temp !== "seventh" || (temp !== "eighth" && -1),
              ml: (temp == "fifth" || temp === "eighth") && 2.5,
              display: temp === "eighth" && "flex",
              gap: temp === "eighth" && 1,
              textAlign: (temp === "fourth" || temp === "seventh") && "center",
              color: secondaryColor
                ? secondaryColor
                : temp == "fourth"
                ? "white"
                : temp == "fifth"
                ? "rgb(35 72 116 / 87%)"
                : temp === "seventh"
                ? "rgba(131, 131, 131, 1)"
                : temp === "eighth"
                ? "rgb(0 35 43)"
                : "",
            }}
          >
            {temp === "eighth" && <SportsBasketballIcon />}
            {temp === "seventh" ? `Expertise` : `SKILLS`}
          </Typography>

          {temp !== "fourth" && temp !== "seventh" && (
            <>
              {" "}
              <Divider sx={{ mb: 1 }} />
              {(formValues?.skills ? formValues?.skills : skills).map(
                (skill, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: temp == "fifth" ? "flex" : "inline-flex",
                      alignItems: "center",
                      fontFamily: fontFamily,
                      color: temp == "fifth" ? "white" : "rgba(83, 97, 103, 1)",
                      border: "1px solid rgba(217, 217, 217, 0.85)",
                      borderRadius: temp == "fifth" ? "10px" : "17px",
                      background: temp == "fifth" && "rgb(19 71 119)",
                      padding: ".5rem",
                      ml: temp === "eighth" && 2.5,
                      mb: 0.5,
                      cursor: "pointer",
                      fontSize:
                        fontSize == 2
                          ? "10px"
                          : fontSize == 0
                          ? "8px"
                          : fontSize == 1
                          ? "9px"
                          : "15px",
                      marginRight: "8px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize:
                          fontSize == 2
                            ? "12px"
                            : fontSize == 0
                            ? "8px"
                            : fontSize == 1
                            ? "10px"
                            : "20px",
                        fontFamily: fontFamily,
                      }}
                    >
                      {skill}
                    </Typography>
                  </Box>
                )
              )}
            </>
          )}
          {(temp === "fourth" || temp === "seventh") && (
            <>
              {(formValues?.skills ? formValues?.skills : skills).map(
                (skill, index) => (
                  <ul key={index} style={{ fontFamily: fontFamily }}>
                    <li
                      style={{
                        fontSize:
                          fontSize == 2
                            ? "12px"
                            : fontSize == 0
                            ? "8px"
                            : fontSize == 1
                            ? "10px"
                            : "20px",
                        fontFamily: fontFamily,
                        color: primaryColor
                          ? primaryColor
                          : temp === "seventh"
                          ? "rgba(131, 131, 131, 1)"
                          : "white",
                      }}
                    >
                      {skill}
                    </li>
                  </ul>
                )
              )}
            </>
          )}
        </Box>
      )}
      {temp === "sixth" && (
        <Box sx={{ mb: 3 }}>
          <Typography sx={temp6style}>
            <SportsBasketballIcon /> SKILLS
          </Typography>
          <Divider sx={{ mb: 1 }} />
          {(formValues?.skills ? formValues?.skills : skills).map(
            (skill, index) => (
              <Box
                key={index}
                sx={{
                  display: temp == "fifth" ? "flex" : "inline-flex",
                  alignItems: "center",
                  fontFamily: fontFamily,
                  color: temp == "fifth" ? "white" : "rgba(83, 97, 103, 1)",
                  border: "1px solid rgba(217, 217, 217, 0.85)",
                  borderRadius: temp == "fifth" ? "10px" : "17px",
                  background: temp == "fifth" && "rgb(19 71 119)",
                  padding: ".5rem",
                  mb: 0.5,
                  cursor: "pointer",
                  fontSize:
                    fontSize == 2
                      ? "10px"
                      : fontSize == 0
                      ? "8px"
                      : fontSize == 1
                      ? "9px"
                      : "15px",
                  marginRight: "8px",
                }}
              >
                <Typography
                  sx={{
                    fontSize:
                      fontSize == 2
                        ? "12px"
                        : fontSize == 0
                        ? "8px"
                        : fontSize == 1
                        ? "10px"
                        : "20px",
                    fontFamily: fontFamily,
                  }}
                >
                  {skill}
                </Typography>
              </Box>
            )
          )}
        </Box>
      )}
    </>
  );
}
