import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import logo from "../assets/fakeasy-logo.png";

function Footer() {
  const logoStyle = {
    width: "100px",
    height: "auto",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap:"16px",
        pt: { xs: 4, sm: 8 },
        width: "100%",
        borderTop: "1px solid",
        borderColor: "divider",
        marginTop: "48px",
      }}
    >
      <img src={logo} style={logoStyle} alt="logo of fakeasy" />
      <Typography variant="caption"> Developed by Águeda Muela ✨ </Typography>
      <IconButton
        color="inherit"
        href="https://github.com/lamardemuela"
        aria-label="GitHub"
        sx={{ alignSelf: "center" }}
        target="blank"
      >
        <FacebookIcon sx={{ height: "24px" }} />
      </IconButton>
    </Box>
  );
}

export default Footer;
