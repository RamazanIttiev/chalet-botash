import React, { FC } from 'react';
import { Grid, Skeleton } from '@mui/material';
import { GalleryData } from '../galary.model';

interface GallerySkeletonProps {
	images: GalleryData[];
	screenWidth: number | null;
}

export const GallerySkeleton: FC<GallerySkeletonProps> = ({ images, screenWidth }) => {
	return (
		<Grid container spacing={1} justifyContent={'center'}>
			{screenWidth && screenWidth >= 480 ? (
				Array.from([images.length]).map((_, index) => (
					<Grid key={index} item md={4} sm={4} xs={11}>
						<Skeleton variant={'rectangular'} sx={{ height: 330 }} />
					</Grid>
				))
			) : (
				<Grid item md={4} sm={4} xs={11}>
					<Skeleton variant={'rectangular'} sx={{ height: 330 }} />
				</Grid>
			)}
		</Grid>
	);
};
