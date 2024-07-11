import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/fakeasy-logo.png";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context.jsx";

const logoStyle = {
  width: "130px",
  height: "auto",
  marginLeft: "20px",
};

function AppAppBar() {
  const { isLoggedIn, authenticateUser } = useContext(AuthContext);
  console.log(isLoggedIn);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLogOut = async (e) => {
    e.preventDefault();
    // 1. removemos el token del localStorage
    localStorage.removeItem("authToken");

    // 2. actualizamos los estados
    await authenticateUser();

    // 3. redireccionamos
    navigate("/");
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          bgcolor: "#061733",
          backdropFilter: "blur(24px)",
          border: "1px solid",
          borderColor: "divider",
          boxShadow:
            "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <RouterLink to="/">
                <img src={logo} style={logoStyle} alt="logo of sitemark" />
              </RouterLink>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    component={RouterLink}
                    to="/"
                    sx={{ textDecoration: "none" }}
                  >
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    component={RouterLink}
                    to="/generate-data"
                    sx={{ textDecoration: "none" }}
                  >
                    Data Generator
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              {isLoggedIn === false ? (
                <>
                  <Button
                    color="primary"
                    variant="text"
                    size="small"
                    component={RouterLink}
                    to="/login"
                  >
                    Login
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    component={RouterLink}
                    to="/signup"
                  >
                    Sign up
                  </Button>
                </>
              ) : (
                <Button
                  color="primary"
                  variant="text"
                  size="small"
                  onClick={handleLogOut}
                >
                  Log out
                </Button>
              )}
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  ></Box>
                  <MenuItem component={RouterLink} to="/">
                    Home
                  </MenuItem>
                  <MenuItem component={RouterLink} to="/generate-data">
                    Data Generator
                  </MenuItem>

                  <Divider />

                  {isLoggedIn === false ? (
                    <>
                      <MenuItem>
                        <Button
                          color="primary"
                          variant="contained"
                          component={RouterLink}
                          to="/signup"
                          sx={{ width: "100%" }}
                        >
                          Sign up
                        </Button>
                      </MenuItem>
                      <MenuItem>
                        <Button
                          color="primary"
                          variant="outlined"
                          component={RouterLink}
                          to="/login"
                          sx={{ width: "100%" }}
                        >
                          Login
                        </Button>
                      </MenuItem>
                    </>
                  ) : (
                    <MenuItem>
                      <Button
                        color="primary"
                        variant="text"
                        size="small"
                        onClick={handleLogOut}
                      >
                        Log out
                      </Button>
                    </MenuItem>
                  )}
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
