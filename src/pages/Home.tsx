import React, { lazy } from 'react';
import { Promo } from '../views/promo/promo';
import { Box } from '@mui/system';

const AboutContainer = lazy(() =>
	import('../views/about/container/about.container').then(({ AboutContainer }) => ({
		default: AboutContainer,
	})),
);

const GalleryContainer = lazy(() =>
	import('../views/gallery/container/gallery.container').then(({ GalleryContainer }) => ({
		default: GalleryContainer,
	})),
);

const Rooms = lazy(() =>
	import('../views/rooms/rooms').then(({ Rooms }) => ({
		default: Rooms,
	})),
);

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
