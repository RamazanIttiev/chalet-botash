import React, { FC } from 'react';
import { Grid, Skeleton } from '@mui/material';

interface GallerySkeletonProps {
	screenWidth: number | null;
}

export const GallerySkeleton: FC<GallerySkeletonProps> = ({ screenWidth }) => {
	return (
		<Grid container spacing={1} justifyContent={'center'}>
			{screenWidth && screenWidth >= 480 ? (
				Array.from([1, 2, 3, 4, 5, 6]).map((_, index) => (
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
