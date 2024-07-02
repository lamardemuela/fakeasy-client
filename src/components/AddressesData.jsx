import { CopyAllRounded } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

function AddressesData(props) {
  
  const navigate = useNavigate()

  const handleCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(value)
    } catch (error) {
      navigate("/error")
    }
  }

  return (
    <Box sx={{ width:"700px", display:"flex", flexDirection:"column", justifyContent:"space-evenly", backgroundColor: "rgba(255, 255, 255, 0.08)", padding: "32px", borderRadius: "8px" }}>
      <Typography variant="h6">
        Address Data
      </Typography>
        <List>
          <ListItem
            secondaryAction={
              <IconButton edge="end" onClick={() => handleCopy(props.eachData.street)}>
                <CopyAllRounded color="primary" />
              </IconButton>
            }
          >
            <ListItemText primary={props.eachData.street} secondary="Street" />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" onClick={() =>handleCopy(props.eachData.streetName)}>
                <CopyAllRounded color="primary" />
              </IconButton>
            }
          >
            <ListItemText primary={props.eachData.streetName} secondary="Street Name" />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" onClick={() =>handleCopy(props.eachData.buildingNumber)}>
                <CopyAllRounded color="primary" />
              </IconButton>
            }
          >
            <ListItemText primary={props.eachData.buildingNumber} secondary="Building Number" />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" onClick={() =>handleCopy(props.eachData.city)}>
                <CopyAllRounded color="primary" />
              </IconButton>
            }
          >
            <ListItemText primary={props.eachData.city} secondary="City" />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" onClick={() =>handleCopy(props.eachData.zipcode)}>
                <CopyAllRounded color="primary" />
              </IconButton>
            }
          >
            <ListItemText primary={props.eachData.zipcode} secondary="Zip Code" />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" onClick={() =>handleCopy(props.eachData.country)}>
                <CopyAllRounded color="primary" />
              </IconButton>
            }
          >
            <ListItemText primary={props.eachData.country} secondary="Country" />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" onClick={() =>handleCopy(props.eachData.county_code)}>
                <CopyAllRounded color="primary" />
              </IconButton>
            }
          >
            <ListItemText primary={props.eachData.county_code} secondary="Country Code" />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" onClick={() =>handleCopy(props.eachData.latitude)}>
                <CopyAllRounded color="primary" />
              </IconButton>
            }
          >
            <ListItemText primary={props.eachData.latitude} secondary="Latitude" />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" onClick={() =>handleCopy(props.eachData.longitude)}>
                <CopyAllRounded color="primary" />
              </IconButton>
            }
          >
            <ListItemText primary={props.eachData.longitude} secondary="Longitude" />
          </ListItem>
        </List>
       
    </Box>
  );
}

export default AddressesData;
