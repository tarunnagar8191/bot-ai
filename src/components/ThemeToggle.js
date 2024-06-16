import React from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";

const ThemeToggle = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const toggleTheme = () => {
    // Toggle theme mode
    console.log("Toggling theme...");
  };

  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggle;
