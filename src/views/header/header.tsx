import React, { FC } from 'react';
import { AppBar, Toolbar, useMediaQuery } from '@mui/material';
import { LinkStyled, StyledLogo } from './theme/header.styled';
import { MenuList } from './menu-list';
import { MobileHeader } from './mobile-header';

import Logo from '../../assets/Logo.svg';

interface HeaderProps {
	currentTab: string;
}

export const Header: FC<HeaderProps> = ({ currentTab }) => {
	const isDesktop = useMediaQuery('(min-width:769px)');
	const [isOpened, setIsOpened] = React.useState(false);

	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event &&
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}

		setIsOpened(open);
	};

	return (
		<AppBar
			enableColorOnDark
			sx={{
				position: 'sticky',
				top: 0,
			}}>
			<Toolbar>
				<nav
					style={{
						display: 'flex',
						flexWrap: 'nowrap',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: '100%',
					}}>
					<LinkStyled
						sx={{
							margin: '0 !important',
							'&:hover': {
								backgroundSize: '0 !important',
							},
						}}
						$currentTab={false}
						href="#promo">
						<StyledLogo src={Logo} alt="Logo" />
					</LinkStyled>
					{isDesktop ? (
						<MenuList toggleDrawer={toggleDrawer} isDesktop={isDesktop} currentTab={currentTab} />
					) : (
						<MobileHeader
							isOpened={isOpened}
							isDesktop={isDesktop}
							currentTab={currentTab}
							toggleDrawer={toggleDrawer}
						/>
					)}
				</nav>
			</Toolbar>
		</AppBar>
	);
};
