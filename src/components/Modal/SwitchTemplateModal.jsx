import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TemplateCard from "../Card/TemplateCard"; // Adjust the import path as necessary
import templateImg1 from "../../assets/images/t1.png";
import templateImg2 from "../../assets/images/t2.png";
import templateImg3 from "../../assets/images/t3.png";
import templateImg4 from "../../assets/images/t4.png";
import templateImg5 from "../../assets/images/t5.png";
import templateImg6 from "../../assets/images/t6.png";
import templateImg7 from "../../assets/images/t7.png";
import templateImg8 from "../../assets/images/t8.png";

import templateImg9 from "../../assets/images/t9.png";
import { Grid, useMediaQuery } from "@mui/material";

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const below700 = useMediaQuery("(max-width:700px)");
  const below450 = useMediaQuery("(max-width:450px)");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: below450 ? 300 : below700 ? 400 : 600,
    maxHeight: "80vh",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "8px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  };
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        fullWidth
        sx={{ py: 1.5 }}
      >
        Switch Template
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TemplateCard
                  image={templateImg1}
                  title={"Template 1"}
                  number={1}
                  handleClose={handleClose}
                />
                <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
                  Classic
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TemplateCard
                  image={templateImg2}
                  title={"Template 2"}
                  number={2}
                  handleClose={handleClose}
                />
                <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
                  Elegant
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TemplateCard
                  image={templateImg3}
                  title={"Template 3"}
                  number={3}
                  handleClose={handleClose}
                />
                <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
                  Double Column
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TemplateCard
                  image={templateImg4}
                  title={"Template 4"}
                  number={4}
                  handleClose={handleClose}
                />
                <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
                  Simple
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TemplateCard
                  image={templateImg5}
                  title={"Template 5"}
                  number={5}
                  handleClose={handleClose}
                />
                <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
                  Polished
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TemplateCard
                  image={templateImg6}
                  title={"Template 6"}
                  number={6}
                  handleClose={handleClose}
                />
                <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
                  Modern
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TemplateCard
                  image={templateImg7}
                  title={"Template 7"}
                  number={7}
                  handleClose={handleClose}
                />
                <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
                  Creative
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TemplateCard
                  image={templateImg8}
                  title={"Template 8"}
                  number={8}
                  handleClose={handleClose}
                />
                <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
                  Stylish
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TemplateCard
                  image={templateImg9}
                  title={"Template 9"}
                  number={9}
                  handleClose={handleClose}
                />
                <Typography sx={{ color: "gray", my: 2, textAlign: "center" }}>
                  Single Column
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
