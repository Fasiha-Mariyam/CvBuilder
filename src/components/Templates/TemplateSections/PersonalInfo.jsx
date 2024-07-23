/* eslint-disable react/prop-types */
import { Avatar, Box, Divider, Typography, useMediaQuery } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const textStyle = { fontSize: "0.8em", fontWeight: "500", lineHeight: "1.1" };
const temp4Style = {
  fontSize: "0.8em",
  fontWeight: "500",
  lineHeight: "1.1",
  mb: 1,
};
const Temp2Style = { fontSize: "0.8em", fontWeight: "500", lineHeight: "2" }; // for div style
const Temp3Style = {
  fontSize: "0.8em",
  fontWeight: "500",
  lineHeight: "1.5",
}; // for textStyle only
const Temp3DivStyle = { textAlign: "center" };
const Temp3MainBox = {
  display: "flex",
  justifyContent: "space-between",
  my: 0.5,
};
const Temp3InnerBox = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "end",
  flexDirection: "column",
  my: 0.5,
};
const Temp6Style = {
  color: "white",
  background: "rgb(52 52 52)",
  borderBottomLeftRadius: "50%",
  borderBottomRightRadius: "50%",
  py: 1,
};
export default function PersonalInfo({ temp, formValues }) {
  const below450 = useMediaQuery("(max-width:450px)");
  const between1200to1500 = useMediaQuery(
    "(min-width:1200px) and (max-width:1500px)"
  );
  const Temp1Style = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: below450 && "column",
  }; // for box style
  return (
    <>
      <Box sx={temp === "first" ? Temp1Style : {}}>
        {(temp == "fourth" || temp == "fifth") && (
          <div
            style={{
              display: "flex",
              justifyContent: between1200to1500 ? "start" : "center",
            }}
          >
            <Avatar sx={{ width: 150, height: 150 }} />
          </div>
        )}
        <Box sx={temp === "sixth" ? Temp6Style : {}}>
          {temp !== "fourth" && temp !== "fifth" && (
            <div style={temp === "third" ? Temp3DivStyle : {}}>
              <Typography
                sx={{
                  fontSize: temp == "sixth" ? "1.5em" : "2em",
                  fontWeight: "600",
                  lineHeight: "1.1",
                  textAlign: temp == "sixth" && "center",
                }}
              >
                {formValues.firstName ? formValues.firstName : "Fasiha"}
                {formValues.lastName ? formValues.lastName : "Mariyam"}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1em",
                  fontWeight: "600",
                  lineHeight: "1.5",
                  textAlign: temp == "sixth" && "center",
                }}
              >
                {formValues.jobTitle
                  ? formValues.jobTitle
                  : `Frontend Developer`}
              </Typography>
            </div>
          )}
          {temp === "sixth" && (
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                justifyContent: "center",
              }}
            >
              <Avatar sx={{ width: 150, height: 150 }} />
            </div>
          )}
        </Box>
        {temp !== "fourth" && temp !== "fifth" && temp !== "sixth" && (
          <div>
            {temp === "third" && <Divider sx={{ my: 1 }} />}
            <Box sx={temp === "third" ? Temp3MainBox : {}}>
              <Box>
                <Typography
                  sx={
                    temp === "third"
                      ? Temp3Style
                      : temp === "second"
                      ? Temp2Style
                      : textStyle
                  }
                >
                  {formValues.email ? formValues.email : ` n@gmail.com`}
                </Typography>
                <Typography
                  sx={
                    temp === "third"
                      ? Temp3Style
                      : temp === "second"
                      ? Temp2Style
                      : textStyle
                  }
                >
                  {formValues.phoneNumber
                    ? formValues.phoneNumber
                    : `021-36983322`}
                </Typography>
                <Typography
                  sx={
                    temp === "third"
                      ? Temp3Style
                      : temp === "second"
                      ? Temp2Style
                      : textStyle
                  }
                >
                  {formValues.Address ? formValues.Address : ` Sana Heights`}
                </Typography>
              </Box>
              <Box sx={temp === "third" ? Temp3InnerBox : {}}>
                <Typography
                  sx={
                    temp === "third"
                      ? Temp3Style
                      : temp === "second"
                      ? Temp2Style
                      : textStyle
                  }
                >
                  {formValues.LinkedIn
                    ? formValues.LinkedIn
                    : `https://www.linkedin.com/feed/ `}
                </Typography>
                <Typography
                  sx={
                    temp === "third"
                      ? Temp3Style
                      : temp === "second"
                      ? Temp2Style
                      : textStyle
                  }
                >
                  {formValues.GitHub
                    ? formValues.GitHub
                    : ` https://github.com/`}
                </Typography>
              </Box>
            </Box>
          </div>
        )}
        {temp === "fourth" && (
          <div>
            <Box sx={{ mt: 2, color: "white" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  mb: 2,
                  fontSize: "20px",
                }}
              >
                CONTACT
              </Typography>
              <Box sx={{ mx: between1200to1500 ? 0 : 3 }}>
                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <EmailIcon /> Email:
                </Typography>
                <Typography sx={temp4Style}>
                  {formValues.email ? formValues.email : ` n@gmail.com`}
                </Typography>
                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <LocalPhoneIcon /> Phone Number:
                </Typography>
                <Typography sx={temp4Style}>
                  {formValues.phoneNumber
                    ? formValues.phoneNumber
                    : `021-36983322`}
                </Typography>
                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <HomeIcon /> Address:
                </Typography>
                <Typography sx={temp4Style}>
                  {formValues.Address ? formValues.Address : ` Sana Heights`}
                </Typography>
              </Box>
              <Box sx={{ mx: between1200to1500 ? 0 : 3 }}>
                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <LinkedInIcon /> LinkedIn:
                </Typography>
                <Typography sx={temp4Style}>
                  {formValues.LinkedIn
                    ? formValues.LinkedIn
                    : `https://www.linkedin.com/feed/ `}
                </Typography>
                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <GitHubIcon /> GitHub:
                </Typography>
                <Typography sx={temp4Style}>
                  {formValues.GitHub
                    ? formValues.GitHub
                    : ` https://github.com/`}
                </Typography>
              </Box>
            </Box>
          </div>
        )}
        {temp === "fifth" && (
          <div>
            <Box sx={{ mt: 2 }}>
              <Box sx={{ mx: between1200to1500 ? 0 : 3 }}>
                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <EmailIcon sx={{ color: "rgb(19 71 119)" }} />
                </Typography>
                <Typography sx={temp4Style}>
                  {formValues.email ? formValues.email : ` n@gmail.com`}
                </Typography>
                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <LocalPhoneIcon sx={{ color: "rgb(19 71 119)" }} />
                </Typography>
                <Typography sx={temp4Style}>
                  {formValues.phoneNumber
                    ? formValues.phoneNumber
                    : `021-36983322`}
                </Typography>
                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <HomeIcon sx={{ color: "rgb(19 71 119)" }} />
                </Typography>
                <Typography sx={temp4Style}>
                  {formValues.Address ? formValues.Address : ` Sana Heights`}
                </Typography>
              </Box>
              <Box sx={{ mx: between1200to1500 ? 0 : 3 }}>
                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <LinkedInIcon sx={{ color: "rgb(19 71 119)" }} />
                </Typography>
                <Typography sx={temp4Style}>
                  {formValues.LinkedIn
                    ? formValues.LinkedIn
                    : `https://www.linkedin.com/feed/ `}
                </Typography>
                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <GitHubIcon sx={{ color: "rgb(19 71 119)" }} />
                </Typography>
                <Typography sx={temp4Style}>
                  {formValues.GitHub
                    ? formValues.GitHub
                    : ` https://github.com/`}
                </Typography>
              </Box>
            </Box>
          </div>
        )}
        {temp === "sixth" && (
          <div>
            <Box sx={{ mt: 2 }}>
              <Box sx={{ mx: between1200to1500 ? 0 : 3 }}>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    temp4Style,
                  }}
                >
                  <EmailIcon sx={{ color: "black" }} />
                  {formValues.email ? formValues.email : ` n@gmail.com`}
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    temp4Style,
                  }}
                >
                  <LocalPhoneIcon sx={{ color: "black" }} />
                  {formValues.phoneNumber
                    ? formValues.phoneNumber
                    : `021-36983322`}
                </Typography>

                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <HomeIcon sx={{ color: "black" }} />{" "}
                  {formValues.Address ? formValues.Address : ` Sana Heights`}
                </Typography>
              </Box>
              <Box sx={{ mx: between1200to1500 ? 0 : 3 }}>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    wordBreak: "break-all",
                  }}
                >
                  <LinkedInIcon sx={{ color: "black" }} />
                  {formValues.LinkedIn
                    ? formValues.LinkedIn
                    : `https://www.linkedin.com`}
                </Typography>

                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <GitHubIcon sx={{ color: "black" }} />{" "}
                  {formValues.GitHub
                    ? formValues.GitHub
                    : ` https://github.com/`}
                </Typography>
              </Box>
            </Box>
          </div>
        )}
      </Box>
    </>
  );
}
