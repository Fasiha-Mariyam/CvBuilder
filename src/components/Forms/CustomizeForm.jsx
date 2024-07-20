import * as React from "react";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import {
  Divider,
  Grid,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { Editor } from "primereact/editor";

const textStyle = {
  color: "rgba(131, 131, 131, 1)",
  fontSize: "15px",
  textAlign: "start",
};


export default function CustomizeForm() {
  const below600 = useMediaQuery("(max-width:600px)");
  const [text, setText] = React.useState('');

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
            sx={{ fontSize: below600 ? "20px" : "28px", fontWeight: 500 }}
          >
              <Grid item xs={12} md={12}>
              <Typography sx={textStyle}>Section Name*</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Ex: Certificate "
                fullWidth
              />
            </Grid>
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} flexItem />
          <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
      </Box>
    </div>
  );
}
