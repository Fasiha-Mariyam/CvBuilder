/* eslint-disable react/prop-types */
import { Box, Divider, Typography } from "@mui/material";
import SocialDistanceIcon from "@mui/icons-material/SocialDistance";
import React from "react";

export default function Reference({
  formValues,
  temp,
  fontFamily,
  secondaryColor,
  primaryColor,
  fontSize,
}) {
  const References = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" },
    { name: "Diana", email: "diana@example.com" },
  ];

  const groupedReferences = [];
  const referencesList = formValues.References
    ? formValues.References
    : References;

  // Group references into pairs
  for (let i = 0; i < referencesList.length; i += 2) {
    groupedReferences.push(referencesList.slice(i, i + 2));
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
                  textAlign:temp == "fourth" && "center",
                  border: temp === "seventh" && "1px solid rgb(4 50 128)",
                  borderRadius: temp === "seventh" && "50px",
                  background: temp === "seventh" && "rgb(4 50 128)",
                  px: temp === "seventh" && 5,
                  mb: temp === "seventh" && 2,

                  color: secondaryColor
                    ? secondaryColor
                    : temp === "fourth"
                    ? "white"
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
          {(temp === "sixth" || temp === "eighth") && <SocialDistanceIcon />}{" "}
          {temp === "seventh" ? `References` : `REFERENCES`}
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
            {groupedReferences.map((referencePair, index) => (
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
                {referencePair.map((reference, idx) => (
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
                        {reference.name}
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
                          {reference.email}
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
          {temp!== "fourth" && <Divider/>}
            {(formValues.References ? formValues.References : References).map(
              (reference, index) => (
                <ul key={index}>
                  <li
                    style={{
                      fontFamily: fontFamily,
                      color: primaryColor
                        ? primaryColor
                        : temp === "sixth"
                        ? "rgba(83, 97, 103, 1)"
                       : "white"
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
                      {reference.name}
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
                        {reference.email}
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
