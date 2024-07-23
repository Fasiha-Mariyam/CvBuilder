/* eslint-disable react/prop-types */
import { Box, Divider, Typography } from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import React from "react";

export default function Experience({ formValues, temp }) {
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
            {temp === "fourth"
              ? `PROFESSIONAL EXPERIENCE`
              : temp === "fifth"
              ? `WORK EXPERIENCE`
              : `Experience`}
          </Typography>
          <Divider
            sx={{
              mb: 1,
              background: (temp == "fourth" || temp == "fifth") && "black",
            }}
          />
          {/* position */}
          {temp !== "fourth" && temp !== "fifth" && (
            <>
              
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                
                <Typography sx={{ fontSize: ".9em", fontWeight: "600" }}>
                  {formValues.title ? formValues.title : `Developer`} ,
                  {formValues.Type ? formValues.Type : `Contract`}
                </Typography>
                <Typography sx={{ fontSize: ".7em", fontWeight: "600" }}>
                  {formValues.startDateOfExperience
                    ? formValues.startDateOfExperience
                    : `03`}
                  /
                  {formValues.startYearOfExperience
                    ? formValues.startYearOfExperience
                    : ` 2021`}
                  -
                  {formValues.endDateOfExperience &&
                  formValues.endDateOfExperience === "Present" ? (
                    `Present`
                  ) : (
                    <>
                      {formValues.endDateOfExperience
                        ? formValues.endDateOfExperience
                        : `03`}
                      /
                      {formValues.endYearOfExperience
                        ? formValues.endYearOfExperience
                        : `2021`}
                    </>
                  )}
                </Typography>
              </div>
              {/* Company name and location */}
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {formValues.companyName ? formValues.companyName : `Tezeract`}
                <div
                  style={{
                    width: "5px",
                    background: "black",
                    height: "5px",
                    borderRadius: "50px",
                  }}
                />
                {formValues.location ? formValues.location : `Gulshan`}
              </Typography>
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
            </>
          )}

          {temp === "fourth" && (
            <>
              
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: ".9em",
                    fontWeight: "500",
                    color: "rgb(30 55 99)",
                  }}
                >
                  {formValues.title ? formValues.title : `Developer`},
                  {formValues.Type ? formValues.Type : `Contract`},
                  {formValues.companyName ? formValues.companyName : `Tezeract`}
                  ,{formValues.location ? formValues.location : `Gulshan`}
                </Typography>
                <Typography
                  sx={{ fontSize: ".7em", fontWeight: "500", color: "black" }}
                >
                  {formValues.startDateOfExperience
                    ? formValues.startDateOfExperience
                    : `03`}
                  /
                  {formValues.startYearOfExperience
                    ? formValues.startYearOfExperience
                    : ` 2021`}
                  -
                  {formValues.endDateOfExperience &&
                  formValues.endDateOfExperience === "Present" ? (
                    `Present`
                  ) : (
                    <>
                      {formValues.endDateOfExperience
                        ? formValues.endDateOfExperience
                        : `03`}
                      /
                      {formValues.endYearOfExperience
                        ? formValues.endYearOfExperience
                        : `2021`}
                    </>
                  )}
                </Typography>
              </div>
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
                  {formValues.title ? formValues.title : `Developer`},
                  {formValues.Type ? formValues.Type : `Contract`}
                </Typography>
                <Typography>
                  {formValues.companyName ? formValues.companyName : `Tezeract`}
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
                    {formValues.startDateOfExperience
                      ? formValues.startDateOfExperience
                      : `03`}
                    /
                    {formValues.startYearOfExperience
                      ? formValues.startYearOfExperience
                      : ` 2021`}
                    -
                    {formValues.endDateOfExperience &&
                    formValues.endDateOfExperience === "Present" ? (
                      `Present`
                    ) : (
                      <>
                        {formValues.endDateOfExperience
                          ? formValues.endDateOfExperience
                          : `03`}
                        /
                        {formValues.endYearOfExperience
                          ? formValues.endYearOfExperience
                          : `2021`}
                      </>
                    )}
                  </Typography>
                  <Typography sx={{ fontSize: ".7em", fontWeight: "500" }}>
                    {formValues.location ? formValues.location : `Gulshan`}
                  </Typography>
                </Box>
              </div>
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
            </>
          )}
        </Box>
      )}
      {temp === "sixth" && (
        <Box sx={{mb:3}}>
          <Typography
            sx={{
              fontSize: "1.2em",
              fontWeight: "600",
              display:"flex"
              ,gap:1
            }}
          >
           <BusinessCenterIcon/>JOB EXPERIENCE
          </Typography>
          <Divider sx={{ mb: 1 }} />
          {/* position */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            
            <Typography sx={{ fontSize: ".9em", fontWeight: "600" }}>
              {formValues.title ? formValues.title : `Developer`} ,
              {formValues.Type ? formValues.Type : `Contract`}
            </Typography>
            <Typography sx={{ fontSize: ".7em", fontWeight: "600" }}>
              {formValues.startDateOfExperience
                ? formValues.startDateOfExperience
                : `03`}
              /
              {formValues.startYearOfExperience
                ? formValues.startYearOfExperience
                : ` 2021`}
              -
              {formValues.endDateOfExperience &&
              formValues.endDateOfExperience === "Present" ? (
                `Present`
              ) : (
                <>
                  {formValues.endDateOfExperience
                    ? formValues.endDateOfExperience
                    : `03`}
                  /
                  {formValues.endYearOfExperience
                    ? formValues.endYearOfExperience
                    : `2021`}
                </>
              )}
            </Typography>
          </div>
          {/* Company name and location */}
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {formValues.companyName ? formValues.companyName : `Tezeract`}
            <div
              style={{
                width: "5px",
                background: "black",
                height: "5px",
                borderRadius: "50px",
              }}
            />
            {formValues.location ? formValues.location : `Gulshan`}
          </Typography>
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
    </>
  );
}
