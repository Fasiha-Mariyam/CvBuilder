/* eslint-disable react/prop-types */
import { Box, Divider, Typography } from "@mui/material";
import InterestsIcon from "@mui/icons-material/Interests";
import React from "react";

const temp6style = {
  fontSize: "1.2em",
  fontWeight: "600",
  display: "flex",
  gap: 1,
};
export default function Interest({ formValues, temp }) {
  const Interests = ["Reading", "Learning", "Traveling", "Coding"];
  return (
    <>
      <Box>
        {!temp && <Divider sx={{ my: 1 }} />}
        <Typography
          sx={
            temp === "sixth"
              ? temp6style
              : {
                  fontSize: temp === "fourth" ? "20px" : "1em",
                  fontWeight: "600",
                  mt: temp && -1,
                  ml: temp == "fifth" && 2.5,
                  textAlign: temp === "fourth" && "center",
                  color:
                    temp == "fourth"
                      ? "white"
                      : temp == "fifth"
                      ? "rgb(35 72 116 / 87%)"
                      : "",
                }
          }
        >
        {temp === "sixth" && <InterestsIcon/>}  INTERESTS
        </Typography>

        {temp !== "fourth" && temp !== "sixth" && (
          <>
            {" "}
            <Divider sx={{ mb: 1 }} />
            {(formValues.Interests ? formValues.Interests : Interests).map(
              (Interest, index) => (
                <Box
                  key={index}
                  sx={{
                    display: temp == "fifth" ? "flex" : "inline-flex",
                    alignItems: "center",
                    color: temp == "fifth" ? "white" : "rgba(83, 97, 103, 1)",
                    border: "1px solid rgba(217, 217, 217, 0.85)",
                    borderRadius: temp == "fifth" ? "10px" : "17px",
                    background: temp == "fifth" && "rgb(19 71 119)",
                    padding: ".5rem",
                    mb: 0.5,
                    cursor: "pointer",
                    fontSize: "10px",
                    marginRight: "8px",
                  }}
                >
                  <Typography sx={{ fontSize: "12px" }}>{Interest}</Typography>
                </Box>
              )
            )}
          </>
        )}
        {(temp === "fourth" || temp === "sixth") && (
          <>
            {(formValues.Interests ? formValues.Interests : Interests).map(
              (Interest, index) => (
                <ul key={index}>
                  <li
                    style={{
                      fontSize: "12px",
                      color:
                        temp === "sixth" ? "rgba(83, 97, 103, 1)" : "white",
                    }}
                  >
                    {Interest}
                  </li>
                </ul>
              )
            )}
          </>
        )}
      </Box>
      {/* {temp === "sixth" && <Box>
        <Typography
          sx={temp6style}
        >
         INTERESTS
        </Typography>

        {temp !== "fourth" && (
          <>
            {" "}
            <Divider sx={{ mb: 1 }} />
            {(formValues.Interests ? formValues.Interests : Interests).map(
              (Interest, index) => (
                <Box
                  key={index}
                  sx={{
                    display: temp == "fifth" ? "flex" : "inline-flex",
                    alignItems: "center",
                    color: temp == "fifth" ? "white" : "rgba(83, 97, 103, 1)",
                    border: "1px solid rgba(217, 217, 217, 0.85)",
                    borderRadius: temp == "fifth" ? "10px" : "17px",
                    background: temp == "fifth" && "rgb(19 71 119)",
                    padding: ".5rem",
                    mb: 0.5,
                    cursor: "pointer",
                    fontSize: "10px",
                    marginRight: "8px",
                  }}
                >
                  <Typography sx={{ fontSize: "12px" }}>{Interest}</Typography>
                </Box>
              )
            )}
          </>
        )}
        {temp === "fourth" && (
          <>
            {(formValues.Interests ? formValues.Interests : Interests).map(
              (Interest, index) => (
                <ul key={index}>
                  <li style={{ fontSize: "12px", color: "white" }}>
                    {Interest}
                  </li>
                </ul>
              )
            )}
          </>
        )}
      </Box>} */}
    </>
  );
}
