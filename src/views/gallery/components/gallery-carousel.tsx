import React, { FC } from 'react';

import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { GalleryData } from '../galary.model';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

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
							data-src={image}
							className="lazyload"
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
