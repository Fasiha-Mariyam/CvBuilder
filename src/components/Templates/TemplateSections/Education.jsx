/* eslint-disable react/prop-types */
import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const Temp6Style = {
  color: "white",
  background: "rgb(52 52 52)",
  borderTopLeftRadius: "50%",
  borderTopRightRadius: "50%",
  p: 5,
};
export default function Education({ formValues, temp }) {
  return (
    <>
      {temp !== "sixth" && (
        <Box>
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
            {`EDUCATION`}
          </Typography>
          <Divider
            sx={{
              mb: 1,
              background: (temp == "fourth" || temp == "fifth") && "black",
            }}
          />
          {/* Field and date */}
          {temp !== "fourth" && temp !== "fifth" && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: ".9em", fontWeight: "600" }}>
                  {formValues.Degree ? formValues.Degree : `BS`} ,
                  {formValues.Field ? formValues.Field : `CS`}
                </Typography>
                <Typography sx={{ fontSize: ".7em", fontWeight: "600" }}>
                  {formValues.startDateOfSchool
                    ? formValues.startDateOfSchool
                    : `03`}
                  /
                  {formValues.startYearOfSchool
                    ? formValues.startYearOfSchool
                    : ` 2021`}{" "}
                  -{" "}
                  {formValues.endDateOfSchool &&
                  formValues.endDateOfSchool === "Present" ? (
                    `Present`
                  ) : (
                    <>
                      {formValues.endDateOfSchool
                        ? formValues.endDateOfSchool
                        : `03`}
                      /
                      {formValues.endYearOfSchool
                        ? formValues.endYearOfSchool
                        : `2021`}
                    </>
                  )}
                </Typography>
              </div>
              {/* school name and Grade */}
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {formValues.Institute ? formValues.Institute : `Dawood Uni`}
                <div
                  style={{
                    width: "5px",
                    background: "black",
                    height: "5px",
                    borderRadius: "50px",
                  }}
                />
                {formValues.Grade ? formValues.Grade : `A+`}
              </Typography>
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
                  {formValues.Degree ? formValues.Degree : `BS`},
                  {formValues.Field ? formValues.Field : `CS`},
                  {formValues.Institute ? formValues.Institute : `Dawood Uni`},
                  {formValues.Grade ? formValues.Grade : `A+`}
                </Typography>
                <Typography
                  sx={{ fontSize: ".7em", fontWeight: "500", color: "black" }}
                >
                  {formValues.startDateOfSchool
                    ? formValues.startDateOfSchool
                    : `03`}
                  /
                  {formValues.startYearOfSchool
                    ? formValues.startYearOfSchool
                    : ` 2021`}{" "}
                  -{" "}
                  {formValues.endDateOfSchool &&
                  formValues.endDateOfSchool === "Present" ? (
                    `Present`
                  ) : (
                    <>
                      {formValues.endDateOfSchool
                        ? formValues.endDateOfSchool
                        : `03`}
                      /
                      {formValues.endYearOfSchool
                        ? formValues.endYearOfSchool
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
                  {formValues.Degree ? formValues.Degree : `BS`} in
                  {formValues.Field ? formValues.Field : ` Computer Science`}
                </Typography>
                <Typography>
                  {formValues.Institute
                    ? formValues.Institute
                    : `Dawood University`}
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
                    {formValues.startDateOfSchool
                      ? formValues.startDateOfSchool
                      : `03`}
                    /
                    {formValues.startYearOfSchool
                      ? formValues.startYearOfSchool
                      : ` 2021`}{" "}
                    -{" "}
                    {formValues.endDateOfSchool &&
                    formValues.endDateOfSchool === "Present" ? (
                      `Present`
                    ) : (
                      <>
                        {formValues.endDateOfSchool
                          ? formValues.endDateOfSchool
                          : `03`}
                        /
                        {formValues.endYearOfSchool
                          ? formValues.endYearOfSchool
                          : `2021`}
                      </>
                    )}
                  </Typography>
                  <Typography sx={{ fontSize: ".7em", fontWeight: "500" }}>
                    {formValues.Grade ? formValues.Grade : `A+`}
                  </Typography>
                </Box>
              </div>
            </>
          )}
          {/* Details of working Education */}
          <Typography sx={{ fontSize: "10px" }}>
            {formValues.DescriptionOfSchool
              ? formValues.DescriptionOfSchool
              : `Developed and maintained responsive web applications using React and
          Material-UI, Collaborated with designers and backend developers to
          enhance user Education, Implemented best practices in coding
          standards, testing, and optimization,Improved website performance,
          resulting in a 20% increase in user engagement.`}
          </Typography>
        </Box>
      )}

      {temp === "sixth" && (
        <Box sx={Temp6Style}>
          <Typography
            sx={{
              fontSize: "1.2em",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            {`EDUCATION`}
          </Typography>
          <Divider
            sx={{
              mb: 1,
            }}
          />
          {/* Field and date */}
          {
            <>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: ".9em",
                    fontWeight: "500",
                    color: "rgb(190 186 186)",
                  }}
                >
                  {formValues.Degree ? formValues.Degree : `BS`} in
                  {formValues.Field ? formValues.Field : ` Computer Science`}
                </Typography>
                <Typography>
                  {formValues.Institute
                    ? formValues.Institute
                    : `Dawood University`}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontStyle: "italic",
                    color: "rgb(190 186 186)",
                  }}
                >
                  <Typography sx={{ fontSize: ".7em", fontWeight: "500" }}>
                    {formValues.startDateOfSchool
                      ? formValues.startDateOfSchool
                      : `03`}
                    /
                    {formValues.startYearOfSchool
                      ? formValues.startYearOfSchool
                      : ` 2021`}{" "}
                    -{" "}
                    {formValues.endDateOfSchool &&
                    formValues.endDateOfSchool === "Present" ? (
                      `Present`
                    ) : (
                      <>
                        {formValues.endDateOfSchool
                          ? formValues.endDateOfSchool
                          : `03`}
                        /
                        {formValues.endYearOfSchool
                          ? formValues.endYearOfSchool
                          : `2021`}
                      </>
                    )}
                  </Typography>
                  <Typography sx={{ fontSize: ".7em", fontWeight: "500" }}>
                    {formValues.Grade ? formValues.Grade : `A+`}
                  </Typography>
                </Box>
              </div>
            </>
          }
          {/* Details of working Education */}
          <Typography sx={{ fontSize: "10px" }}>
            {formValues.DescriptionOfSchool
              ? formValues.DescriptionOfSchool
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
