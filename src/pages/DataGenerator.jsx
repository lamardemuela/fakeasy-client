import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddressesData from "../components/AddressesData";
import BooksData from "../components/BooksData";
import CompaniesData from "../components/CompaniesData";
import CreditCardsData from "../components/CreditCardsData";
import PersonsData from "../components/PersonsData";
import PlacesData from "../components/PlacesData";
import TextData from "../components/TextData";
import UsersData from "../components/UsersData";

function DataGenerator() {
  const categoriesArr = [
    "addresses",
    "books",
    "companies",
    "credit_cards",
    "persons",
    "places",
    "texts",
    "users",
  ];

  const navigate = useNavigate();

  const [categories, setCategories] = useState(categoriesArr);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [numberOfDataItems, setNumberOfDataItems] = useState(1);
  const [dataGenerated, setDataGenerated] = useState(null);

  const handleGenerateData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://fakerapi.it/api/v1/${selectedCategory}?_quantity=${numberOfDataItems}`
      );
      console.log(response);
      setDataGenerated(response.data.data);
    } catch (error) {
      navigate("/error");
    }

    // if (dataGenerated === null) {
    //   return <CircularProgress />;
    // }
  };

  const handleSelectChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 120, width: 200 }}>
          <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-controlled-open-select"
            value={selectedCategory}
            label="Select a category data"
            size="small"
            onChange={handleSelectChange}
          >
            <MenuItem value="">
            <em>None</em>
          </MenuItem>
            {categories.map((eachCategory, index) => {
                return (
                  eachCategory === "credit_cards" ? <MenuItem key={index} value={eachCategory}> Credit Cards </MenuItem> : <MenuItem key={index} value={eachCategory}> {`${eachCategory[0].toUpperCase()}${eachCategory.slice(1)}`} </MenuItem>
                )
              })
            }
          </Select>
        </FormControl>
        <TextField
          id="outlined-number"
          label="Number of data items"
          type="number"
          size="small"
          value={numberOfDataItems}
          onChange={(e) => setNumberOfDataItems(e.target.value)}
          sx={{ width: 150 }}
        />
      </Box>
      <Button onClick={handleGenerateData} disabled={selectedCategory === "" ? true : false}> Generate data </Button>
      {dataGenerated != null &&
        dataGenerated.map((eachData, index) => {
          return (
            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} key={index}>
               {selectedCategory === "addresses" && <AddressesData eachData={eachData} />}
               {selectedCategory === "books" && <BooksData eachData={eachData} />}
               {selectedCategory === "companies" && <CompaniesData eachData={eachData} />}
               {selectedCategory === "credit_cards" && <CreditCardsData eachData={eachData} />}
               {selectedCategory === "persons" && <PersonsData eachData={eachData} />}
               {selectedCategory === "places" && <PlacesData eachData={eachData} />}
               {selectedCategory === "texts" && <TextData eachData={eachData} />}
               {selectedCategory === "users" && <UsersData eachData={eachData} />}
            </Box>
          );
        })}
    </Box>
  );
}

export default DataGenerator;
