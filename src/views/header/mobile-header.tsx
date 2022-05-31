import React, { FC } from 'react';
import { MenuList } from './menu-list';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, SwipeableDrawer } from '@mui/material';

interface MobileHeaderProps {
	isDesktop: boolean;
	isOpened: boolean;
	currentTab: string;
	toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const MobileHeader: FC<MobileHeaderProps> = ({ toggleDrawer, isOpened, currentTab, isDesktop }) => {
	return (
		<React.Fragment>
			<IconButton onClick={toggleDrawer(true)}>
				<MenuIcon sx={{ color: '#fff' }} />
			</IconButton>
			<SwipeableDrawer anchor={'top'} open={isOpened} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
				<MenuList toggleDrawer={toggleDrawer} isDesktop={isDesktop} currentTab={currentTab} />
			</SwipeableDrawer>
		</React.Fragment>
	);
};
