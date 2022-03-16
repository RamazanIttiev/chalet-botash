import React from 'react';
import { Gallery } from '../views/gallery/gallery';
import { Promo } from '../views/Promo';
import { InformationContainer } from '../views/information/container/information.container';
import { Box } from '@mui/system';

function Index() {
	return (
		<Box component="main" sx={{ flexGrow: 1 }}>
			<Promo />
			<InformationContainer />
			<Gallery />
		</Box>
	);
}

export default Index;
