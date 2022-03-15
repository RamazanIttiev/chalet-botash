import React from 'react';
import { Gallery } from '../views/gallery/Gallery';
import { Promo } from '../views/Promo';
import { Values } from '../views/values/Values';
import { Box } from '@mui/system';

function Index() {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Promo />
      <Values />
      <Gallery />
    </Box>
  );
}

export default Index;
