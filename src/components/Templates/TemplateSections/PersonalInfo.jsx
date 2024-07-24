/* eslint-disable react/prop-types */
import { Avatar, Box, Divider, Typography, useMediaQuery } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

export default function PersonalInfo({
  temp,
  formValues,
  fontFamily,
  primaryColor,
  secondaryColor,
  fontSize,
}) {
  const below450 = useMediaQuery("(max-width:450px)");
  const between1200to1500 = useMediaQuery(
    "(min-width:1200px) and (max-width:1500px)"
  );
  const textStyle = {
    fontSize:
      fontSize == 2
        ? "0.8em"
        : fontSize == 0
        ? "0.5em"
        : fontSize == 1
        ? "0.6em"
        : "1em",
    fontWeight: "500",
    fontFamily: fontFamily,
    lineHeight: "1.1",
  };
  const temp4Style = {
    fontSize:   fontSize == 2
    ? "0.8em"
    : fontSize == 0
    ? "0.5em"
    : fontSize == 1
    ? "0.6em"
    : "1em",
    fontWeight: "500",
    fontFamily: fontFamily,
    color: primaryColor ? primaryColor : "white",
    lineHeight: "1.1",
    mb: 1,
  };
  const temp5Style = {
    fontSize:   fontSize == 2
    ? "0.8em"
    : fontSize == 0
    ? "0.5em"
    : fontSize == 1
    ? "0.6em"
    : "1em",
    fontWeight: "500",
    fontFamily: fontFamily,
    color: primaryColor ? primaryColor : "black",
    lineHeight: "1.1",
    mb: 1,
  };
  const temp6textStyle = {
    fontSize:  fontSize == 2
    ? "0.8em"
    : fontSize == 0
    ? "0.5em"
    : fontSize == 1
    ? "0.6em"
    : "1em", 
    fontWeight: "500",
    fontFamily: fontFamily,
    color: primaryColor ? primaryColor : "black",
    lineHeight: "1.1",
    mb: 1,
  };
  const Temp2Style = {
    fontSize:   fontSize == 2
    ? "0.8em"
    : fontSize == 0
    ? "0.5em"
    : fontSize == 1
    ? "0.6em"
    : "1em",
    fontWeight: "500",
    lineHeight: "2",
    fontFamily: fontFamily,
  }; // for div style
  const Temp3Style = {
    fontSize:   fontSize == 2
    ? "0.8em"
    : fontSize == 0
    ? "0.5em"
    : fontSize == 1
    ? "0.6em"
    : "1em",
    fontWeight: "500",
    lineHeight: "1.5",
    fontFamily: fontFamily,
  }; // for textStyle only
  const Temp3DivStyle = { textAlign: "center", fontFamily: fontFamily };
  const Temp3MainBox = {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: fontFamily,
    my: 0.5,
  };
  const Temp3InnerBox = {
    display: "flex",
    justifyContent: "flex-end",
    fontFamily: fontFamily,
    alignItems: "end",
    flexDirection: "column",
    my: 0.5,
  };
  const Temp6Style = {
    color: secondaryColor ? secondaryColor : "white",
    background: "rgb(52 52 52)",
    borderBottomLeftRadius: "50%",
    fontFamily: fontFamily,
    borderBottomRightRadius: "50%",
    py: 1,
  };
  const Temp7Style = {
    color: primaryColor ? primaryColor : "rgba(131, 131, 131, 1)",
    display: "flex",
    ml: 2,
    fontSize:   fontSize == 2
    ? "0.8em"
    : fontSize == 0
    ? "0.5em"
    : fontSize == 1
    ? "0.6em"
    : "1em",
    fontFamily: fontFamily,
    fontWeight: "500",
    alignItems: "center",
    gap: 1,
    lineHeight: "1.1",
  };
  const Temp8 = {
    display: "flex",
    justifyContent: "space-between",
    mx: 3,
    fontFamily: fontFamily,
    mb: 2,
    borderRadius: "10px",
    background: "  rgb(0 35 43)",
    color: primaryColor ? primaryColor : "white",
    p: 1,
  };
  const Temp8Text = {
    fontSize:   fontSize == 2
    ? "0.8em"
    : fontSize == 0
    ? "0.5em"
    : fontSize == 1
    ? "0.6em"
    : "1em",
    fontWeight: "500",
    mb: 1,
    fontFamily: fontFamily,
    display: "flex",
    alignItems: "center",
    gap: 1,
  };
  const Temp1Style = {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: fontFamily,
    flexDirection: below450 && "column",
  }; // for box style

  return (
    <>
      {temp !== "seventh" && (
        <Box sx={temp === "first" ? Temp1Style : {}}>
          {(temp == "fourth" || temp == "fifth") && (
            <div
              style={{
                display: "flex",
                fontFamily: fontFamily,
                justifyContent: between1200to1500 ? "start" : "center",
              }}
            >
              <Avatar sx={{ width: 150, height: 150 }} />
            </div>
          )}
          <Box sx={temp === "sixth" ? Temp6Style : {}}>
            {temp !== "fourth" && temp !== "fifth" && temp !== "eighth" && (
              <div style={temp === "third" ? Temp3DivStyle : {}}>
                <Typography
                  sx={{
                    fontSize: fontSize==2 ? temp == "sixth" ? "1.5em" : "2em"
                    : fontSize == 0
                    ? "1em"
                    : fontSize == 1
                    ? "1.5em"
                    : "2.5em",
                    fontWeight: "600",
                    lineHeight: "1.1",
                    color: secondaryColor ? secondaryColor : "",
                    fontFamily: fontFamily,
                    textAlign: temp == "sixth" && "center",
                  }}
                >
                  {formValues.firstName ? formValues.firstName : "Fasiha"}
                  {formValues.lastName ? formValues.lastName : " Mariyam"}
                </Typography>
                <Typography
                  sx={{
                    fontSize:fontSize == 2 ? "1em":fontSize == 0
                    ? "0.5em"
                    : fontSize == 1
                    ? "0.8em"
                    : "1.5em",
                    fontWeight: "600",
                    lineHeight: "1.5",
                    color: primaryColor ? primaryColor : "",
                    fontFamily: fontFamily,
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
          {temp !== "fourth" &&
            temp !== "fifth" &&
            temp !== "sixth" &&
            temp !== "eighth" && (
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
                      {formValues.Address
                        ? formValues.Address
                        : ` Sana Heights`}
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
              <Box sx={{ mt: 2 }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    mb: 2,
                    color: secondaryColor ? secondaryColor : "white",
                    fontFamily: fontFamily,
                    fontSize: fontSize==2?"20px":fontSize == 0
                    ? "10px"
                    : fontSize == 1
                    ? "15px"
                    : "25px",
                  }}
                >
                  CONTACT
                </Typography>
                <Box sx={{ mx: between1200to1500 ? 0 : 3 }}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: secondaryColor ? secondaryColor : "white",
                    }}
                  >
                    <EmailIcon /> Email:
                  </Typography>
                  <Typography sx={temp4Style}>
                    {formValues.email ? formValues.email : ` n@gmail.com`}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: secondaryColor ? secondaryColor : "white",
                    }}
                  >
                    <LocalPhoneIcon /> Phone Number:
                  </Typography>
                  <Typography sx={temp4Style}>
                    {formValues.phoneNumber
                      ? formValues.phoneNumber
                      : `021-36983322`}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: secondaryColor ? secondaryColor : "white",
                    }}
                  >
                    <HomeIcon /> Address:
                  </Typography>
                  <Typography sx={temp4Style}>
                    {formValues.Address ? formValues.Address : ` Sana Heights`}
                  </Typography>
                </Box>
                <Box sx={{ mx: between1200to1500 ? 0 : 3 }}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: secondaryColor ? secondaryColor : "white",
                    }}
                  >
                    <LinkedInIcon /> LinkedIn:
                  </Typography>
                  <Typography sx={temp4Style}>
                    {formValues.LinkedIn
                      ? formValues.LinkedIn
                      : `https://www.linkedin.com/feed/ `}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: secondaryColor ? secondaryColor : "white",
                    }}
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
                    <EmailIcon
                      sx={{
                        color: primaryColor ? primaryColor : "rgb(19 71 119)",
                      }}
                    />
                  </Typography>
                  <Typography sx={temp5Style}>
                    {formValues.email ? formValues.email : ` n@gmail.com`}
                  </Typography>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <LocalPhoneIcon
                      sx={{
                        color: primaryColor ? primaryColor : "rgb(19 71 119)",
                      }}
                    />
                  </Typography>
                  <Typography sx={temp5Style}>
                    {formValues.phoneNumber
                      ? formValues.phoneNumber
                      : `021-36983322`}
                  </Typography>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <HomeIcon
                      sx={{
                        color: primaryColor ? primaryColor : "rgb(19 71 119)",
                      }}
                    />
                  </Typography>
                  <Typography sx={temp5Style}>
                    {formValues.Address ? formValues.Address : ` Sana Heights`}
                  </Typography>
                </Box>
                <Box sx={{ mx: between1200to1500 ? 0 : 3 }}>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <LinkedInIcon
                      sx={{
                        color: primaryColor ? primaryColor : "rgb(19 71 119)",
                      }}
                    />
                  </Typography>
                  <Typography sx={temp5Style}>
                    {formValues.LinkedIn
                      ? formValues.LinkedIn
                      : `https://www.linkedin.com/feed/ `}
                  </Typography>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <GitHubIcon
                      sx={{
                        color: primaryColor ? primaryColor : "rgb(19 71 119)",
                      }}
                    />
                  </Typography>
                  <Typography sx={temp5Style}>
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
                      ...temp6textStyle,
                    }}
                  >
                    <EmailIcon
                      sx={{ color: primaryColor ? primaryColor : "black" }}
                    />
                    {formValues.email ? formValues.email : ` n@gmail.com`}
                  </Typography>

                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      ...temp6textStyle,
                    }}
                  >
                    <LocalPhoneIcon
                      sx={{ color: primaryColor ? primaryColor : "black" }}
                    />
                    {formValues.phoneNumber
                      ? formValues.phoneNumber
                      : `021-36983322`}
                  </Typography>

                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontFamily: fontFamily,
                      ...temp6textStyle,
                    }}
                  >
                    <HomeIcon
                      sx={{ color: primaryColor ? primaryColor : "black" }}
                    />{" "}
                    {formValues.Address ? formValues.Address : ` Sana Heights`}
                  </Typography>
                </Box>
                <Box sx={{ mx: between1200to1500 ? 0 : 3 }}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      ...temp6textStyle,
                      fontFamily: fontFamily,
                      wordBreak: "break-all",
                    }}
                  >
                    <LinkedInIcon
                      sx={{ color: primaryColor ? primaryColor : "black" }}
                    />
                    {formValues.LinkedIn
                      ? formValues.LinkedIn
                      : `https://www.linkedin.com`}
                  </Typography>

                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      ...temp6textStyle,
                      gap: 1,
                      fontFamily: fontFamily,
                    }}
                  >
                    <GitHubIcon
                      sx={{ color: primaryColor ? primaryColor : "black" }}
                    />{" "}
                    {formValues.GitHub
                      ? formValues.GitHub
                      : ` https://github.com/`}
                  </Typography>
                </Box>
              </Box>
            </div>
          )}
        </Box>
      )}
      {temp === "seventh" && (
        <Box>
          <div>
            <Box>
              <Typography sx={Temp7Style}>
                <EmailIcon
                  sx={{ color: primaryColor ? primaryColor : "rgb(4 118 188)" }}
                />
                {formValues.email ? formValues.email : ` n@gmail.com`}
              </Typography>
              <Typography sx={Temp7Style}>
                <LocalPhoneIcon
                  sx={{ color: primaryColor ? primaryColor : "rgb(4 118 188)" }}
                />
                {formValues.phoneNumber
                  ? formValues.phoneNumber
                  : `021-36983322`}
              </Typography>
              <Typography sx={Temp7Style}>
                <PersonPinCircleIcon
                  sx={{ color: primaryColor ? primaryColor : "rgb(4 118 188)" }}
                />
                {formValues.Address ? formValues.Address : ` Sana Heights`}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ ...Temp7Style, wordBreak: "break-all" }}>
                <LinkedInIcon
                  sx={{ color: primaryColor ? primaryColor : "rgb(4 118 188)" }}
                />
                {formValues.LinkedIn
                  ? formValues.LinkedIn
                  : `https://www.linkedin.com/feed/ `}
              </Typography>
              <Typography sx={Temp7Style}>
                <GitHubIcon
                  sx={{ color: primaryColor ? primaryColor : "rgb(4 118 188)" }}
                />
                {formValues.GitHub ? formValues.GitHub : ` https://github.com/`}
              </Typography>
            </Box>
          </div>
        </Box>
      )}
      {temp === "eighth" && (
        <div>
          <Box sx={Temp8}>
            <Box>
              <Typography sx={Temp8Text}>
                <EmailIcon />
                {formValues.email ? formValues.email : ` n@gmail.com`}
              </Typography>
              <Typography sx={Temp8Text}>
                <LocalPhoneIcon />
                {formValues.phoneNumber
                  ? formValues.phoneNumber
                  : `021-36983322`}
              </Typography>
              <Typography sx={Temp8Text}>
                <PersonPinCircleIcon />
                {formValues.Address ? formValues.Address : ` Sana Heights`}
              </Typography>
            </Box>
            <Box>
              <Typography sx={Temp8Text}>
                <LinkedInIcon />
                {formValues.LinkedIn
                  ? formValues.LinkedIn
                  : `https://www.linkedin.com/feed/ `}
              </Typography>
              <Typography sx={Temp8Text}>
                <GitHubIcon />
                {formValues.GitHub ? formValues.GitHub : ` https://github.com/`}
              </Typography>
            </Box>
          </Box>
        </div>
      )}
    </>
  );
}
