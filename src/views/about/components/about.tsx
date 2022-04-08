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
	console.log(data.length);
	return (
		<Grid container spacing={8} sx={{ justifyContent: 'center' }}>
			{data.length === 0
				? Array.from([1, 2, 3]).map(id => <AboutSkeleton id={id} />)
				: data.map(({ title, image, text, id }) => {
						return (
							<Grid item key={id} xs={12} md={10}>
								<Grid
									container
									sx={{
										alignItems: 'end',
										justifyContent: 'space-between',
										flexDirection: id % 2 === 0 ? 'row' : 'row-reverse',
									}}>
									<Grid item sm={3}>
										<Box
											component={'img'}
											src={image}
											alt={title}
											sx={{
												width: 200,
												height: 200,
												borderRadius: '100%',
												display: 'block',

												[theme.breakpoints.down('sm')]: {
													display: 'none',
												},
											}}
										/>
									</Grid>
									<Grid item sm={8}>
										<Box
											sx={{
												display: 'flex',
												flexDirection: 'column',
												textAlign: 'center',
											}}>
											<Typography variant="h6" sx={{ my: 5 }}>
												{title}
											</Typography>
											<Typography variant="h5" component={'p'} fontSize={16} lineHeight={1.6}>
												{text}
											</Typography>
										</Box>
									</Grid>
								</Grid>
							</Grid>
						);
				  })}
		</Grid>
	);
};
