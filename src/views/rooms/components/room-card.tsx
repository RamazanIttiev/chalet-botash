import React, { FC } from 'react';
import { RoomCardProps } from '../models/rooms.model';
import Typography from '../../../components/Typography';
import { Box, Card, CardActionArea, CardContent, CardMedia, CircularProgress } from '@mui/material';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export const RoomCard: FC<RoomCardProps> = ({ title, description, images, price }) => {
	return (
		<Card
			sx={{
				width: 445,
				cursor: 'pointer',
				position: 'relative',
			}}>
			<CardActionArea>
				{images.length === 1 ? (
					<CardMedia component="img" alt={title} image={images[0].url} height={300} />
				) : (
					<Swiper
						className="mySwiper"
						slidesPerView={1}
						style={{ height: '300px' }}
						spaceBetween={148}
						loop={true}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Navigation, Pagination]}
						preloadImages={false}
						lazy={true}>
						{images?.map(({ url }, i) => {
							return (
								<SwiperSlide>
									<Box
										component={'img'}
										alt={`gallery image ${i}`}
										className="swiper-lazy"
										data-src={url}
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
				)}
			</CardActionArea>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography
					sx={{ justifyContent: 'space-between', mt: 6 }}
					fontSize={14}
					variant="body1"
					color="text.secondary">
					{description}
				</Typography>
				<Typography
					sx={{ justifyContent: 'space-between', mt: 1, fontWeight: 800 }}
					fontSize={21}
					variant="body2"
					color="text.secondary">
					{price} ₽
				</Typography>
			</CardContent>
		</Card>
	);
};
