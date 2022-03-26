import React, { FC } from 'react';
import { Box, Grid } from '@mui/material';
import Typography from '../../../components/Typography';
import { AboutData } from '../about.model';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import theme from '../../../theme';

interface AboutProps {
	data: AboutData[];
}

export const About: FC<AboutProps> = ({ data }) => {
	return (
		<Grid container spacing={8} sx={{ justifyContent: 'center' }}>
			{data?.map(({ title, image, text, id }) => {
				return (
					<Grid item key={id} xs={12} md={10}>
						<Grid
							container
							sx={{
								justifyContent: 'space-between',
								flexDirection: id % 2 === 0 ? 'row' : 'row-reverse',
							}}>
							<Grid item sm={3}>
								<Box
									component={'img'}
									data-src={image}
									className="lazyload"
									alt={title}
									sx={{
										width: 200,
										height: 200,
										border: '1px solid',
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
