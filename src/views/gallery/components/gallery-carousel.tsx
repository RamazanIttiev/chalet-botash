import React, { FC } from 'react';

import { Box, CircularProgress } from '@mui/material';
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
			modules={[Navigation, Pagination]}
			preloadImages={false}
			lazy={true}>
			{images.map(({ image }, i) => {
				return (
					<SwiperSlide>
						<Box
							component={'img'}
							alt={`gallery image ${i}`}
							className="swiper-lazy"
							data-src={image}
							style={{
								height: '100%',
								width: 'auto',
							}}
						/>
						<div className="swiper-lazy-preloader">
							<CircularProgress color="secondary" />
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};
