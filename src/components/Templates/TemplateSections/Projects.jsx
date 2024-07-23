/* eslint-disable react/prop-types */
import { Box, Divider, Typography } from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import React from "react";

const temp6style = {
  fontSize: "1.2em",
  fontWeight: "600",
  display: "flex",
  gap: 1,

};
export default function Projects({ temp, formValues }) {
  return (
    <>
      {temp !== "sixth" && (
        <Box>
          {!temp && <Divider sx={{ my: 1 }} />}
          <Typography
            sx={{
              fontSize: "1em",
              fontWeight: "600",
              mt: (temp == "fourth" || temp == "fifth") && 1,
              color:
                temp === "fourth"
                  ? "rgb(30 55 99)"
                  : temp === "fifth"
                  ? "rgb(19 71 119)"
                  : "",
            }}
          >
            PROJECTS
          </Typography>

          <Divider
            sx={{
              mb: 1,
              background: (temp == "fourth" || temp == "fifth") && "black",
            }}
          />
          {/* Project Name and date */}
          {temp !== "fourth" && temp !== "fifth" && (
            <>
              {" "}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: ".9em", fontWeight: "600" }}>
                  {formValues.projectName
                    ? formValues.projectName
                    : `FoodPanda Website Clone`}
                </Typography>
                <Typography sx={{ fontSize: ".7em", fontWeight: "600" }}>
                  {formValues.startDateOfProject
                    ? formValues.startDateOfProject
                    : `03`}
                  /
                  {formValues.startYearOfProject
                    ? formValues.startYearOfProject
                    : ` 2021`}{" "}
                  -{" "}
                  {formValues.endDateOfProject &&
                  formValues.endDateOfProject === "Present" ? (
                    `Present`
                  ) : (
                    <>
                      {formValues.endDateOfProject
                        ? formValues.endDateOfProject
                        : `03`}
                      /
                      {formValues.endYearOfProject
                        ? formValues.endYearOfProject
                        : `2021`}
                    </>
                  )}
                </Typography>
              </div>
            </>
          )}
          {temp === "fourth" && (
            <>
              {" "}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: ".9em",
                    fontWeight: "500",
                    color: "rgb(30 55 99)",
                  }}
                >
                  {formValues.projectName
                    ? formValues.projectName
                    : `FoodPanda Website Clone`}
                </Typography>
                <Typography
                  sx={{ fontSize: ".7em", fontWeight: "500", color: "black" }}
                >
                  {formValues.startDateOfProject
                    ? formValues.startDateOfProject
                    : `03`}
                  /
                  {formValues.startYearOfProject
                    ? formValues.startYearOfProject
                    : ` 2021`}{" "}
                  -{" "}
                  {formValues.endDateOfProject &&
                  formValues.endDateOfProject === "Present" ? (
                    `Present`
                  ) : (
                    <>
                      {formValues.endDateOfProject
                        ? formValues.endDateOfProject
                        : `03`}
                      /
                      {formValues.endYearOfProject
                        ? formValues.endYearOfProject
                        : `2021`}
                    </>
                  )}
                </Typography>
              </div>
            </>
          )}
          {temp === "fifth" && (
            <>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: ".9em",
                    fontWeight: "500",
                    color: "rgb(19 71 119)",
                  }}
                >
                  {formValues.projectName
                    ? formValues.projectName
                    : `FoodPanda Website Clone`}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontStyle: "italic",
                    color: "rgb(19 71 119)",
                  }}
                >
                  <Typography sx={{ fontSize: ".7em", fontWeight: "500" }}>
                    {formValues.startDateOfProject
                      ? formValues.startDateOfProject
                      : `03`}
                    /
                    {formValues.startYearOfProject
                      ? formValues.startYearOfProject
                      : ` 2021`}{" "}
                    -{" "}
                    {formValues.endDateOfProject &&
                    formValues.endDateOfProject === "Present" ? (
                      `Present`
                    ) : (
                      <>
                        {formValues.endDateOfProject
                          ? formValues.endDateOfProject
                          : `03`}
                        /
                        {formValues.endYearOfProject
                          ? formValues.endYearOfProject
                          : `2021`}
                      </>
                    )}
                  </Typography>
                </Box>
              </div>
            </>
          )}
          {/* Details of working experience */}
          <Typography sx={{ fontSize: "10px" }}>
            {formValues.ExperienceDescription
              ? formValues.ExperienceDescription
              : `Developed and maintained responsive web applications using React and
          Material-UI, Collaborated with designers and backend developers to
          enhance user Education, Implemented best practices in coding
          standards, testing, and optimization,Improved website performance,
          resulting in a 20% increase in user engagement.`}
          </Typography>
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: ".9em", fontWeight: "600" }}>
              {formValues.projectName
                ? formValues.projectName
                : `FoodPanda Website Clone`}
            </Typography>
            <Typography sx={{ fontSize: ".7em", fontWeight: "600" }}>
              {formValues.startDateOfProject
                ? formValues.startDateOfProject
                : `03`}
              /
              {formValues.startYearOfProject
                ? formValues.startYearOfProject
                : ` 2021`}{" "}
              -{" "}
              {formValues.endDateOfProject &&
              formValues.endDateOfProject === "Present" ? (
                `Present`
              ) : (
                <>
                  {formValues.endDateOfProject
                    ? formValues.endDateOfProject
                    : `03`}
                  /
                  {formValues.endYearOfProject
                    ? formValues.endYearOfProject
                    : `2021`}
                </>
              )}
            </Typography>
          </div>
          {/* Details of working experience */}
          <Typography sx={{ fontSize: "10px",mb:3 }}>
            {formValues.ExperienceDescription
              ? formValues.ExperienceDescription
              : `Developed and maintained responsive web applications using React and
          Material-UI, Collaborated with designers and backend developers to
          enhance user Education, Implemented best practices in coding
          standards, testing, and optimization,Improved website performance,
          resulting in a 20% increase in user engagement.`}
          </Typography>
        </Box>
      )}
    </>
  );
}
