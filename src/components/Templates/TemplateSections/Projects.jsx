/* eslint-disable react/prop-types */
import { Box, colors, Divider, Typography } from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import React from "react";

export default function Projects({
  temp,
  formValues,
  fontFamily,
  primaryColor,
  secondaryColor,
  fontSize,
}) {
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
    fontFamily: fontFamily,
    color: secondaryColor ? secondaryColor : "",
    display: "flex",
    gap: 1,
  };
  const projects = {};
  Object.keys(formValues).forEach((key) => {
    let match = key.match(/^(project\d+)_/);
    if (match) {
      const prefix = match[1];
      if (!projects[prefix]) {
        projects[prefix] = {};
      }
      projects[prefix][key.replace(`${prefix}_`, "")] = formValues[key];
    }
  });
  console.log("projectTemp", projects);
  return (
    <>
      {temp !== "sixth" && (
        <Box>
          {!temp && <Divider sx={{ my: 1 }} />}
          <Typography
            sx={{
              fontSize:
                fontSize == 2
                  ? "1.2em"
                  : fontSize == 0
                  ? "0.8em"
                  : fontSize == 1
                  ? "1em"
                  : "2em",
              fontWeight: "600",
              mt:
                (temp == "fourth" || temp == "fifth" || temp == "eighth") && 2,
              ml: temp === "eighth" && 2.5,
              border: temp === "seventh" && "1px solid rgb(4 50 128)",
              borderRadius: temp === "seventh" && "50px",
              background: temp === "seventh" && "rgb(4 50 128)",
              px: temp === "seventh" && 5,
              fontFamily: fontFamily,
              mb: temp === "seventh" && 2,
              gap: temp === "eighth" && 1,
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
            }}
          >
            {temp === "eighth" && <AccountTreeIcon />}{" "}
            {temp === "seventh" ? `Projects` : `PROJECTS`}
          </Typography>

          {temp !== "seventh" && (
            <Divider
              sx={{
                mb: 1,
                background: (temp == "fourth" || temp == "fifth") && "black",
              }}
            />
          )}
          {/* Project Name and date */}
          {temp !== "fourth" && temp !== "fifth" && temp !== "eighth" && (
            <>
              {Object.keys(projects).map((projectKey, index) => {
                const project = projects[projectKey];
                return (
                  <div key={index}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize:
                            fontSize == 2
                              ? "1em"
                              : fontSize == 0
                              ? "0.8em"
                              : fontSize == 1
                              ? ".9em"
                              : "1.5em",
                          fontWeight: "600",
                          fontFamily: fontFamily,
                          color: primaryColor ? primaryColor : "",
                        }}
                      >
                        {project.name
                          ? project.name
                          : `FoodPanda Website Clone`}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize:
                            fontSize == 2
                              ? ".7em"
                              : fontSize == 0
                              ? "0.5em"
                              : fontSize == 1
                              ? ".6em"
                              : "1em",
                          fontWeight: "600",
                          fontFamily: fontFamily,
                        }}
                      >
                        {project.startDateOfProject
                          ? project.startDateOfProject
                          : `03`}
                        /
                        {project.startYearOfProject
                          ? project.startYearOfProject
                          : ` 2021`}{" "}
                        -{" "}
                        {project.endDateOfProject &&
                        project.endDateOfProject === "Present" ? (
                          `Present`
                        ) : (
                          <>
                            {project.endDateOfProject
                              ? project.endDateOfProject
                              : `03`}
                            /
                            {project.endYearOfProject
                              ? project.endYearOfProject
                              : `2021`}
                          </>
                        )}
                      </Typography>
                    </div>
                    <Typography
                      sx={{
                        fontSize:
                          fontSize == 2
                            ? "10px"
                            : fontSize == 0
                            ? "6px"
                            : fontSize == 1
                            ? "8px"
                            : "15px",
                        mb: 2,
                        fontFamily: fontFamily,
                        ml: temp === "eighth" && 2.5,
                      }}
                    >
                      {project?.projectDescription
                        ? project?.projectDescription
                        : `Developed and maintained responsive web applications using React and
          Material-UI, Collaborated with designers and backend developers to
          enhance user Education, Implemented best practices in coding
          standards, testing, and optimization,Improved website performance,
          resulting in a 20% increase in user engagement.`}
                    </Typography>
                  </div>
                );
              })}
            </>
          )}
          {temp === "fourth" && (
            <>
              {Object.keys(projects).map((projectKey, index) => {
                const project = projects[projectKey];
                return (
                  <div key={index}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontSize:
                            fontSize == 2
                              ? "1em"
                              : fontSize == 0
                              ? "0.7em"
                              : fontSize == 1
                              ? "0.8em"
                              : "1.5em",
                          fontFamily: fontFamily,
                          fontWeight: "500",
                          color: primaryColor ? primaryColor : "rgb(30 55 99)",
                        }}
                      >
                        {project.name
                          ? project.name
                          : `FoodPanda Website Clone`}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize:
                            fontSize == 2
                              ? ".7em"
                              : fontSize == 0
                              ? "0.5em"
                              : fontSize == 1
                              ? ".6em"
                              : "1em",
                          fontWeight: "500",
                          color: "black",
                          fontFamily: fontFamily,
                        }}
                      >
                        {project.startDateOfProject
                          ? project.startDateOfProject
                          : `03`}
                        /
                        {project.startYearOfProject
                          ? project.startYearOfProject
                          : ` 2021`}{" "}
                        -{" "}
                        {project.endDateOfProject &&
                        project.endDateOfProject === "Present" ? (
                          `Present`
                        ) : (
                          <>
                            {project.endDateOfProject
                              ? project.endDateOfProject
                              : `03`}
                            /
                            {project.endYearOfProject
                              ? project.endYearOfProject
                              : `2021`}
                          </>
                        )}
                      </Typography>
                    </div>
                    {/* Details of working experience */}
                    <Typography
                      sx={{
                        fontSize:
                          fontSize == 2
                            ? "10px"
                            : fontSize == 0
                            ? "7px"
                            : fontSize == 1
                            ? "8px"
                            : "15px",
                        mb: 2,
                        fontFamily: fontFamily,
                        ml: temp === "eighth" && 2.5,
                      }}
                    >
                      {project?.projectDescription
                        ? project?.projectDescription
                        : `Developed and maintained responsive web applications using React and
          Material-UI, Collaborated with designers and backend developers to
          enhance user Education, Implemented best practices in coding
          standards, testing, and optimization,Improved website performance,
          resulting in a 20% increase in user engagement.`}
                    </Typography>
                  </div>
                );
              })}
            </>
          )}
          {(temp === "fifth" || temp === "eighth") && (
            <>
              {Object.keys(projects).map((projectKey, index) => {
                const project = projects[projectKey];
                return (
                  <div key={index}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontSize:
                            fontSize == 2
                              ? "1em"
                              : fontSize == 0
                              ? "0.7em"
                              : fontSize == 1
                              ? "0.8em"
                              : "1.5em",
                          fontWeight: "500",
                          fontFamily: fontFamily,
                          ml: temp === "eighth" && 2.5,
                          color: primaryColor ? primaryColor : "rgb(19 71 119)",
                        }}
                      >
                        {project.name
                          ? project.name
                          : `FoodPanda Website Clone`}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          ml: temp === "eighth" && 2.5,
                          alignItems: "center",
                          fontFamily: fontFamily,
                          fontStyle: "italic",
                          color: "rgb(19 71 119)",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize:
                              fontSize == 2
                                ? ".7em"
                                : fontSize == 0
                                ? "0.5em"
                                : fontSize == 1
                                ? ".6em"
                                : "1em",
                            fontWeight: "500",
                            fontFamily: fontFamily,
                          }}
                        >
                          {project.startDateOfProject
                            ? project.startDateOfProject
                            : `03`}
                          /
                          {project.startYearOfProject
                            ? project.startYearOfProject
                            : ` 2021`}{" "}
                          -{" "}
                          {project.endDateOfProject &&
                          project.endDateOfProject === "Present" ? (
                            `Present`
                          ) : (
                            <>
                              {project.endDateOfProject
                                ? project.endDateOfProject
                                : `03`}
                              /
                              {project.endYearOfProject
                                ? project.endYearOfProject
                                : `2021`}
                            </>
                          )}
                        </Typography>
                      </Box>
                    </div>
                    {/* Details of working experience */}
                    <Typography
                      sx={{
                        fontSize:
                          fontSize == 2
                            ? "10px"
                            : fontSize == 0
                            ? "7px"
                            : fontSize == 1
                            ? "8px"
                            : "15px",
                        mb: 2,
                        fontFamily: fontFamily,
                        ml: temp === "eighth" && 2.5,
                      }}
                    >
                      {project?.projectDescription
                        ? project?.projectDescription
                        : `Developed and maintained responsive web applications using React and
          Material-UI, Collaborated with designers and backend developers to
          enhance user Education, Implemented best practices in coding
          standards, testing, and optimization,Improved website performance,
          resulting in a 20% increase in user engagement.`}
                    </Typography>
                  </div>
                );
              })}
            </>
          )}
        </Box>
      )}
      {temp === "sixth" && (
        <Box>
          <Typography sx={temp6style}>
            <AccountTreeIcon /> PROJECTS
          </Typography>
          <Divider
            sx={{
              mb: 1,
            }}
          />
          {/* Project Name and date */}{" "}
          {Object.keys(projects).map((projectKey, index) => {
            const project = projects[projectKey];
            return (
              <div key={index}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    sx={{
                      fontSize:
                        fontSize == 2
                          ? "1em"
                          : fontSize == 0
                          ? "0.7em"
                          : fontSize == 1
                          ? "0.8em"
                          : "1.5em",
                      fontWeight: "600",
                      fontFamily: fontFamily,
                      color: primaryColor ? primaryColor : "",
                    }}
                  >
                    {project.name ? project.name : `FoodPanda Website Clone`}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize:
                        fontSize == 2
                          ? ".7em"
                          : fontSize == 0
                          ? "0.5em"
                          : fontSize == 1
                          ? ".6em"
                          : "1em",
                      fontWeight: "600",
                      fontFamily: fontFamily,
                    }}
                  >
                    {project.startDateOfProject
                      ? project.startDateOfProject
                      : `03`}
                    /
                    {project.startYearOfProject
                      ? project.startYearOfProject
                      : ` 2021`}{" "}
                    -{" "}
                    {project.endDateOfProject &&
                    project.endDateOfProject === "Present" ? (
                      `Present`
                    ) : (
                      <>
                        {project.endDateOfProject
                          ? project.endDateOfProject
                          : `03`}
                        /
                        {project.endYearOfProject
                          ? project.endYearOfProject
                          : `2021`}
                      </>
                    )}
                  </Typography>
                </div>
                {/* Details of working experience */}
                <Typography
                  sx={{
                    fontSize:
                      fontSize == 2
                        ? "10px"
                        : fontSize == 0
                        ? "6px"
                        : fontSize == 1
                        ? "8px"
                        : "15px",
                    mb: 3,
                    fontFamily: fontFamily,
                  }}
                >
                  {project?.projectDescription
                    ? project?.projectDescription
                    : `Developed and maintained responsive web applications using React and
          Material-UI, Collaborated with designers and backend developers to
          enhance user Education, Implemented best practices in coding
          standards, testing, and optimization,Improved website performance,
          resulting in a 20% increase in user engagement.`}
                </Typography>
              </div>
            );
          })}
        </Box>
      )}
    </>
  );
}
