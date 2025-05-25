import React, { FC, useEffect, useRef, useState } from 'react';
import theme from '../../../theme';
import Box from '@mui/material/Box';
import { About } from '../components/about';
import Container from '@mui/material/Container';
import Typography from '../../../components/Typography';
import { CurrentTabProps } from '../../../models/active-tab.model';
import { useCustomIntersectionObserver } from '../../../hooks/intersectionObserver';
import { mapAboutData } from '../../../services/mappers';
import { AboutData } from '../about.model';
import { fetchAirtableRecords } from '../../../api';

export const AboutContainer: FC<CurrentTabProps> = ({ currentTab, handleOnView }) => {
	const ref = useRef(null);

	const [data, setData] = useState<AboutData[]>([]);

	useCustomIntersectionObserver(ref, currentTab, handleOnView);

	useEffect(() => {
		const fetchPromoData = async () => {
			try {
				const records = await fetchAirtableRecords({
					tableName: 'About',
				});

				setData(mapAboutData(records));
			} catch (error) {
				console.error('Error fetching promo data:', error);
			}
		};

		fetchPromoData().catch(console.error);
	}, []);

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
