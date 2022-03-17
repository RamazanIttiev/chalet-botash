import React from 'react';
import { Gallery } from '../views/gallery/gallery';
import { Promo } from '../views/promo';
import { AboutContainer } from '../views/about/container/about.container';
import { Box } from '@mui/system';

function Index() {
	return (
		<Box component="main" sx={{ flexGrow: 1 }}>
			<Promo />
			<AboutContainer />
			<Gallery />
		</Box>
	);
}

export default Index;
