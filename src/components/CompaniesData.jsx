import React from "react";
import { useNavigate } from "react-router-dom";
import { CopyAllRounded } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function CompaniesData(props) {
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
      <Typography variant="h6">Company Data</Typography>
      <List>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.name)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText primary={props.eachData.name} secondary="Name" />
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
          <ListItemText primary={props.eachData.email} secondary="Email" />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.vat)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText primary={props.eachData.vat} secondary="Vat" />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.phone)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText
            primary={props.eachData.phone}
            secondary="Phone"
          />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleCopy(props.eachData.country)}
            >
              <CopyAllRounded color="primary" />
            </IconButton>
          }
        >
          <ListItemText primary={props.eachData.country} secondary="Country" />
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

export default CompaniesData;
