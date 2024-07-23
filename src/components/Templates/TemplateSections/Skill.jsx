/* eslint-disable react/prop-types */
import { Box, colors, Divider, Typography } from "@mui/material";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import React from "react";

const temp6style = {
  fontSize: "1.2em",
  fontWeight: "600",
  display: "flex",
  gap: 1,
};
export default function Skill({ temp, formValues }) {
  const skills = ["JavaScript", "React", "Node.js", "HTML", "CSS"];
  return (
    <>
      {temp !== "sixth" && (
        <Box>
          {!temp && <Divider sx={{ my: 1 }} />}
          <Typography
            sx={{
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
            }}
          >
            SKILLS
          </Typography>

          {temp !== "fourth" && (
            <>
              {" "}
              <Divider sx={{ mb: 1 }} />
              {(formValues.skills ? formValues.skills : skills).map(
                (skill, index) => (
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
                    <Typography sx={{ fontSize: "12px" }}>{skill}</Typography>
                  </Box>
                )
              )}
            </>
          )}
          {temp === "fourth" && (
            <>
              {(formValues.skills ? formValues.skills : skills).map(
                (skill, index) => (
                  <ul key={index}>
                    <li style={{ fontSize: "12px", color: "white" }}>
                      {skill}
                    </li>
                  </ul>
                )
              )}
            </>
          )}
        </Box>
      )}
      {temp === "sixth" && (
        <Box sx={{mb:3}}>
          <Typography sx={temp6style}>
            <SportsBasketballIcon /> SKILLS
          </Typography>
          <Divider sx={{ mb: 1 }} />
          {(formValues.skills ? formValues.skills : skills).map(
            (skill, index) => (
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
                <Typography sx={{ fontSize: "12px" }}>{skill}</Typography>
              </Box>
            )
          )}
        </Box>
      )}
    </>
  );
}
