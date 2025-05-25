import React, { FC, useEffect, useRef, useState } from 'react';
import { Rooms } from '../components/rooms';
import { Box, Container } from '@mui/material';
import { RoomCardProps } from '../models/rooms.model';
import Typography from '../../../components/Typography';
import { mapRoomsData } from '../../../services/mappers';
import { CurrentTabProps } from '../../../models/active-tab.model';
import { useCustomIntersectionObserver } from '../../../hooks/intersectionObserver';
import { fetchAirtableRecords } from '../../../api';

export const RoomsContainer: FC<CurrentTabProps> = ({ handleOnView, currentTab }) => {
	const [data, setData] = useState<RoomCardProps[]>([]);
	const ref = useRef(null);

	useCustomIntersectionObserver(ref, currentTab, handleOnView);

	useEffect(() => {
		const fetchPromoData = async () => {
			try {
				const records = await fetchAirtableRecords({
					tableName: 'Rooms',
				});

				// @ts-ignore
				return setData(mapRoomsData(records));
			} catch (error) {
				console.error('Error fetching promo data:', error);
			}
		};

		fetchPromoData().catch(console.error);
	}, []);

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
				<Rooms data={data} />
			</Container>
		</Box>
	);
};
