import React, { FC, useEffect, useRef, useState } from 'react';
import theme from '../../../theme';
import Box from '@mui/material/Box';
import { AboutData } from '../about.model';
import { About } from '../components/about';
import { airtableBase } from '../../../app';
import Container from '@mui/material/Container';
import { mapAboutData } from '../../../services/mappers';
import { useCustomIntersectionObserver } from '../../../hooks/intersectionObserver';
import { ActiveTabProps } from '../../../models/active-tab.model';
import Typography from '../../../components/Typography';

export const AboutContainer: FC<ActiveTabProps> = ({ activeTab, handleOnView }) => {
	const [data, setData] = useState<AboutData[]>([]);
	const ref = useRef(null);

	useEffect(() => {
		if (activeTab === 'about' && data.length === 0) {
			airtableBase('About')
				.select({
					view: 'Grid view',
				})
				.eachPage(records => {
					// @ts-ignore
					return setData(mapAboutData(records));
				});
		}
	}, [activeTab, data.length]);

	useCustomIntersectionObserver(ref, activeTab, handleOnView);

	return (
		<Box
			ref={ref}
			id="about"
			component="section"
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				scrollMarginTop: '64px',
				backgroundColor: 'secondary.light',
				p: '81px 0',

				[theme.breakpoints.down('sm')]: {
					p: '48px 0',
				},
			}}>
			<Typography width="100%" variant="h4" align="center" component="h2" mb={8}>
				О нас
			</Typography>
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
