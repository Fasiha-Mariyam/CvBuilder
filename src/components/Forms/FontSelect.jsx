/* eslint-disable react/prop-types */
import * as React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Typography,
  Button,
  Slider,
} from "@mui/material";
import { ChromePicker, SketchPicker } from "react-color";
import bg1 from "../../assets/images/bg1.jpg"

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// Font options
const fonts = [
  "Select Font",
  "Cursive",
  "Fantasy",
  "Monospace",
  "Sans-serif",
  "Serif",
  "Roboto",
  "Poppins",
  "Open Sans",
  "Lato",
  "Montserrat",
  "Source Sans Pro",
  "Raleway",
  "Nunito",
  "Ubuntu",
  "Merriweather",
];

// Color options
const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F3FF33",
  "#FF33A1",
  "#FF8C33",
  "#33FFF2",
  "#8C33FF",
];

const backgroundImages = [
  bg1,
  " /src/assets/images/bg3.webp",
  " /src/assets/images/bg5.jpg",
  " /src/assets/images/bg6.jpg",
  " /src/assets/images/bg7.jpg",
  " /src/assets/images/bg8.jpg",
  " /src/assets/images/bg9.jpg",
  " /src/assets/images/bg10.jpg",
];

// Font size options
const fontSizeOptions = [
  { label: 'XS', value: '12px' },
  { label: 'S', value: '14px' },
  { label: 'M', value: '16px' },
  { label: 'L', value: '18px' }
];

export default function SelectFontAndColor({
  fontFamily,
  handleFontChange,
  priColor,
  secColor,
  handleColorChange,
  handleSecColorChange,
  backgroundImage,
  handleBackgroundImageChange,
  fontSize,
  handleFontSizeChange
}) {
  const [showColorPicker, setShowColorPicker] = React.useState(false);
  const [showSecColorPicker, setShowSecColorPicker] = React.useState(false);

  const handlePrimaryColorClick = (priColor) => {
    handleColorChange(priColor);
  };
  const handleSecondaryColorClick = (secColor) => {
    handleSecColorChange(secColor);
  };
  const handlePrimaryColorPickerChange = (priColor) => {
    handleColorChange(priColor.hex);
    console.log(priColor.hex, "color");
  };

  const handleSecColorPickerChange = (secColor) => {
    handleSecColorChange(secColor.hex);
    console.log(secColor.hex, "color");
  };

  const handleImageClick = (image) => {
    handleBackgroundImageChange(image);
  };

  const handleSliderChange = (event, newValue) => {
    console.log("imp",newValue);
    handleFontSizeChange(newValue);
  };
  return (
    <Box>
      {/* Font Selector */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="select-font-label">Select Font</InputLabel>
        <Select
          labelId="select-font-label"
          id="select-font"
          value={fontFamily}
          input={<OutlinedInput label="Select Font" />}
          onChange={handleFontChange}
          MenuProps={MenuProps}
        >
          {fonts.map((font) => (
            <MenuItem key={font} value={font === "Select Font" ? "" : font}>
              {font}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
       {/* Font Size Selector */}
       <Box sx={{ mb: 4 }}>
        <Typography variant="h6">Font Size</Typography>
        <Slider
          defaultValue={fontSizeOptions.findIndex(option => option.value === fontSize)}
          step={1}
          marks={fontSizeOptions.map(option => ({
            value: fontSizeOptions.indexOf(option),
            label: option.label
          }))}
          min={0}
          max={fontSizeOptions.length - 1}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
        />
      </Box>
      {/* Color Selector Secondary */}
      <Box>
        {/* Color Display */}
        <FormControl fullWidth>
          <InputLabel id="select-color-label">Secondary Color</InputLabel>
          <OutlinedInput
            label="Selected Color"
            value={secColor || ""}
            placeholder="Select a Secondary color"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              borderColor: secColor ? secColor : "rgba(0, 0, 0, 0.23)",
              borderWidth: 2,
            }}
            readOnly
          >
            {priColor && (
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: secColor,
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                }}
              />
            )}
            <Typography>{secColor || "Select a secondary color"}</Typography>
          </OutlinedInput>
        </FormControl>

        {/* Color Options */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mt: 2,
          }}
        >
          {colors.map((colorOption) => (
            <Box
              key={colorOption}
              sx={{
                width: 40,
                height: 40,
                backgroundColor: colorOption,
                borderRadius: "50%",
                border: "2px solid",
                borderColor: secColor === colorOption ? "gray" : "transparent",
                cursor: "pointer",
                "&:hover": {
                  borderColor: "gray",
                },
              }}
              onClick={() => handleSecondaryColorClick(colorOption)}
            />
          ))}
        </Box>
      </Box>
      {/* Secondary Color Picker */}
      <Box sx={{ my: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setShowSecColorPicker(!showSecColorPicker)}
        >
          {showSecColorPicker ? "Close Color Picker" : "Pick a Custom Color"}
        </Button>
        {showSecColorPicker && (
          <Box sx={{ mt: 2 }}>
            <ChromePicker
              color={secColor}
              onChangeComplete={handleSecColorPickerChange}
            />
          </Box>
        )}
      </Box>
      {/* Color Selector Primary */}
      <Box>
        {/* Color Display */}
        <FormControl fullWidth>
          <InputLabel id="select-color-label">Primary Color</InputLabel>
          <OutlinedInput
            label="Selected Color"
            value={priColor || ""}
            placeholder="Select a primary color"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              borderColor: priColor ? priColor : "rgba(0, 0, 0, 0.23)",
              borderWidth: 2,
            }}
            readOnly
          >
            {priColor && (
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: priColor,
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                }}
              />
            )}
            <Typography>{priColor || "Select a primary color"}</Typography>
          </OutlinedInput>
        </FormControl>

        {/* Color Options */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mt: 2,
          }}
        >
          {colors.map((colorOption) => (
            <Box
              key={colorOption}
              sx={{
                width: 40,
                height: 40,
                backgroundColor: colorOption,
                borderRadius: "50%",
                border: "2px solid",
                borderColor: priColor === colorOption ? "black" : "transparent",
                cursor: "pointer",
                "&:hover": {
                  borderColor: "black",
                },
              }}
              onClick={() => handlePrimaryColorClick(colorOption)}
            />
          ))}
        </Box>
      </Box>
      {/* Primary Color Picker */}
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowColorPicker(!showColorPicker)}
        >
          {showColorPicker ? "Close Color Picker" : "Pick a Custom Color"}
        </Button>
        {showColorPicker && (
          <Box sx={{ mt: 2 }}>
            <ChromePicker
              color={priColor}
              onChangeComplete={handlePrimaryColorPickerChange}
            />
          </Box>
        )}
      </Box>
      {/* Background Image Selector */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Select Background Image</Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mt: 2,
          }}
        >
          {backgroundImages.map((image) => (
            <Box
              key={image}
              sx={{
                width: 100,
                height: 100,
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
                border: "2px solid",
                borderColor:
                  backgroundImage === image ? "black" : "transparent",
                cursor: "pointer",
                "&:hover": {
                  borderColor: "black",
                },
              }}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </Box>
        {backgroundImage && (
          <Typography variant="body1" sx={{ mt: 2 }}>
            Selected Image: {backgroundImage}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
