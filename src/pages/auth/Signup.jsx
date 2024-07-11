import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import service from "../../services/config.services";

function Signup() {
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignUp = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
    };

    try {
      const response = await service.post(
        "/auth/signup",
        newUser
      );
      console.log(response);
      navigate("/login")
    } catch (error) {
      if(error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage)
      }else{
        navigate("/error")
      }
    }
  };

  return (
    <Box
      component="form"
      className="columnCenter"
      sx={{ backgroundColor: "#09184F", padding: "64px", borderRadius: "16px" }}
      onSubmit={handleSignUp}
    >
      <Typography variant="h5"> Sign Up </Typography>
      <TextField
        id="name-field"
        className="inputStyle"
        label="Name"
        size="small"
        value={name}
        onChange={handleNameChange}
      />
      <TextField
        id="email-field"
        className="inputStyle"
        label="Email"
        size="small"
        value={email}
        onChange={handleEmailChange}
      />

      <TextField
        id="pass-field"
        className="inputStyle"
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Password"
        size="small"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button type="submit" color="primary" variant="contained">
        Sign Up
      </Button>
      {errorMessage && (
        <Typography variant="caption" color="red">
          {errorMessage}
        </Typography>
      )}
      <Typography variant="body2" gutterBottom>
        Have an account?
        <Button  component={RouterLink} to="/login">
          Login
        </Button>
      </Typography>
    </Box>
  );
}

export default Signup;
