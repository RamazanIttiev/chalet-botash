import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { ButtonBase, Modal } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/styles';
import { Box, Theme } from '@mui/system';
import { galleryData } from './galary.model';
import Typography from '../../components/Typography';
import ImageCarousel from './gallery-carousel';

const ImageBackdrop = styled('div')(() => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	background: '#000',
	opacity: 0.5,
}));

const ImageIconButton = styled(ButtonBase)(({ theme }: { theme: Theme }) => ({
	position: 'relative',
	display: 'block',
	padding: 0,
	borderRadius: 0,
	height: '40vh',
	[theme.breakpoints.down('md')]: {
		height: 100,
	},
	'&:hover': {
		zIndex: 1,
	},
	'&:hover .imageBackdrop': {
		opacity: 0,
	},
	'&:hover .imageMarked': {
		opacity: 0.15,
	},
	'&:hover .imageTitle': {
		border: '4px solid currentColor',
	},
	'& .imageTitle': {
		position: 'relative',
		padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
	},
	'& .imageMarked': {
		height: 3,
		width: 18,
		background: theme.palette.common.white,
		position: 'absolute',
		bottom: -2,
		left: 'calc(50% - 9px)',
	},
}));

export const Gallery = () => {
	const { t } = useTranslation();

	const imagesToShow = 6;
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const showModalImage = (imageId: number) => {
		toggleModal();
		setCurrentIndex(imageId);
	};

	const tempImagesArray = galleryData.slice(0, imagesToShow);

	return (
		<Container id="gallery" component="section" sx={{ p: '64px 0' }}>
			<Typography variant="h4" align="center" component="h2" mb={8}>
				{t('gallery.title')}
			</Typography>
			<Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
				{tempImagesArray.map(({ image, title, width }, index) => (
					<ImageIconButton
						key={title}
						onClick={() => showModalImage(index)}
						style={{
							width,
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
								{index === 5 && '+ more'}
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
					<ImageCarousel images={galleryData} currentIndex={currentIndex} />
				</Modal>
			</Box>
		</Container>
	);
};
