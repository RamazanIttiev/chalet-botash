import React from 'react';
import { RoomCard } from './room-card';
import { Box, Container, Grid } from '@mui/material';
import Typography from '../../components/Typography';

export const Rooms = () => {
	return (
		<Box
			id="rooms"
			component="section"
			sx={{
				overflow: 'hidden',
				backgroundColor: 'secondary.light',
				p: '81px 0',
			}}>
			<Container sx={{ p: '64px 0', backgroundColor: 'secondary.light' }}>
				<Typography variant="h4" align="center" component="h2" mb={8}>
					Наши номера
				</Typography>
				<Grid container sx={{ justifyContent: 'center' }}>
					<Grid
						item
						md={6}
						xs={11}
						sx={{
							justifyContent: 'center',
							display: 'flex',
						}}>
						<RoomCard />
					</Grid>
					<Grid
						item
						md={6}
						xs={11}
						sx={{
							justifyContent: 'center',
							display: 'flex',
						}}>
						<RoomCard />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
