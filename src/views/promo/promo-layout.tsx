import React, { FC, useRef } from 'react';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';
import { ActiveTabProps } from '../../models/active-tab.model';
import Container from '@mui/material/Container';
import { ArrowDownward } from '@mui/icons-material';
import { styled, Theme } from '@mui/material/styles';
import { useCustomIntersectionObserver } from '../../hooks/intersectionObserver';

const PromoLayoutRoot = styled('section')(({ theme }: { theme: Theme }) => ({
	color: theme.palette.common.white,
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	[theme.breakpoints.up('sm')]: {
		height: '80vh',
		minHeight: 500,
		maxHeight: 1300,
	},
}));

const Background = styled(Box)({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundAttachment: 'fixed',
	zIndex: -2,
});

interface PromoLayoutProps extends ActiveTabProps {
	sxBackground: SxProps<Theme>;
}

export const PromoLayout: FC<PromoLayoutProps> = ({ activeTab, handleOnView, sxBackground, children }) => {
	const ref = useRef(null);

	useCustomIntersectionObserver(ref, activeTab, handleOnView);

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
