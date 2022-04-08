import React, { FC, useRef } from 'react';
import { Box } from '@mui/system';
import { Modal } from '@mui/material';
import { GalleryData } from '../galary.model';
import Container from '@mui/material/Container';
import { ActiveTabProps } from '../../../models/active-tab.model';
import { GalleryCarousel } from './gallery-carousel';
import Typography from '../../../components/Typography';
import { useCustomIntersectionObserver } from '../../../hooks/intersectionObserver';

import { ImageBackdrop, ImageIconButton } from '../theme/gallery.styled';

interface GalleryProps extends ActiveTabProps {
	currentIndex: number;
	isModalOpen: boolean;
	images: GalleryData[];
	sliderImages: GalleryData[];
	toggleModal: () => void;
	showModalImage: (imageId: number) => void;
}

export const Gallery: FC<GalleryProps> = ({
	currentIndex,
	images,
	sliderImages,
	toggleModal,
	isModalOpen,
	showModalImage,
	handleOnView,
	activeTab,
}) => {
	const ref = useRef(null);

	useCustomIntersectionObserver(ref, activeTab, handleOnView);

	return (
		<Container ref={ref} id="gallery" component="section" sx={{ p: '64px 0' }}>
			<Typography variant="h4" align="center" component="h2">
				Галерея
			</Typography>
			<Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
				{images.map(({ id, image }, index) => (
					<ImageIconButton
						aria-label={`Gallery_image_${id}`}
						key={id}
						onClick={() => showModalImage(index)}
						style={{
							width: '33%',
							border: '5px solid white',
						}}>
						<Box
							sx={{
								position: 'absolute',
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								backgroundSize: 'cover',
								backgroundPosition: 'center 40%',
								backgroundImage: `url(${image})`,
							}}
						/>
						<ImageBackdrop className="imageBackdrop" />
						<Box
							sx={{
								position: 'absolute',
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: 'common.white',
							}}>
							<Typography component="h3" variant="h6" color="inherit">
								{id === 6 && '+ more'}
							</Typography>
						</Box>
					</ImageIconButton>
				))}

				<Modal
					open={isModalOpen}
					onClose={toggleModal}
					sx={{
						width: '60%',
						height: '70%',
						margin: '0 auto',
						top: '15%',
					}}>
					<GalleryCarousel images={sliderImages} currentIndex={currentIndex} />
				</Modal>
			</Box>
		</Container>
	);
};
