/* eslint-disable react/prop-types */
import { Box, Divider, Typography } from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import React from "react";

export default function Courses({
  formValues,
  temp,
  fontFamily,
  secondaryColor,
  primaryColor,
  fontSize,
}) {
  const Courses = [
    {
      title: "Intro to Python",
      description:
        "An introductory course on Python programming, covering basic concepts and syntax. Offered by DataCamp.",
    },
    {
      title: "Advanced React",
      description:
        "An advanced course focusing on complex React patterns and state management. Offered by Udemy.",
    },
    {
      title: "Machine Learning",
      description:
        "A comprehensive course on machine learning algorithms and applications. Offered by Coursera.",
    },
    {
      title: "Data Visualization",
      description:
        "A course on techniques for visualizing data effectively using various tools. Offered by edX.",
    },
  ];

  const groupedCourses = [];
  const coursesList = formValues.Courses ? formValues.Courses : Courses;

  // Group courses into pairs
  for (let i = 0; i < coursesList.length; i += 2) {
    groupedCourses.push(coursesList.slice(i, i + 2));
  }

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
          {(temp === "sixth" || temp === "eighth") && <LocalLibraryIcon />}{" "}
          {temp === "seventh" ? `Courses` : `COURSES`}
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
            {groupedCourses.map((coursePair, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color:
                    temp == "fifth"
                      ? "rgba(83, 97, 103, 1)"
                      : "rgba(83, 97, 103, 1)",
                  // background: temp == "fifth" && "rgb(19 71 119)",
                  padding: ".5rem",
                  fontFamily: fontFamily,
                  mb: 0.5,
                  ml: temp === "eighth" && 2.5,
                  marginRight: "8px",
                }}
              >
                {coursePair.map((course, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mx: 2,
                      mr: 5,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize:
                            fontSize == 2
                              ? "16px"
                              : fontSize == 0
                              ? "10px"
                              : fontSize == 1
                              ? "12px"
                              : "20px",
                          fontFamily: fontFamily,
                        }}
                      >
                        {course.title}
                        <Typography
                          sx={{
                            fontSize:
                              fontSize == 2
                                ? "12px"
                                : fontSize == 0
                                ? "5px"
                                : fontSize == 1
                                ? "6px"
                                : "15px",
                          }}
                        >
                          {course.description}
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            ))}
          </>
        )}

        {(temp === "fourth" || temp === "sixth") && (
          <>
          <Divider sx={{ mb: 1 , background:temp === "fourth" && "black" }} />
            {(formValues.Courses ? formValues.Courses : Courses).map(
              (course, index) => (
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
                            ? "15px"
                            : fontSize == 0
                            ? "8px"
                            : fontSize == 1
                            ? "9px"
                            : "20px",
                        fontFamily: fontFamily,
                      }}
                    >
                      {course.title}
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
                        }}
                      >
                        {course.description}
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
