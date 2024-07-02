import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CopyAllRounded } from "@mui/icons-material";
import { Avatar, Box, IconButton, ListItemAvatar, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function BooksData(props) {
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
      <Typography variant="h6">Book Data</Typography>
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
              onClick={() => handleCopy(props.eachData.description)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText
            primary={props.eachData.description}
            secondary="Description"
          />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.isbn)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText primary={props.eachData.isbn} secondary="Isbn" />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.published)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText
            primary={props.eachData.published}
            secondary="Published at"
          />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.publisher)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText
            primary={props.eachData.publisher}
            secondary="Publisher by"
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default BooksData;
