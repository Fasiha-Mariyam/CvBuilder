import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function TemplateCard({
  image,
  number,
  handleClose,
  handleTemplateSelect,
  addedCustomSections,
}) {
  const navigate = useNavigate();
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleClick = () => {
    if (handleTemplateSelect) {
      handleTemplateSelect(number);
    } else {
      navigate("/createResume", { state: number });
      if (handleClose) {
        handleClose();
      }
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        width: handleTemplateSelect && "500px",
        height: handleTemplateSelect && "200px",
        boxShadow: hover
          ? "0px 4px 6px rgba(0, 0, 0, 0.1)"
          : "0px 4px 6px rgba(0, 0, 0, 0.5)",
        position: "relative",
        // boxShadow: "",
        transition: "box-shadow 0.3s",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardMedia component="img" image={image} alt="Paella dish" height={190} />

      {hover && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(50, 50, 50, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              color: "#498fcd",
              background: "rgb(234 235 235)",
              fontWeight: "500",
              "&:hover": {
                backgroundColor: "#003d4d",
              },
            }}
            onClick={handleClick}
          >
            Use Me
          </Button>
        </Box>
      )}

      
    </Card>
  );
}
