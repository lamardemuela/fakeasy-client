import React, { useContext, useEffect, useState } from "react";
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import heroIllustration from "../assets/illustration-data.png";
import place from "../assets/place.png";
import book from "../assets/book.png";
import company from "../assets/company.png";
import creditCard from "../assets/credit-card.png";
import person from "../assets/person.png";
import address from "../assets/address.png";
import text from "../assets/text.png";
import { AuthContext } from "../context/auth.context";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Home() {
  const { isLoggedIn } = useContext(AuthContext);

  const [downloads, setDownloads] = useState([]);

  useEffect(() => {
    const savedDownloads = JSON.parse(localStorage.getItem("downloads")) || [];
    setDownloads(savedDownloads);
    console.log(downloads);
  }, []);

  const getFileContent = (fileName) => JSON.parse(localStorage.getItem(fileName))

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: "100%",
      }}
    >
      {isLoggedIn === false && (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "32px",
            }}
          >
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={heroIllustration} alt="illustration" width="500px" />
            </Box>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 700 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "16px",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: "64px",
                  fontWeight: 800,
                  width: "100%",
                  textAlign: "left",
                  lineHeight: "1",
                }}
              >
                Generate fake data easily
              </Typography>
              <Typography
                variant="body"
                sx={{ width: "100%", textAlign: "left" }}
              >
                Select a data category and start generating fictitious
                information for your testing and development needs.
              </Typography>
              <Button
                color="primary"
                variant="contained"
                component={RouterLink}
                to="/generate-data"
              >
                Get started
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderTop: "1px solid",
              borderColor: "divider",
              marginTop: "24px",
              marginBottom: "56px",
              gap: "48px",
            }}
          >
            <Typography
              sx={{ marginTop: "56px", fontWeight: "700" }}
              variant="h6"
            >
              {" "}
              Categories{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <Card
                component={motion.div}
                whileHover={{ scale: 1.1 }}
                variant="elevation"
              >
                <CardContent className="homeCard columnCenter">
                  <img src={address} alt="address" width="40px" />
                  <Typography variant="body">Addresses</Typography>
                </CardContent>
              </Card>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.1 }}
                variant="elevation"
              >
                <CardContent className="homeCard columnCenter">
                  <img src={book} alt="book" width="40px" />
                  <Typography variant="body">Books</Typography>
                </CardContent>
              </Card>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.1 }}
                variant="elevation"
              >
                <CardContent className="homeCard columnCenter">
                  <img src={company} alt="company" width="40px" />
                  <Typography variant="body">Companies</Typography>
                </CardContent>
              </Card>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.1 }}
                variant="elevation"
              >
                <CardContent className="homeCard columnCenter">
                  <img src={creditCard} alt="credit card" width="40px" />
                  <Typography variant="body">Credit Cards</Typography>
                </CardContent>
              </Card>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.1 }}
                variant="elevation"
              >
                <CardContent className="homeCard columnCenter">
                  <img src={person} alt="person" width="40px" />
                  <Typography variant="body">Persons</Typography>
                </CardContent>
              </Card>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.1 }}
                variant="elevation"
              >
                <CardContent className="homeCard columnCenter">
                  <img src={place} alt="place" width="40px" />
                  <Typography variant="body">Places</Typography>
                </CardContent>
              </Card>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.1 }}
                variant="elevation"
              >
                <CardContent className="homeCard columnCenter">
                  <img src={text} alt="text" width="40px" />
                  <Typography variant="body">Texts</Typography>
                </CardContent>
              </Card>
            </Box>
            <Button
              color="primary"
              variant="contained"
              component={RouterLink}
              to="/generate-data"
            >
              Go Data Generator
            </Button>
          </Box>
        </>
      )}

      {isLoggedIn === true && (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h6"> Your lasts downloads </Typography>
            <Button
              color="primary"
              variant="contained"
              component={RouterLink}
              to="/generate-data"
            >
              Generate new data
            </Button>
          </Box>

          {downloads.map((eachDownload, index) => {
            return (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="primary" />}
                  aria-controls="panel1-content"
                >
                  {eachDownload.fileName}
                </AccordionSummary>
                <AccordionDetails> {JSON.stringify(getFileContent(eachDownload.fileName), null, 2)} </AccordionDetails>
              </Accordion>
            );
          })}
        </>
      )}
    </Box>
  );
}

export default Home;
