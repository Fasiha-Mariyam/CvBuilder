/* eslint-disable react/prop-types */
import { Box, Divider, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import React from "react";

export default function Education({ formValues, temp, fontFamily , secondaryColor , primaryColor }) {
  const education = {};
  const Temp6Style = {
    color: "white",
    background: "rgb(52 52 52)",
    fontFamily: fontFamily,
    borderTopLeftRadius: "50%",
    borderTopRightRadius: "50%",
    p: 5,
  };
  Object.keys(formValues).forEach((key) => {
    let match = key.match(/^(education\d+)_/);
    if (match) {
      const prefix = match[1];
      if (!education[prefix]) {
        education[prefix] = {};
      }
      education[prefix][key.replace(`${prefix}_`, "")] = formValues[key];
    }
  });
  console.log("edu",education);
  return (
    <>
      {temp !== "sixth" && (
        <Box>
          <Typography
            sx={{
              fontSize: "1em",
              fontWeight: "600",
              mt:
                (temp == "fourth" || temp == "fifth" || temp === "eighth") && 2,
              border: temp === "seventh" && "1px solid rgb(4 50 128)",
              borderRadius: temp === "seventh" && "50px",
              background: temp === "seventh" && "rgb(4 50 128)",
              gap: temp === "eighth" && 1,
              ml: temp === "eighth" && 2.5,
              fontFamily: fontFamily,
              px: temp === "seventh" && 5,
              mb: temp === "seventh" && 2,
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
            {temp === "eighth" && <SchoolIcon />}{" "}
            {temp === "seventh" ? `Education` : `EDUCATION`}
          </Typography>
          {temp !== "seventh" && (
            <Divider
              sx={{
                mb: 1,
                fontFamily: fontFamily,
                background: (temp == "fourth" || temp == "fifth") && "black",
              }}
            />
          )}
          {/* Field and date */}
          {temp !== "fourth" &&
            temp !== "fifth" &&
            temp !== "seventh" &&
            temp !== "eighth" && (
              <>
                {Object.keys(education).map((educationKey, index) => {
                  const edu = education[educationKey];
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
                            color:primaryColor? primaryColor: "",
                            fontFamily: fontFamily,
                          }}
                        >
                          {edu.Degree ? edu.Degree : `BS`} ,
                          {edu.Field ? edu.Field : `CS`}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: ".7em",
                            fontWeight: "600",
                            fontFamily: fontFamily,
                            color:primaryColor? primaryColor: ""
                          }}
                        >
                          {edu.startDateOfSchool
                            ? edu.startDateOfSchool
                            : `03`}
                          /
                          {edu.startYearOfSchool
                            ? edu.startYearOfSchool
                            : ` 2021`}{" "}
                          -{" "}
                          {edu.endDateOfSchool &&
                          edu.endDateOfSchool === "Present" ? (
                            `Present`
                          ) : (
                            <>
                              {edu.endDateOfSchool
                                ? edu.endDateOfSchool
                                : `03`}
                              /
                              {edu.endYearOfSchool
                                ? edu.endYearOfSchool
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
                          fontFamily: fontFamily,
                          alignItems: "center",
                          color:primaryColor?primaryColor:"",
                          gap: 1,
                        }}
                      >
                        {edu.Institute
                          ? edu.Institute
                          : `Dawood Uni`}
                        <div
                          style={{
                            width: "5px",
                            background: "black",
                            height: "5px",
                            borderRadius: "50px",
                          }}
                        />
                        {edu.Grade ? edu.Grade : `A+`}
                      </Typography>
                      {/* Details of working Education */}
                      <Typography
                        sx={{
                          fontSize: "10px",
                          mb: 2,
                          fontFamily: fontFamily,
                          ml: temp === "eighth" && 2.5,
                        }}
                      >
                        {edu.DescriptionOfSchool
                          ? edu.DescriptionOfSchool
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
              {Object.keys(education).map((educationKey, index) => {
                const edu = education[educationKey];
                return (
                  <div key={index}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontSize: ".9em",
                          fontFamily: fontFamily,
                          fontWeight: "500",

                          color:primaryColor? primaryColor:  "rgb(30 55 99)",
                        }}
                      >
                        {edu.Degree ? edu.Degree : `BS`},
                        {edu.Field ? edu.Field : `CS`},
                        {edu.Institute
                          ? edu.Institute
                          : `Dawood Uni`}
                        ,{edu.Grade ? edu.Grade : `A+`}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: ".7em",
                          fontWeight: "500",
                          color: "black",
                          fontFamily: fontFamily,
                        }}
                      >
                        {edu.startDateOfSchool
                          ? edu.startDateOfSchool
                          : `03`}
                        /
                        {edu.startYearOfSchool
                          ? edu.startYearOfSchool
                          : ` 2021`}{" "}
                        -{" "}
                        {edu.endDateOfSchool &&
                        edu.endDateOfSchool === "Present" ? (
                          `Present`
                        ) : (
                          <>
                            {edu.endDateOfSchool
                              ? edu.endDateOfSchool
                              : `03`}
                            /
                            {edu.endYearOfSchool
                              ? edu.endYearOfSchool
                              : `2021`}
                          </>
                        )}
                      </Typography>
                    </div>
                    {/* Details of working Education */}
                    <Typography
                      sx={{
                        fontSize: "10px",
                        mb: 2,
                        fontFamily: fontFamily,
                        ml: temp === "eighth" && 2.5,
                      }}
                    >
                      {edu.DescriptionOfSchool
                        ? edu.DescriptionOfSchool
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
              {Object.keys(education).map((educationKey, index) => {
                const edu = education[educationKey];
                return (
                  <div key={index}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontSize: ".9em",
                          fontWeight: "500",
                          ml: temp === "eighth" && 2.5,
                          fontFamily: fontFamily,
                          color: primaryColor? primaryColor:
                            temp === "seventh" ? "black " : "rgb(19 71 119)",
                        }}
                      >
                        {edu.Degree ? edu.Degree : `BS`} in
                        {edu.Field
                          ? edu.Field
                          : ` Computer Science`}
                      </Typography>
                      <Typography sx={{ ml: temp === "eighth" && 2.5 ,color: primaryColor? primaryColor:""  }}>
                        {edu.Institute
                          ? edu.Institute
                          : `Dawood University`}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          fontFamily: fontFamily,
                          ml: temp === "eighth" && 2.5,
                          fontStyle: "italic",
                          color:primaryColor? primaryColor:
                            temp === "seventh" ? "black " : "rgb(19 71 119)",
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
                          {edu.startDateOfSchool
                            ? edu.startDateOfSchool
                            : `03`}
                          /
                          {edu.startYearOfSchool
                            ? edu.startYearOfSchool
                            : ` 2021`}{" "}
                          -{" "}
                          {edu.endDateOfSchool &&
                          edu.endDateOfSchool === "Present" ? (
                            `Present`
                          ) : (
                            <>
                              {edu.endDateOfSchool
                                ? edu.endDateOfSchool
                                : `03`}
                              /
                              {edu.endYearOfSchool
                                ? edu.endYearOfSchool
                                : `2021`}
                            </>
                          )}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: ".7em",
                            fontWeight: "500",
                            fontFamily: fontFamily,
                            color:primaryColor?primaryColor:""
                          }}
                        >
                          {edu.Grade ? edu.Grade : `A+`}
                        </Typography>
                      </Box>
                    </div>
                    {/* Details of working Education */}
                    <Typography
                      sx={{
                        fontSize: "10px",
                        mb: 2,
                        fontFamily: fontFamily,
                        ml: temp === "eighth" && 2.5,
                      }}
                    >
                      {edu.DescriptionOfSchool
                        ? edu.DescriptionOfSchool
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
        <Box sx={Temp6Style}>
          <Typography
            sx={{
              fontSize: "1.2em",
              fontWeight: "600",
              fontFamily: fontFamily,
              textAlign: "center",
              color:secondaryColor?secondaryColor:""
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
          {Object.keys(education).map((educationKey, index) => {
            const edu = education[educationKey];
            return (
              <div key={index}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      fontSize: ".9em",
                      fontWeight: "500",
                      fontFamily: fontFamily,
                      color:primaryColor? primaryColor: "rgb(190 186 186)",
                    }}
                  >
                    {edu.Degree ? edu.Degree : `BS`} in
                    {edu.Field ? edu.Field : ` Computer Science`}
                  </Typography>
                  <Typography sx={{ fontFamily: fontFamily ,color:primaryColor? primaryColor: ""}}>
                    {edu.Institute
                      ? edu.Institute
                      : `Dawood University`}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontFamily: fontFamily,
                      fontStyle: "italic",
                      color: primaryColor? primaryColor: "rgb(190 186 186)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: ".7em",
                        fontWeight: "500",
                        fontFamily: fontFamily,
                      }}
                    >
                      {edu.startDateOfSchool
                        ? edu.startDateOfSchool
                        : `03`}
                      /
                      {edu.startYearOfSchool
                        ? edu.startYearOfSchool
                        : ` 2021`}{" "}
                      -{" "}
                      {edu.endDateOfSchool &&
                      edu.endDateOfSchool === "Present" ? (
                        `Present`
                      ) : (
                        <>
                          {edu.endDateOfSchool
                            ? edu.endDateOfSchool
                            : `03`}
                          /
                          {edu.endYearOfSchool
                            ? edu.endYearOfSchool
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
                      {edu.Grade ? edu.Grade : `A+`}
                    </Typography>
                  </Box>
                </div>

                {/* Details of working Education */}
                <Typography sx={{ fontSize: "10px", fontFamily: fontFamily }}>
                  {edu.DescriptionOfSchool
                    ? edu.DescriptionOfSchool
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
