import React from 'react'
import { useNavigate } from "react-router-dom";
import { CopyAllRounded } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function UsersData(props) {
    const navigate = useNavigate();

  const handleCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch (error) {
      navigate("/error");
    }
  };
  return (
    <Box
      sx={{
        width: "700px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        padding: "32px",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h6">User Data</Typography>
      <List>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.uuid)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText primary={props.eachData.uuid} secondary="UUID" />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.firstname)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText primary={props.eachData.firstname} secondary="First name" />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.lastname)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText primary={props.eachData.lastname} secondary="Last Name" />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.username)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText
            primary={props.eachData.username}
            secondary="Username"
          />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.password)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText primary={props.eachData.password} secondary="Password" />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.email)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText
            primary={props.eachData.email}
            secondary="Email"
          />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.ip)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText
            primary={props.eachData.ip}
            secondary="IP"
          />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.macAddress)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText
            primary={props.eachData.macAddress}
            secondary="Mac Address"
          />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.website)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText
            primary={props.eachData.website}
            secondary="Website"
          />
        </ListItem>
      </List>
    </Box>
  )
}

export default UsersData