import React, { useEffect, useState } from 'react';
import { RoomCard } from './room-card';
import { Box, Container, Grid } from '@mui/material';
import Typography from '../../components/Typography';
import { airtableBase } from '../../app';
import { RoomsData } from './rooms.model';
import { mapRoomsData } from '../../services/mappers';

export const Rooms = () => {
	const [data, setData] = useState<RoomsData[]>([]);

	useEffect(() => {
		airtableBase('Rooms')
			.select({
				view: 'Grid view',
			})
			.eachPage(records => {
				// @ts-ignore
				return setData(mapRoomsData(records));
			});
	}, []);

	return (
		<Box
			id="rooms"
			component="section"
			sx={{
				overflow: 'hidden',
				backgroundColor: 'secondary.light',
				p: '64px 0',
			}}>
			<Container sx={{ backgroundColor: 'secondary.light' }}>
				<Typography variant="h4" align="center" component="h2" mb={8}>
					Наши номера
				</Typography>
				<Grid container sx={{ justifyContent: 'center' }}>
					{data.map(({ title, description, image, id, price }) => {
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
								<RoomCard title={title} description={description} image={image} price={price} />
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</Box>
	);
};