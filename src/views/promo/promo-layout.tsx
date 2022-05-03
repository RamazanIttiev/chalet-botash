import React, { FC, useRef } from 'react';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';
import { CurrentTabProps } from '../../models/active-tab.model';
import Container from '@mui/material/Container';
import { ArrowDownward } from '@mui/icons-material';
import { styled, Theme } from '@mui/material/styles';
import { useCustomIntersectionObserver } from '../../hooks/intersectionObserver';

const PromoLayoutRoot = styled('section')(({ theme }: { theme: Theme }) => ({
	color: theme.palette.common.white,
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	scrollMarginTop: '64px',

	[theme.breakpoints.up('sm')]: {
		height: '80vh',
		minHeight: 500,
		maxHeight: 1300,
	},

	[theme.breakpoints.down('sm')]: {
		padding: '48px 0',
	},
}));

const Background = styled(Box)(({ theme }: { theme: Theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	zIndex: -2,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundAttachment: 'fixed',
	[theme.breakpoints.down('sm')]: {
		backgroundAttachment: 'initial',
	},
}));

interface PromoLayoutProps extends CurrentTabProps {
	sxBackground: SxProps<Theme>;
}

export const PromoLayout: FC<PromoLayoutProps> = ({ currentTab, handleOnView, sxBackground, children }) => {
	const ref = useRef(null);

	useCustomIntersectionObserver(ref, currentTab, handleOnView);

	return (
		<PromoLayoutRoot ref={ref} id="promo">
			<Container
				sx={{
					mt: 3,
					mb: 14,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				{children}
				<Box
					sx={{
						position: 'absolute',
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						backgroundColor: 'common.black',
						opacity: 0.5,
						zIndex: -1,
					}}
				/>
				<Background sx={sxBackground} />
				<Box component="div" height="16" width="12" sx={{ position: 'absolute', bottom: 32 }}>
					<ArrowDownward />
				</Box>
			</Container>
		</PromoLayoutRoot>
	);
};
