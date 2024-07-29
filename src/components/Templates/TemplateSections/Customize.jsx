/* eslint-disable react/prop-types */
import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import { useSelector } from "react-redux";

export default function Customize({
  formValues,
  temp,
  fontFamily,
  secondaryColor,
  primaryColor,
  fontSize,
}) {
  const CustomizeData = useSelector((state) => state.form.formData?.sections);
  const temp6style = {
    fontSize:
      fontSize === 2
        ? "1.2em"
        : fontSize === 0
        ? "0.8em"
        : fontSize === 1
        ? "1em"
        : "2em",
    fontWeight: "600",
    display: "flex",
    color: secondaryColor || "",
    fontFamily: fontFamily,
    gap: 1,
  };

  return (
    <>
      <Box>
        {!temp && <Divider sx={{ my: 1 }} />}
        {(formValues?.sections || CustomizeData || []).length > 0 &&
              (formValues?.sections || CustomizeData || []).map((section, sectionIndex) => (
          <Box key={sectionIndex}>
            <Typography
              sx={
                temp === "sixth"
                  ? temp6style
                  : {
                      fontSize:
                        fontSize === 2
                          ? temp === "fourth"
                            ? "20px"
                            : "1.2em"
                          : fontSize === 0
                          ? temp === "fourth"
                            ? "10px"
                            : ".9em"
                          : fontSize === 1
                          ? temp === "fourth"
                            ? "15px"
                            : "1em"
                          : temp === "fourth"
                          ? "25px"
                          : "2em",
                      fontWeight: "600",
                      mt: temp === "eighth" ? 3 : -1,
                      ml: temp === "fifth" || (temp === "eighth" && 2.5),
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
              {(temp === "sixth" || temp === "eighth") && (
                <InterpreterModeIcon />
              )}{" "}
              {section.name.toUpperCase()}
            </Typography>
            <Divider sx={{ mb: 1,  background:temp === "fourth" && "black "}} />
            {section.fields.map((field, index) => (
              <Box
                key={index}
                sx={{
                  display: temp === "fifth" ? "flex" : "inline-flex",
                  alignItems: "center",
                  color: temp === "fifth" ? "rgba(83, 97, 103, 1)" : "rgba(83, 97, 103, 1)",
                  padding: ".5rem",
                  fontFamily: fontFamily,
                  width: "calc(33.333% - 16px)",
                  mb: 0.5,
                  ml: temp === "eighth" && 2.5,
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
                      fontWeight: "bold",
                    }}
                  >
                    {field.title}
                  </Typography>
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
                    {field.description}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "black",
                      fontSize:
                        fontSize === 2
                          ? "10px"
                          : fontSize === 0
                          ? "5px"
                          : fontSize === 1
                          ? "6px"
                          : "10px",
                    }}
                  >
                    {field.date}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </>
  );
}
