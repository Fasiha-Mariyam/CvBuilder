/* eslint-disable react/prop-types */
import { Box, Divider, Typography, LinearProgress } from "@mui/material";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import React from "react";
import { useSelector } from "react-redux";

export default function TechnicalSkills({
  formValues,
  temp,
  fontFamily,
  secondaryColor,
  primaryColor,
  fontSize,
}) {
  const TechnicalSkills = useSelector((state) => state.form.formData?.technicalSkills);
 
  const getProgressBarColor = (proficiency) => {
    switch (proficiency) {
      case 'Advanced':
        return 'rgb(76, 175, 80)'; // Green for advanced
      case 'Intermediate':
        return 'rgb(33, 150, 243)'; // Blue for intermediate
      case 'Expert':
        return 'rgb(255, 87, 34)'; // Orange for expert
      case 'Specialist':
        return 'rgb(255, 193, 7)'; // Yellow for specialist
      case 'Beginner':
        return 'red'; // Yellow for beginner
      default:
        return 'grey'; // Default color if proficiency is not recognized
    }
  };
  
  const getProficiencyValue = (proficiency) => {
    switch (proficiency) {
      case 'Advanced':
        return 70; 
      case 'Intermediate':
        return 50; 
      case 'Expert':
        return 85; 
      case 'Specialist':
        return 95; 
      case 'Beginner':
        return 30; 
      default:
        return 0;
    }
  };

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
                  ml: temp === "eighth" && 2.5,
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
          {temp === "seventh" ? `TechnicalSkills` : `TECHNICAL SKILLS`}
        </Typography>

        { temp !== "sixth" && (
          <>
            {" "}
            <Divider
              sx={{
                mb: 1,
                background: (temp == "fourth" || temp == "fifth") && "black",
              }}
            />
            {(formValues?.TechnicalSkills || TechnicalSkills || []).length > 0 &&
              (formValues?.TechnicalSkills || TechnicalSkills || []).map((TechnicalSkills, index) => (
              <Box
                key={index}
                sx={{
                  display: temp == "fifth" ? "inline-flex" : "inline-flex",
                  alignItems: "center",
                  color:
                    temp == "fifth"
                      ? "rgba(83, 97, 103, 1)"
                      : "rgba(83, 97, 103, 1)",
                  // background: temp == "fifth" && "rgb(19 71 119)",
                  padding: ".5rem",
                  fontFamily: fontFamily,
                  width: "calc(33.333% - 26px)",
                  mb: 0.5,
                  ml: temp === "eighth" && 2.5,
                  marginRight: "8px",
                }}
              >
                <Box display={"flex"} flexDirection={"column"}>
                  <Typography
                    sx={{
                      fontSize:
                        fontSize == 2
                          ? "15px"
                          : fontSize == 0
                          ? "8px"
                          : fontSize == 1
                          ? "10px"
                          : "20px",
                      fontFamily: fontFamily,
                    }}
                  >
                    {TechnicalSkills.name}
                  </Typography>
                  <Box>
                    <Typography
                      sx={{
                        fontSize:
                          fontSize == 2
                            ? "10px"
                            : fontSize == 0
                            ? "6px"
                            : fontSize == 1
                            ? "7px"
                            : "15px",
                      }}
                    >
                      {TechnicalSkills.proficiency}
                    </Typography>
                    <Box sx={{ width: "100%", mt: 0.5 }}>
                      <LinearProgress
                        variant="determinate"
                        value={getProficiencyValue(TechnicalSkills.level)}
                        sx={{
                          height: 8,
                          borderRadius: 5,
                          bgcolor: temp == "fifth" ? "grey" : "black",
                          "& .MuiLinearProgress-bar": {
                            bgcolor:
                              temp == "fifth" ? "rgb(19 71 119)" : getProgressBarColor(TechnicalSkills.level),
                          },
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </>
        )}
        {(temp === "sixth") && (
          <>
           <Divider
              sx={{
                mb: 1,
                background: (temp == "fourth" || temp == "fifth") && "black",
              }}
            />
            {(formValues.TechnicalSkills
              ? formValues.TechnicalSkills
              : TechnicalSkills
            ).map((TechnicalSkills, index) => (
              <ul key={index}>
                <li
                  style={{
                    fontFamily: fontFamily,
                    color: primaryColor
                      ? primaryColor
                      : temp === "sixth"
                      ? "rgba(83, 97, 103, 1)"
                          : "rgba(83, 97, 103, 1)"
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
                    {TechnicalSkills.name}
                    <Typography
                      sx={{
                        fontSize:
                          fontSize == 2
                            ? "8px"
                            : fontSize == 0
                            ? "5px"
                            : fontSize == 1
                            ? "6px"
                            : "10px",
                      }}
                    >
                      {TechnicalSkills.proficiency}
                    </Typography>
                  </Typography>
                </li>
              </ul>
            ))}
          </>
        )}
      </Box>
    </>
  );
}
