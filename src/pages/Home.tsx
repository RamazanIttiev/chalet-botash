import React from 'react';
import { Promo } from '../views/promo/promo';
import { AboutContainer } from '../views/about/container/about.container';
import { Box } from '@mui/system';
import { GalleryContainer } from '../views/gallery/container/gallery.container';
import { Rooms } from '../views/rooms/rooms';

function Index() {
	return (
		<Box component="main" sx={{ flexGrow: 1 }}>
			<Promo />
			<AboutContainer />
			<GalleryContainer />
			<Rooms />
		</Box>
	);
}

export default Index;
