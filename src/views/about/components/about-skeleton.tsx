import React, { FC } from 'react';
import { Grid, Skeleton } from '@mui/material';
import theme from '../../../theme';

interface AboutSkeletonProps {
	id: number;
}

export const AboutSkeleton: FC<AboutSkeletonProps> = ({ id }) => {
	return (
		<Grid item xs={12} md={11}>
			<Grid
				container
				sx={{
					alignItems: 'center',
					justifyContent: 'space-between',
					flexDirection: id % 2 === 0 ? 'row' : 'row-reverse',
				}}>
				<Grid item sm={3}>
					<Skeleton
						sx={{
							width: 200,
							height: 200,
							borderRadius: '100%',
							display: 'block',
							transform: 'none',

							[theme.breakpoints.down('sm')]: {
								display: 'none',
							},
						}}
					/>
				</Grid>
				<Grid item sm={8} sx={{ width: '100%' }}>
					{Array.from([1, 2, 3]).map(() => (
						<Skeleton
							sx={{
								display: 'flex',
								flexDirection: 'column',
								textAlign: 'center',
							}}
						/>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};
