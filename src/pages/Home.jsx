import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'
import { Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';

function Home() {
  return (
    <Box>
        <Box>
            <Typography variant="h5"> Generate Fictitious Data Easily with Fakeasy! </Typography>
            <Typography variant="body"> Select a data category and start generating fictitious information for your testing and development needs. </Typography>
        </Box>
        <Box>
            <Typography variant="body"> Adresses </Typography>
            <Typography variant="body"> Books </Typography>
            <Typography variant="body"> Companies </Typography>
            <Typography variant="body"> Credit Cards </Typography>
            <Typography variant="body"> Images </Typography>
            <Typography variant="body"> Persons </Typography>
            <Typography variant="body"> Places </Typography>
            <Typography variant="body"> Products </Typography>
            <Typography variant="body"> Texts </Typography>
            <Typography variant="body"> Users </Typography>
        </Box>
        <Button component={RouterLink} to="/generate-data"> Get started </Button>
    </Box>
  )
}

export default Home