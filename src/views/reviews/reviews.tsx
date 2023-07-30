import React, { useRef } from 'react';
import { Box } from '@mui/system';
import { useCustomIntersectionObserver } from '../../hooks/intersectionObserver';
import theme from '../../theme';
import Typography from '../../components/Typography';
import { CurrentTabProps } from '../../models/active-tab.model';

export const ReviewsContainer = ({ currentTab, handleOnView }: CurrentTabProps) => {
	const ref = useRef(null);

	useCustomIntersectionObserver(ref, currentTab, handleOnView);

	return (
		<Box
			ref={ref}
			id="reviews"
			component="section"
			sx={{
				height: '800px',
				overflow: 'hidden',
				position: 'relative',
				display: 'flex',
				scrollMarginTop: '64px',
				flexDirection: 'column',
				backgroundColor: 'secondary.light',
				justifyContent: 'center',
				alignItems: 'center',
				p: '81px 0',

				[theme.breakpoints.down('sm')]: {
					p: '48px 0',
				},
			}}>
			<Typography variant="h4" align="center" component="h2" mb={8}>
				Отзывы
			</Typography>
			<Box
				component={'iframe'}
				sx={{
					width: '95%',
					height: '100%',
					minHeight: '500px',
					border: '1px solid #e6e6e6',
					borderRadius: '8px',
					boxSizing: 'border-box',

					[theme.breakpoints.up('md')]: {
						width: '65%',
					},

					[theme.breakpoints.up('lg')]: {
						width: '50%',
					},
				}}
				src="https://yandex.ru/maps-reviews-widget/151156063035?comments"></Box>
			<a
				href="https://yandex.ru/maps/org/chalet_botash/151156063035/"
				target="_blank"
				style={{
					boxSizing: 'border-box',
					textDecoration: 'none',
					color: '#b3b3b3',
					fontSize: '10px',
					fontFamily: 'YS Text, sans-serif',
					position: 'absolute',
					bottom: '8px',
					width: '100%',
					textAlign: 'center',
					left: '0',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					display: 'block',
					maxHeight: '14px',
					whiteSpace: 'nowrap',
					padding: '0 16px',
				}}
				rel="noreferrer">
				Chalet Botash на карте Кабардино‑Балкарской Республики — Яндекс Карты
			</a>
		</Box>
	);
};
