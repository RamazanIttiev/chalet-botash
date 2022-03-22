import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import Typography from '../../components/Typography';
import Room1 from './IMAGE 2022-03-22 15:13:36.jpg';

export const RoomCard = () => {
	return (
		<Card
			sx={{
				maxWidth: 445,
				cursor: 'pointer',
				position: 'relative',
				'&:hover': {
					'&:after': {
						content: '""',
						position: 'absolute',
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						background: '#000',
						opacity: 0.5,
					},
				},
			}}>
			<CardMedia component="img" image={Room1} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Стандарт
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
					continents except Antarctica
				</Typography>
			</CardContent>
			<CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
				<Button size="small">Подробнее</Button>
				<Typography fontSize={16} variant="body2" color="text.secondary">
					3000 р
				</Typography>
			</CardActions>
		</Card>
	);
};
