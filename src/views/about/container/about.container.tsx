import React, { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { About } from '../components/about';
import { airtableBase } from '../../../app';
import { AboutData } from '../about.model';
import { mapAboutData } from '../../../services/mappers';
import theme from '../../../theme';

export const AboutContainer: FC = () => {
	const [data, setData] = useState<AboutData[]>([]);

	useEffect(() => {
		airtableBase('About')
			.select({
				view: 'Grid view',
			})
			.eachPage(records => {
				// @ts-ignore
				return setData(mapAboutData(records));
			});
	}, []);

	return (
		<Box
			id="about"
			component="section"
			sx={{
				display: 'flex',
				overflow: 'hidden',
				backgroundColor: 'secondary.light',
				p: '81px 0',

				[theme.breakpoints.down('sm')]: {
					p: '48px 0',
				},
			}}>
			<Container
				sx={{
					display: 'flex',
					position: 'relative',
					backgroundColor: 'secondary.light',
				}}>
				<About data={data} />
			</Container>
		</Box>
	);
};
