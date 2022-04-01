import React, { FC } from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material';
import Typography from '../../components/Typography';
import { RoomsData } from './rooms.model';

export const RoomCard: FC<RoomsData> = ({ title, description, image, price }) => {
	return (
		<Card
			sx={{
				width: 445,
				cursor: 'pointer',
				position: 'relative',
			}}>
			<CardActionArea>
				<CardMedia component="img" alt={title} image={image} height={400} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{description}
					</Typography>
				</CardContent>
				<CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
					<Button size="small">Подробнее</Button>
					<Typography fontSize={16} variant="body2" color="text.secondary">
						{price} ₽
					</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};
