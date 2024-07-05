import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/GitHub";
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
        minHeight: "75vh",
      }}
    >
      <Box
        component="footer"
        className="columnCenter"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box maxWidth="sm" className="columnCenter">
          <img src={logo} style={logoStyle} alt="logo of fakeasy" />
          <Typography variant="caption">
            {" "}
            Developed by Águeda Muela ✨{" "}
          </Typography>
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
      </Box>
    </Box>
  );
}

export default Footer;
