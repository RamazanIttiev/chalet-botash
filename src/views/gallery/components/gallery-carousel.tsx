import React, { FC } from 'react';

import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { GalleryData } from '../galary.model';

interface ImageCarouselProps {
	currentIndex: number;
	images: GalleryData[];
	height?: number;
	mt?: number | string;
}

export const GalleryCarousel: FC<ImageCarouselProps> = ({ currentIndex, images, height, mt }) => {
	return (
		<Swiper
			className="mySwiper"
			style={{ height, marginTop: mt }}
			slidesPerView={1}
			spaceBetween={148}
			loop={true}
			pagination={{
				clickable: true,
			}}
			navigation={true}
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
