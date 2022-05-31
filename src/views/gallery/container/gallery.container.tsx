import React, { FC, useEffect, useRef, useState } from 'react';
import { Container } from '@mui/material';
import { airtableBase } from '../../../app';
import { GalleryData } from '../galary.model';
import { Gallery } from '../components/gallery';
import { mapGalleryData } from '../../../services/mappers';
import { useWindowDimensions } from '../../../hooks/useWindowDeminision';
import { useCustomIntersectionObserver } from '../../../hooks/intersectionObserver';

export const GalleryContainer: FC<{ handleOnView: (tabId: string) => void; currentTab: string }> = ({
	currentTab,
	handleOnView,
}) => {
	const imagesToShow = 6;
	const [data, setData] = useState<GalleryData[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const ref = useRef(null);
	const screen = useWindowDimensions();

	useCustomIntersectionObserver(ref, currentTab, handleOnView);

	useEffect(() => {
		airtableBase('Gallery')
			.select({
				view: 'Grid view',
			})
			.eachPage(records => {
				// @ts-ignore
				return setData(mapGalleryData(records));
			});
	}, [data.length]);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const showModalImage = (imageId: number) => {
		toggleModal();
		setCurrentIndex(imageId);
	};

	const galleryDataSliced = data.slice(0, imagesToShow);

	return (
		<Container id="gallery" ref={ref} component="section" sx={{ p: '64px 0', scrollMarginTop: '64px' }}>
			<Gallery
				screenWidth={screen.width}
				currentTab={currentTab}
				handleOnView={handleOnView}
				isModalOpen={isModalOpen}
				toggleModal={toggleModal}
				currentIndex={currentIndex}
				sliderImages={data}
				images={galleryDataSliced}
				showModalImage={showModalImage}
			/>
		</Container>
	);
};
