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

const Rooms = lazy(() =>
	import('../views/rooms/rooms').then(({ Rooms }) => ({
		default: Rooms,
	})),
);

interface HomeProps {
	handleOnView: (tabId: string) => void;
	activeTab: string;
}

export const Home: FC<HomeProps> = ({ activeTab, handleOnView }) => {
	return (
		<Box component="main" sx={{ flexGrow: 1 }}>
			<Promo activeTab={activeTab} handleOnView={handleOnView} />
			<AboutContainer activeTab={activeTab} handleOnView={handleOnView} />
			<GalleryContainer activeTab={activeTab} handleOnView={handleOnView} />
			<Rooms activeTab={activeTab} handleOnView={handleOnView} />
		</Box>
	);
};
