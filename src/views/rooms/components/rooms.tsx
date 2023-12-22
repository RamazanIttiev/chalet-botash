import React, { FC } from 'react';
import { Grid } from '@mui/material';
import RoomsSkeleton from './rooms-skeleton';
import { RoomsProps } from '../models/rooms.model';
import { RoomCard } from './room-card';

export const Rooms: FC<RoomsProps> = ({ data }) => {
	console.log(data);
	return (
		<Grid container spacing={8} sx={{ justifyContent: 'center' }}>
			{data.length === 0
				? Array.from([data.length]).map((_, index) => <RoomsSkeleton key={index} />)
				: data.map(({ title, description, images, id, price }) => {
						return (
							<Grid
								key={id}
								item
								md={6}
								xs={11}
								sx={{
									justifyContent: 'center',
									display: 'flex',
								}}>
								<RoomCard title={title} description={description} images={images} price={price} />
							</Grid>
						);
				  })}
		</Grid>
	);
};
