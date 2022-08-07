import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { MenuList } from './menu-list';
import { MobileHeader } from './mobile-header';
import { socialLinks } from '../../mocks/contacts.mock';
import { AppBar, Toolbar, useMediaQuery } from '@mui/material';

import Logo from '../../assets/Logo.svg';
import { LinkStyled, StyledLogo } from './theme/header.styled';
import { socialMediaStyle } from '../footer/theme/footer.styled';

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
							width: '100px !important',
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
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							ml: isDesktop ? 'auto' : 'auto',
						}}>
						{socialLinks.map(({ title, link, icon, color }) => {
							return (
								<Box
									key={title}
									component="a"
									target={'_blank'}
									href={link}
									sx={{
										...socialMediaStyle,
									}}>
									<Box
										component="img"
										className={'linkIcon'}
										sx={{
											mr: '0 !important',
											width: '38px !important',
											height: '38px !important',
											background: 'transparent !important',
											transition: 'all 0.3s ease',
											filter: color,

											'&:hover': {
												filter: 'brightness(0) saturate(100%) invert(99%) sepia(1%) saturate(1434%) hue-rotate(279deg) brightness(118%) contrast(100%);',
											},
										}}
										src={icon}
										alt={title}
									/>
								</Box>
							);
						})}
					</Box>
				</nav>
			</Toolbar>
		</AppBar>
	);
};
