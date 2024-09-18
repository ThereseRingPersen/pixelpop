import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import { Button, Typography, Box } from '@mui/joy';
import ninetiesTheme from '../themes/NinetiesTheme';

function NinetiesPage() {
  return (
    <CssVarsProvider theme={ninetiesTheme}>
      <Box sx={{ padding: 2 }}>
        <Typography level="h1">90's Themed Page</Typography>
        <Button variant="solid" color="primary">
          90's Button
        </Button>
      </Box>
    </CssVarsProvider>
  );
}

export default NinetiesPage;
