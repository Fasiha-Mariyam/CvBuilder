import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function Interest() {
    const Interests = [
        "Reading",
        "Learning",
        "Traveling",
        "Coding",
        "Photography",
        "Music",
        "Cooking",
        "Fitness",
        "Gaming",
        "Writing"
      ];
  return (
    <>
      <Box>
        <Divider sx={{ my: 1 }} />
        <Typography sx={{ fontSize: "1em", fontWeight: "600" }}>Interests</Typography>

        <Divider sx={{ mb: 1 }} />
        {Interests.map((Interest, index) => (
          <Box
            key={index}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              color: "rgba(83, 97, 103, 1)",
              border: "1px solid rgba(217, 217, 217, 0.85)",
              borderRadius: "17px",
              padding: ".5rem",
              mb:.5,
              cursor: "pointer",
              fontSize: "10px",
              marginRight: "8px",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>{Interest}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}
