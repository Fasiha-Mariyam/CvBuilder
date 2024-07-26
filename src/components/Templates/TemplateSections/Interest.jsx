/* eslint-disable react/prop-types */
import { Box, Divider, Typography } from "@mui/material";
import InterestsIcon from "@mui/icons-material/Interests";
import React from "react";

export default function Interest({
  formValues,
  temp,
  fontFamily,
  secondaryColor,
  primaryColor,
  fontSize,
}) {
  const Interests = ["Reading", "Learning", "Traveling", "Coding"];
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
    color: secondaryColor ? secondaryColor : "",
    fontFamily: fontFamily,
    gap: 1,
  };
  return (
    <>
      <Box>
        {!temp && <Divider sx={{ my: 1 }} />}
        <Typography
          sx={
            temp === "sixth"
              ? temp6style
              : {
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
                  mt: temp === "eighth" ? 3 : -1,
                  ml: temp == "fifth" || (temp === "eighth" && 2.5),
                  fontFamily: fontFamily,
                  gap: temp === "eighth" && 1,
                  my: 1,
                  border: temp === "seventh" && "1px solid rgb(4 50 128)",
                  borderRadius: temp === "seventh" && "50px",
                  background: temp === "seventh" && "rgb(4 50 128)",
                  px: temp === "seventh" && 5,
                  mb: temp === "seventh" && 2,
                  textAlign: temp === "fourth" && "center",
                  color: secondaryColor
                    ? secondaryColor
                    : temp === "fourth"
                    ? "white"
                    : temp === "fifth"
                    ? "rgb(19 71 119)"
                    : temp === "seventh"
                    ? "white"
                    : temp === "eighth"
                    ? "rgb(0 35 43)"
                    : "",
                  display:
                    temp === "seventh"
                      ? "inline-block"
                      : temp === "eighth"
                      ? "flex"
                      : "",
                }
          }
        >
          {(temp === "sixth" || temp === "eighth") && <InterestsIcon />}{" "}
          {temp === "seventh" ? `Interests` : `INTERESTS`}
        </Typography>

        {temp !== "fourth" && temp !== "sixth" && (
          <>
            {" "}
            <Divider sx={{ mb: 1 }} />
            {(formValues.Interests ? formValues.Interests : Interests).map(
              (Interest, index) => (
                <Box
                  key={index}
                  sx={{
                    display: temp == "fifth" ? "flex" : "inline-flex",
                    alignItems: "center",
                    color: temp == "fifth" ? "white" : "rgba(83, 97, 103, 1)",
                    border: "1px solid rgba(217, 217, 217, 0.85)",
                    borderRadius: temp == "fifth" ? "10px" : "17px",
                    background: temp == "fifth" && "rgb(19 71 119)",
                    padding: ".5rem",
                    fontFamily: fontFamily,
                    mb: 0.5,
                    ml: temp === "eighth" && 2.5,
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
                  <Typography sx={{fontSize:
                      fontSize == 2
                        ? "12px"
                        : fontSize == 0
                        ? "8px"
                        : fontSize == 1
                        ? "9px"
                        : "15px", fontFamily: fontFamily }}>
                    {Interest}
                  </Typography>
                </Box>
              )
            )}
          </>
        )}
        {(temp === "fourth" || temp === "sixth") && (
          <>
            {(formValues.Interests ? formValues.Interests : Interests).map(
              (Interest, index) => (
                <ul key={index}>
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
                        : temp === "sixth"
                        ? "rgba(83, 97, 103, 1)"
                        : "white",
                    }}
                  >
                    {Interest}
                  </li>
                </ul>
              )
            )}
          </>
        )}
      </Box>
    </>
  );
}
