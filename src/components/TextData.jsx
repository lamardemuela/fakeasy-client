import React from 'react'
import { useNavigate } from "react-router-dom";
import { CopyAllRounded } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function TextData(props) {
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
      <Typography variant="h6">Text Data</Typography>
      <List>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.title)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText primary={props.eachData.title} secondary="Title" />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.author)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText primary={props.eachData.author} secondary="Author" />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.genre)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText primary={props.eachData.genre} secondary="Genre" />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.content)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText
            primary={props.eachData.content}
            secondary="Content"
          />
        </ListItem>
      </List>
    </Box>
  )
}

export default TextData