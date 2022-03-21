import React, { FC } from 'react';

import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { GalleryData } from '../galary.model';

interface ImageCarouselProps {
	currentIndex: number;
	images: GalleryData[];
}

export const GalleryCarousel: FC<ImageCarouselProps> = ({ currentIndex, images }) => {
	return (
		<Swiper
			className="mySwiper"
			style={{ height: '100%' }}
			loop={true}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			slidesPerView={'auto'}
			centeredSlides={true}
			spaceBetween={30}
			initialSlide={currentIndex}
			modules={[Navigation, Pagination]}>
			{images.map(({ image }) => {
				return (
					<SwiperSlide>
						<Box
							component={'img'}
							src={image}
							sx={{
								height: '100%',
							}}
						/>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};
