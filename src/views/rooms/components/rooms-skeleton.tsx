import React from 'react';
import { Grid, Skeleton } from '@mui/material';

import theme from '../../../theme';

const RoomsSkeleton = () => {
	return (
		<Grid
			item
			md={6}
			sm={8}
			xs={11}
			sx={{
				justifyContent: 'center',
				display: 'flex',
			}}>
			<Skeleton
				variant={'rectangular'}
				sx={{
					height: 400,
					width: '100%',

					[theme.breakpoints.down('md')]: {
						height: 550,
					},
				}}
			/>
		</Grid>
	);
};

export default RoomsSkeleton;
