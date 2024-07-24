import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider, Grid, TextField, useMediaQuery } from "@mui/material";

const textStyle = {
  color: "rgba(131, 131, 131, 1)",
  fontSize: "15px",
  textAlign: "start",
};
export default function PersonalInfo({ handleInputChange ,formValues}) {
  const below600 = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: below600 ? "15px" : "20px", fontWeight: 500 }}
          >
            {`Add general details`}
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} flexItem />
        <Grid container spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography sx={textStyle}>First Name</Typography>
            <TextField
              name="firstName"
              value={formValues.firstName}
              onChange={handleInputChange}
              id="outlined-basic"
              variant="outlined"
              placeholder="First Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={textStyle}>Last Name</Typography>
            <TextField
             name="lastName"
             value={formValues.lastName}
             onChange={handleInputChange}
              id="outlined-basic"
              placeholder="Last Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography sx={textStyle}>Email</Typography>
            <TextField
             name="email"
             value={formValues.email}
             onChange={handleInputChange}
              id="outlined-basic"
              variant="outlined"
              placeholder="Email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={textStyle}>Job Title</Typography>
            <TextField
             name="jobTitle"
             onChange={handleInputChange}
             value={formValues.jobTitle}
              id="outlined-basic"
              placeholder="Job Title"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography sx={textStyle}>Address</Typography>
            <TextField
             name="Address"
             value={formValues.Address}
             onChange={handleInputChange}
              id="outlined-basic"
              variant="outlined"
              placeholder="Address"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={textStyle}>Phone Number</Typography>
            <TextField
             name="phoneNumber"
             value={formValues.phoneNumber}
             onChange={handleInputChange}
              id="outlined-basic"
              placeholder="Phone Number"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Typography
          sx={{
            color: "rgba(131, 131, 131, 1)",
            fontWeight: "600",
            fontSize: "14px",
            textAlign: "start",
            my: 2,
          }}
        >
          Add Social Links:
        </Typography>
        <Grid container spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography sx={textStyle}>LinkedIn</Typography>
            <TextField
             name="LinkedIn"
             value={formValues.LinkedIn}
             onChange={handleInputChange}
              id="outlined-basic"
              variant="outlined"
              placeholder="LinkedIn"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={textStyle}>GitHub</Typography>
            <TextField
              name="GitHub"
              value={formValues.GitHub}
              onChange={handleInputChange}
              id="outlined-basic"
              placeholder="GitHub"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
