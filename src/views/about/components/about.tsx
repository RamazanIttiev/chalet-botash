import React, { FC } from 'react';
import { Box, Grid } from '@mui/material';
import Typography from '../../../components/Typography';
import { AboutData } from '../about.model';
import theme from '../../../theme';
import { AboutSkeleton } from './about-skeleton';

interface AboutProps {
	data: AboutData[];
}

export const About: FC<AboutProps> = ({ data }) => {
	return (
		<Grid container spacing={8} sx={{ justifyContent: 'center' }}>
			{data.length === 0
				? Array.from([1, 2, 3]).map(id => <AboutSkeleton key={id} id={id} />)
				: data.map(({ title, image, text, id }) => {
						return (
							<Grid
								item
								key={id}
								xs={12}
								md={12}
								sx={{
									display: 'flex',
									alignItems: 'end',
									justifyContent: 'space-between',
									flexDirection: id % 2 === 0 ? 'row' : 'row-reverse',
								}}>
								<Box
									component={'img'}
									src={image}
									alt={title}
									width={200}
									height={200}
									sx={{
										borderRadius: '100%',
										margin: id % 2 === 0 ? '0 16px 0 0' : '0 0 0 16px',
										display: 'block',

										[theme.breakpoints.down('sm')]: {
											display: 'none',
										},
									}}
								/>
								<Box
									sx={{
										maxWidth: '70%',
										display: 'flex',
										flexDirection: 'column',
										textAlign: 'center',

										[theme.breakpoints.down('sm')]: {
											maxWidth: '100%',
										},
									}}>
									<Typography variant="h6" sx={{ my: 5 }}>
										{title}
									</Typography>
									<Typography variant="h5" component={'p'} fontSize={16} lineHeight={1.6}>
										{text}
									</Typography>
								</Box>
							</Grid>
						);
				  })}
		</Grid>
	);
};
