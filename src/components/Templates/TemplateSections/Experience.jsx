/* eslint-disable react/prop-types */
import { Box, Divider, Typography } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import React from "react";

export default function Experience({ formValues, temp, fontFamily ,  primaryColor,
  secondaryColor, }) {
  const experiences = {};
  Object.keys(formValues).forEach((key) => {
    const match = key.match(/^(experience\d+)_/);
    if (match) {
      const prefix = match[1];
      if (!experiences[prefix]) {
        experiences[prefix] = {};
      }
      experiences[prefix][key.replace(`${prefix}_`, "")] = formValues[key];
    }
  });
  console.log(experiences, "experience");
  return (
    <>
      {temp !== "sixth" && (
        <Box>
          {!temp && <Divider sx={{ my: 1 }} />}
          <Typography
            sx={{
              fontSize: "1em",
              fontWeight: "600",
              fontFamily: fontFamily,
              mt:
                (temp == "fourth" || temp == "fifth" || temp == "eighth") && 2,
              border: temp === "seventh" && "1px solid rgb(4 50 128)",
              borderRadius: temp === "seventh" && "50px",
              background: temp === "seventh" && "rgb(4 50 128)",
              px: temp === "seventh" && 5,
              mb: temp === "seventh" && 2,
              ml: temp === "eighth" && 2.5,
              gap: temp === "eighth" && 1,
              color:
              secondaryColor?secondaryColor:
                temp === "fourth"
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
            {temp === "eighth" && <BusinessCenterIcon />}
            {temp === "fourth"
              ? `PROFESSIONAL EXPERIENCE`
              : temp === "fifth"
              ? `WORK EXPERIENCE`
              : `EXPERIENCE`}
          </Typography>
          {temp !== "seventh" && (
            <Divider
              sx={{
                mb: 1,
                background: (temp == "fourth" || temp == "fifth") && "black",
              }}
            />
          )}
          {/* position */}
          {temp !== "fourth" &&
            temp !== "fifth" &&
            temp !== "seventh" &&
            temp !== "eighth" && (
              <>
                {Object.keys(experiences).map((experienceKey, index) => {
                  const experience = experiences[experienceKey];
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
                            fontSize: ".9em",
                            fontWeight: "600",
                            fontFamily: fontFamily,
                            color:primaryColor?primaryColor:""
                          }}
                        >
                          {experience?.title ? experience.title : `Developer`} ,
                          {experience?.Type ? experience?.Type : `Contract`}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: ".7em",
                            fontWeight: "600",
                            fontFamily: fontFamily,
                          }}
                        >
                          {experience?.startDateOfExperience
                            ? experience?.startDateOfExperience
                            : `03`}
                          /
                          {experience?.startYearOfExperience
                            ? experience?.startYearOfExperience
                            : ` 2021`}
                          -
                          {experience?.endDateOfExperience &&
                          experience?.endDateOfExperience === "Present" ? (
                            `Present`
                          ) : (
                            <>
                              {experience?.endDateOfExperience
                                ? experience?.endDateOfExperience
                                : `03`}
                              /
                              {experience?.endYearOfExperience
                                ? experience?.endYearOfExperience
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
                          fontFamily: fontFamily,
                          alignItems: "center",
                          color:primaryColor?primaryColor:"",
                          gap: 1,
                        }}
                      >
                        {experience?.companyName
                          ? experience?.companyName
                          : `Tezeract`}
                        <div
                          style={{
                            width: "5px",
                            background: "black",
                            height: "5px",
                            color:primaryColor?primaryColor:"",
                            borderRadius: "50px",
                          }}
                        />
                        {experience?.location
                          ? experience?.location
                          : `Gulshan`}
                      </Typography>
                      {/* Details of working experience */}
                      <Typography
                        sx={{ fontSize: "10px", fontFamily: fontFamily }}
                      >
                        {experience?.ExperienceDescription
                          ? experience?.ExperienceDescription
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
              {Object.keys(experiences).map((experienceKey, index) => {
                const experience = experiences[experienceKey];
                return (
                  <div key={index}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontSize: ".9em",
                          fontFamily: fontFamily,
                          fontWeight: "500",
                          color: primaryColor?primaryColor:"rgb(30 55 99)",
                        }}
                      >
                        {experience.title ? experience.title : `Developer`},
                        {experience.Type ? experience.Type : `Contract`},
                        {experience.companyName
                          ? experience.companyName
                          : `Tezeract`}
                        ,{experience.location ? experience.location : `Gulshan`}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: ".7em",
                          fontWeight: "500",
                          color: "black",
                          fontFamily: fontFamily,
                        }}
                      >
                        {experience.startDateOfExperience
                          ? experience.startDateOfExperience
                          : `03`}
                        /
                        {experience.startYearOfExperience
                          ? experience.startYearOfExperience
                          : ` 2021`}
                        -
                        {experience.endDateOfExperience &&
                        experience.endDateOfExperience === "Present" ? (
                          `Present`
                        ) : (
                          <>
                            {experience.endDateOfExperience
                              ? experience.endDateOfExperience
                              : `03`}
                            /
                            {experience.endYearOfExperience
                              ? experience.endYearOfExperience
                              : `2021`}
                          </>
                        )}
                      </Typography>
                    </div>
                    {/* Details of working experience */}
                    <Typography sx={{ fontSize: "10px" }}>
                      {experience.ExperienceDescription
                        ? experience.ExperienceDescription
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
          {(temp === "fifth" || temp === "seventh" || temp === "eighth") && (
            <>
              {Object.keys(experiences).map((experienceKey, index) => {
                const experience = experiences[experienceKey];
                return (
                  <div key={index}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontSize: ".9em",
                          fontFamily: fontFamily,
                          ml: temp === "eighth" && 2.5,
                          fontWeight: "500",
                          color:primaryColor?primaryColor: temp == "seventh" ? "black" : "rgb(19 71 119)",
                        }}
                      >
                        {experience.title ? experience.title : `Developer`},
                        {experience.Type ? experience.Type : `Contract`}
                      </Typography>
                      <Typography sx={{ ml: temp === "eighth" && 2.5,color:primaryColor?primaryColor:"" }}>
                        {experience.companyName
                          ? experience.companyName
                          : `Tezeract`}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          fontFamily: fontFamily,
                          fontStyle: "italic",
                          ml: temp === "eighth" && 2.5,
                          color: temp == "seventh" ? "black" : "rgb(19 71 119)",
                          mb: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: ".7em",
                            fontWeight: "500",
                            fontFamily: fontFamily,
                          }}
                        >
                          {experience.startDateOfExperience
                            ? experience.startDateOfExperience
                            : `03`}
                          /
                          {experience.startYearOfExperience
                            ? experience.startYearOfExperience
                            : ` 2021`}
                          -
                          {experience.endDateOfExperience &&
                          experience.endDateOfExperience === "Present" ? (
                            `Present`
                          ) : (
                            <>
                              {experience.endDateOfExperience
                                ? experience.endDateOfExperience
                                : `03`}
                              /
                              {experience.endYearOfExperience
                                ? experience.endYearOfExperience
                                : `2021`}
                            </>
                          )}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: ".7em",
                            fontWeight: "500",
                            fontFamily: fontFamily,
                          }}
                        >
                          {experience.location
                            ? experience.location
                            : `Gulshan`}
                        </Typography>
                      </Box>
                    </div>
                    {/* Details of working experience */}
                    <Typography
                      sx={{
                        fontSize: "10px",
                        mb: 2,
                        fontFamily: fontFamily,
                        ml: temp === "eighth" && 2.5,
                      }}
                    >
                      {experience.ExperienceDescription
                        ? experience.ExperienceDescription
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
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              fontSize: "1.2em",
              fontWeight: "600",
              fontFamily: fontFamily,
              display: "flex",
              color:secondaryColor?secondaryColor:"",
              gap: 1,
            }}
          >
            <BusinessCenterIcon />
            JOB EXPERIENCE
          </Typography>
          <Divider sx={{ mb: 1 }} />
          {/* position */}
          {Object.keys(experiences).map((experienceKey, index) => {
            const experience = experiences[experienceKey];
            return (
              <div key={index}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    sx={{
                      fontSize: ".9em",
                      fontWeight: "600",
                      fontFamily: fontFamily,
                      color:primaryColor?primaryColor:""
                    }}
                  >
                    {experience.title ? experience.title : `Developer`} ,
                    {experience.Type ? experience.Type : `Contract`}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: ".7em",
                      fontWeight: "600",
                      fontFamily: fontFamily,
                    }}
                  >
                    {experience.startDateOfExperience
                      ? experience.startDateOfExperience
                      : `03`}
                    /
                    {experience.startYearOfExperience
                      ? experience.startYearOfExperience
                      : ` 2021`}
                    -
                    {experience.endDateOfExperience &&
                    experience.endDateOfExperience === "Present" ? (
                      `Present`
                    ) : (
                      <>
                        {experience.endDateOfExperience
                          ? experience.endDateOfExperience
                          : `03`}
                        /
                        {experience.endYearOfExperience
                          ? experience.endYearOfExperience
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
                    fontFamily: fontFamily,
                    display: "flex",
                    alignItems: "center",
                    color
                    :primaryColor?primaryColor:"",
                    gap: 1,
                  }}
                >
                  {experience.companyName ? experience.companyName : `Tezeract`}
                  <div
                    style={{
                      width: "5px",
                      background: "black",
                      height: "5px",
                      borderRadius: "50px",
                      color:primaryColor?primaryColor:""
                    }}
                  />
                  {experience.location ? experience.location : `Gulshan`}
                </Typography>
                {/* Details of working experience */}
                <Typography sx={{ fontSize: "10px", fontFamily: fontFamily }}>
                  {experience.ExperienceDescription
                    ? experience.ExperienceDescription
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
