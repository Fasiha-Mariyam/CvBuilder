import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider, Grid, TextareaAutosize, useMediaQuery } from "@mui/material";

export default function Summary({handleInputChange , formValues }) {
  const [aboutText, setAboutText] = React.useState(formValues?.Summary|| "");
  const maxLength = 2000;
  const below600 = useMediaQuery("(max-width:600px)");

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxLength) {
      handleInputChange(event)
      setAboutText(inputText)
    }
  };

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
            {`Write About Yourself`}
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} flexItem />

        <Grid item xs={12} md={12}>
          <Typography
            sx={{
              color: "rgba(131, 131, 131, 1)",
              fontSize: "15px",
              textAlign: "start",
              mb: 1,
            }}
          >
            Summary
          </Typography>
          <TextareaAutosize
            id="outlined-basic"
            name="Summary"
            placeholder="Write about yourself (2,000 words max)"
            minRows={6}
            maxRows={10}
            value={aboutText}
            onChange={handleChange}
            style={{
              width: "100%",
              resize: "vertical",
              border: "2px solid #498fcd",
            }}
          />
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Typography
              fontSize={"13px"}
              color={aboutText.length > maxLength ? "error" : "textSecondary"}
            >
              {aboutText.length}/2,000
            </Typography>
          </Grid>
        </Grid>

     
      </Box>
    </div>
  );
}
