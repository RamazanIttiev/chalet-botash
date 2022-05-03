import React, { FC } from 'react';
import { AppBar, Grid, List, ListItem, Toolbar } from '@mui/material';

import theme from '../../theme';
import { LinkStyled } from './theme/header.styled';

interface HeaderProps {
	currentTab: string;
}

export const Header: FC<HeaderProps> = ({ currentTab }) => {
	return (
		<AppBar
			enableColorOnDark
			sx={{
				position: 'sticky',
				top: 0,
				[theme.breakpoints.down('sm')]: {
					position: 'unset',
				},
			}}>
			<Toolbar>
				<nav style={{ justifyContent: 'space-between', width: '100%' }}>
					<LinkStyled
						$currentTab={false}
						sx={{
							display: 'none',
							'&:hover': {
								backgroundSize: '0 !important',
							},
							[theme.breakpoints.down('sm')]: {
								width: '100%',
								height: '100%',
								textAlign: 'center',
								display: 'block',
							},
						}}
						href="#promo">
						Logo
					</LinkStyled>
					<Grid
						container
						component={List}
						sx={{
							flexWrap: 'nowrap',
							width: '60%',

							[theme.breakpoints.down('lg')]: {
								width: '100%',
							},

							[theme.breakpoints.down('sm')]: {
								display: 'none',
							},
						}}>
						<Grid item component={ListItem} sx={{ p: 0 }}>
							<LinkStyled
								sx={{
									'&:hover': {
										backgroundSize: '0 !important',
									},
								}}
								$currentTab={false}
								href="#promo">
								Logo
							</LinkStyled>
						</Grid>
						<ListItem sx={{ p: 0 }}>
							<LinkStyled $currentTab={currentTab === 'about'} href="#about">
								О нас
							</LinkStyled>
						</ListItem>
						<ListItem sx={{ p: 0 }}>
							<LinkStyled $currentTab={currentTab === 'gallery'} href="#gallery">
								Галерея
							</LinkStyled>
						</ListItem>
						<ListItem sx={{ p: 0 }}>
							<LinkStyled $currentTab={currentTab === 'rooms'} href="#rooms">
								Номера
							</LinkStyled>
						</ListItem>
						<ListItem sx={{ p: 0 }}>
							<LinkStyled $currentTab={currentTab === 'contacts'} href="#contacts">
								Контакты
							</LinkStyled>
						</ListItem>
					</Grid>
				</nav>
			</Toolbar>
		</AppBar>
	);
};
