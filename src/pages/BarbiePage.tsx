import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import { Button, Typography, Box } from '@mui/joy';
import barbieTheme from '../themes/barbieTheme';

function BarbiePage() {
  return (
    <CssVarsProvider theme={barbieTheme}>
      <Box sx={{ padding: 2 }}>
        <Typography level="h1">Barbie Themed Page</Typography>
        <Button variant="solid" color="primary">
          Barbie Button
        </Button>
      </Box>
    </CssVarsProvider>
  );
}

export default BarbiePage;
