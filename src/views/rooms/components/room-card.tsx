import React, { FC } from 'react';
import { RoomCardProps } from '../models/rooms.model';
import Typography from '../../../components/Typography';
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material';

export const RoomCard: FC<RoomCardProps> = ({ title, description, image, price }) => {
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
				</CardContent>
				<CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
					<Typography fontSize={16} variant="body2" color="text.secondary">
						{price} ₽
					</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};
