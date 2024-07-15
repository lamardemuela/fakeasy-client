import React from 'react'
import { useNavigate } from "react-router-dom";
import { CopyAllRounded } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function CreditCardsData(props) {
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        padding: "32px",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h6">Credit Card Data</Typography>
      <List>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.type)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText primary={props.eachData.type} secondary="Type" />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.number)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText primary={props.eachData.number} secondary="Number" />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.expiration)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText primary={props.eachData.expiration} secondary="Expiration" />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.owner)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText
            primary={props.eachData.owner}
            secondary="Owner"
          />
        </ListItem>
      </List>
    </Box>
  )
}

export default CreditCardsData