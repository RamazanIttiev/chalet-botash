import React, { FC, useEffect, useRef, useState } from 'react';
import { RoomCard } from './room-card';
import { airtableBase } from '../../app';
import { RoomsData } from './rooms.model';
import { currentTabProps } from '../../models/active-tab.model';
import { Box, Container, Grid } from '@mui/material';
import Typography from '../../components/Typography';
import { mapRoomsData } from '../../services/mappers';
import { useCustomIntersectionObserver } from '../../hooks/intersectionObserver';

export const Rooms: FC<currentTabProps> = ({ handleOnView, currentTab }) => {
	const [data, setData] = useState<RoomsData[]>([]);
	const ref = useRef(null);

	useEffect(() => {
		if (currentTab === 'rooms' && data.length === 0) {
			airtableBase('Rooms')
				.select({
					view: 'Grid view',
				})
				.eachPage(records => {
					// @ts-ignore
					return setData(mapRoomsData(records));
				});
		}
	}, [currentTab, data.length]);

	useCustomIntersectionObserver(ref, currentTab, handleOnView);

	return (
		<Box
			ref={ref}
			id="rooms"
			component="section"
			sx={{
				scrollMarginTop: '64px',
				backgroundColor: 'secondary.light',
				p: '84px 0',
			}}>
			<Typography variant="h4" align="center" component="h2" mb={8}>
				Наши номера
			</Typography>
			<Container sx={{ backgroundColor: 'secondary.light' }}>
				<Grid container spacing={8} sx={{ justifyContent: 'center' }}>
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
