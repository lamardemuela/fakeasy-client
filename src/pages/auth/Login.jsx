import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import service from "../../services/config.services";

function Login() {
  const {authenticateUser} = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
 
  const handleLogin = async (e) => {
    e.preventDefault()

    const userCredentials = {
      email,
      password
    }

    try {
      // POST "api/auth/login"
      const response = await service.post("/auth/login", userCredentials)

      // token
      localStorage.setItem("authToken", response.data.authToken)

      // validamos token y actualizamos estados
      authenticateUser()

      // redireccionamos
      navigate("/")
    } catch (error) {
      if(error.response.status === 400){
        setErrorMessage(error.response.data.errorMessage)
      }else{
        navigate("/error")
      }
    }
  }

  return (
    <Box
      component="form"
      className="columnCenter"
      sx={{ backgroundColor: "#09184F", padding: "64px", borderRadius: "16px" }}
      onSubmit={handleLogin}
    >
      <Typography variant="h5"> Log in </Typography>
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
        Login
      </Button>
      {errorMessage && (
        <Typography variant="caption" color="red">
          {errorMessage}
        </Typography>
      )}
      <Typography variant="body2" gutterBottom>
        Not registered yet?
        <Button component={RouterLink} to="/signup">
          Sign Up
        </Button>
      </Typography>
    </Box>
  );
}

export default Login;
