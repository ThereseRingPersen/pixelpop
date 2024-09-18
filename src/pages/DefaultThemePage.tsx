import * as React from 'react';
import { CssVarsProvider , } from '@mui/joy/styles';
import { Button, Typography, Box } from '@mui/joy';

function DefaultThemePage() {
  return (
    <CssVarsProvider>
      <Box sx={{ padding: 2 }}>
        <Typography level="h1">90's Themed Page</Typography>
        <Button variant="solid" color="primary">
          Default's Button
        </Button>
      </Box>
    </CssVarsProvider>
  );
}

export default DefaultThemePage;
