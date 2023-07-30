import React from 'react';
import { Box } from '@mui/system';
import { Promo } from '../views/promo/promo';
import { ReviewsContainer } from '../views/reviews/reviews';
import { AboutContainer } from 'src/views/about/container/about.container';
import { RoomsContainer } from 'src/views/rooms/containers/rooms-container';
import { GalleryContainer } from 'src/views/gallery/container/gallery.container';

interface HomeProps {
	currentTab: string;
	handleOnView: (tabId: string) => void;
}

export const Home = ({ currentTab, handleOnView }: HomeProps) => {
	return (
		<Box component="main" sx={{ flexGrow: 1 }}>
			<Promo currentTab={currentTab} handleOnView={handleOnView} />
			<AboutContainer currentTab={currentTab} handleOnView={handleOnView} />
			<GalleryContainer currentTab={currentTab} handleOnView={handleOnView} />
			<RoomsContainer currentTab={currentTab} handleOnView={handleOnView} />
			<ReviewsContainer currentTab={currentTab} handleOnView={handleOnView} />
		</Box>
	);
};
