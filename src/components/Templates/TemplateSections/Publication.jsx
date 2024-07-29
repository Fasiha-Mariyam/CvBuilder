/* eslint-disable react/prop-types */
import React from "react";
import { Box, Divider, Typography, LinearProgress } from "@mui/material";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import { useSelector } from "react-redux";

export default function Publication({
  formValues,
  temp,
  fontFamily,
  secondaryColor,
  primaryColor,
  fontSize,
}) {
  const Publication = useSelector((state) => state.form.formData?.publications);

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

                  color: secondaryColor
                    ? secondaryColor
                    : temp === "fourth"
                    ? "rgb(30 55 99)"
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
          {(temp === "sixth" || temp === "eighth") && <InterpreterModeIcon />}{" "}
          {temp === "seventh" ? `Publication` : `PUBLICATIONS `}
        </Typography>

        {temp !== "fourth" && temp !== "sixth" && (
          <>
            {" "}
            <Divider
              sx={{
                mb: 1,
                background: (temp == "fourth" || temp == "fifth") && "black",
              }}
            />
            {(formValues?.Publication || Publication || []).length > 0 &&
              (formValues?.Publication || Publication || []).map(
                (publication, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: temp === "fifth" ? "flex" : "inline-flex",
                      alignItems: "center",
                      color: "rgba(83, 97, 103, 1)",
                      padding: ".5rem",
                      fontFamily: fontFamily,
                      width: "calc(33.333% - 16px)",
                      mb: 0.5,
                      ml: temp === "eighth" ? 2.5 : 0,
                      marginRight: "8px",
                    }}
                  >
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography
                        sx={{
                          fontSize:
                            fontSize === 2
                              ? "15px"
                              : fontSize === 0
                              ? "8px"
                              : fontSize === 1
                              ? "10px"
                              : "20px",
                          fontFamily: fontFamily,
                        }}
                      >
                        {publication.title}
                      </Typography>
                      <Box>
                        <Typography
                          sx={{
                            fontSize:
                              fontSize === 2
                                ? "12px"
                                : fontSize === 0
                                ? "6px"
                                : fontSize === 1
                                ? "7px"
                                : "15px",
                          }}
                        >
                          {publication.date}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )
              )}
          </>
        )}
        {(temp === "fourth" || temp === "sixth") && (
          <>
            <Divider
              sx={{
                mb: 1,
                background: (temp == "fourth" || temp == "fifth") && "black",
              }}
            />
            {(formValues?.Publication || Publication || []).length > 0 &&
              (formValues?.Publication || Publication || []).map(
                (publication, index) => (
                  <ul key={index}>
                    <li
                      style={{
                        fontFamily: fontFamily,
                        color: primaryColor
                          ? primaryColor
                          : temp === "sixth"
                          ? "rgba(83, 97, 103, 1)"
                          : "rgba(83, 97, 103, 1)",
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
                              ? "9px"
                              : "15px",
                          fontFamily: fontFamily,
                        }}
                      >
                        {publication.title}
                        <Typography
                          sx={{
                            fontSize:
                              fontSize == 2
                                ? "10px"
                                : fontSize == 0
                                ? "5px"
                                : fontSize == 1
                                ? "6px"
                                : "10px",
                          }}
                        >
                          {publication.date}
                        </Typography>
                      </Typography>
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
