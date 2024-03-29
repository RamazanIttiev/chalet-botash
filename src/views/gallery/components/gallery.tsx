import React, { FC } from 'react';
import { GalleryData } from '../galary.model';
import { GalleryCarousel } from './gallery-carousel';
import Typography from '../../../components/Typography';
import { CurrentTabProps } from '../../../models/active-tab.model';
import { Grid, Modal } from '@mui/material';
import { ImageBackdrop, ImageIconButton } from '../theme/gallery.styled';
import { Box } from '@mui/system';
import theme from '../../../theme';

interface GalleryProps extends CurrentTabProps {
	isModalOpen: boolean;
	currentIndex: number;
	images: GalleryData[];
	toggleModal: () => void;
	screenWidth: number | null;
	sliderImages: GalleryData[];
	showModalImage: (imageId: number) => void;
}

export const Gallery: FC<GalleryProps> = ({
	images,
	screenWidth,
	isModalOpen,
	toggleModal,
	currentIndex,
	sliderImages,
	showModalImage,
}) => {
	return (
		<React.Fragment>
			<Typography variant="h4" align="center" component="h2" mb={8}>
				Галерея
			</Typography>
			{screenWidth && screenWidth >= 480 ? (
				<Grid container spacing={1}>
					{images.map(({ id, image }, index) => (
						<Grid item md={4} sm={4} xs={12} key={id}>
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
									{index === 5 && (
										<Typography component="h3" variant="h6" color="inherit">
											+ еще
										</Typography>
									)}
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
		</React.Fragment>
	);
};
