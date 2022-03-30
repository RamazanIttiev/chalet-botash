import React, { FC, useEffect, useState } from 'react';
import { Gallery } from '../components/gallery';
import { airtableBase } from '../../../app';
import { mapGalleryData } from '../../../services/mappers';
import { GalleryData } from '../galary.model';

export const GalleryContainer: FC<{ handleOnView: (tabId: string) => void; activeTab: string }> = ({
	activeTab,
	handleOnView,
}) => {
	const imagesToShow = 6;
	const [data, setData] = useState<GalleryData[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		airtableBase('Gallery')
			.select({
				view: 'Grid view',
			})
			.eachPage(records => {
				// @ts-ignore
				return setData(mapGalleryData(records));
			});
	}, []);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const showModalImage = (imageId: number) => {
		toggleModal();
		setCurrentIndex(imageId);
	};

	const galleryDataSliced = data.slice(0, imagesToShow);
	return (
		<Gallery
			activeTab={activeTab}
			handleOnView={handleOnView}
			isModalOpen={isModalOpen}
			toggleModal={toggleModal}
			currentIndex={currentIndex}
			gallery={galleryDataSliced}
			showModalImage={showModalImage}
		/>
	);
};
