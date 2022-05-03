import React, { FC, lazy } from 'react';
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

const RoomsContainer = lazy(() =>
	import('../views/rooms/containers/rooms-container').then(({ RoomsContainer }) => ({
		default: RoomsContainer,
	})),
);

interface HomeProps {
	currentTab: string;
	handleOnView: (tabId: string) => void;
}

export const Home: FC<HomeProps> = ({ currentTab, handleOnView }) => {
	return (
		<Box component="main" sx={{ flexGrow: 1 }}>
			<Promo currentTab={currentTab} handleOnView={handleOnView} />
			<AboutContainer currentTab={currentTab} handleOnView={handleOnView} />
			<GalleryContainer currentTab={currentTab} handleOnView={handleOnView} />
			<RoomsContainer currentTab={currentTab} handleOnView={handleOnView} />
		</Box>
	);
};
