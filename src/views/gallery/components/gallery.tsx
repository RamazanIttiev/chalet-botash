import React, { FC, useRef } from 'react';
import { Box } from '@mui/system';
import { Grid, Modal } from '@mui/material';
import { GalleryData } from '../galary.model';
import Container from '@mui/material/Container';
import { ActiveTabProps } from '../../../models/active-tab.model';
import { GalleryCarousel } from './gallery-carousel';
import Typography from '../../../components/Typography';
import { useCustomIntersectionObserver } from '../../../hooks/intersectionObserver';

import { ImageBackdrop, ImageIconButton } from '../theme/gallery.styled';
import theme from '../../../theme';
import { useWindowDimensions } from '../../../hooks/useWindowDeminision';

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
	const screen = useWindowDimensions();

	useCustomIntersectionObserver(ref, activeTab, handleOnView);

	return (
		<Container id="gallery" ref={ref} component="section" sx={{ p: '64px 0', scrollMarginTop: '64px' }}>
			<Typography variant="h4" align="center" component="h2" mb={8}>
				Галерея
			</Typography>
			{screen.width && screen.width >= 480 ? (
				<Grid container spacing={1}>
					{images.map(({ id, image }, index) => (
						<Grid item md={4} sm={4} xs={12}>
							<ImageIconButton
								aria-label={`Gallery_image_${id}`}
								key={id}
								onClick={() => showModalImage(index)}
								style={{
									width: '100%',
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
								<ImageBackdrop
									className="imageBackdrop"
									style={{
										[theme.breakpoints.down('md')]: {
											display: 'none',

											'&:last-child': {
												display: 'block',
											},
										},
									}}
								/>
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
						</Grid>
					))}

					<Modal
						open={isModalOpen}
						onClose={toggleModal}
						sx={{
							width: '60%',
							height: '70%',
							margin: '0 auto',
							top: '15%',

							[theme.breakpoints.down('md')]: {
								width: '95%',
							},
						}}>
						<GalleryCarousel images={sliderImages} currentIndex={currentIndex} />
					</Modal>
				</Grid>
			) : (
				<GalleryCarousel
					images={sliderImages}
					currentIndex={currentIndex}
					height={400}
					mt={screen.width && screen.width >= 480 ? 0 : '64px'}
				/>
			)}
		</Container>
	);
};
