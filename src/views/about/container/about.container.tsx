import React, { FC, useRef } from 'react';
import theme from '../../../theme';
import Box from '@mui/material/Box';
import { About } from '../components/about';
import Container from '@mui/material/Container';
import { aboutMock } from '../../../mocks/about.mock';
import Typography from '../../../components/Typography';
import { CurrentTabProps } from '../../../models/active-tab.model';
import { useCustomIntersectionObserver } from '../../../hooks/intersectionObserver';

export const AboutContainer: FC<CurrentTabProps> = ({ currentTab, handleOnView }) => {
	const ref = useRef(null);

	useCustomIntersectionObserver(ref, currentTab, handleOnView);

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
				<About data={aboutMock} />
			</Container>
		</Box>
	);
};
