import React, { FC } from 'react';
import { AppBar, Grid, List, ListItem, Toolbar } from '@mui/material';

import './theme/header.css';
import { LinkStyled } from './theme/header.styled';
import theme from '../../theme';

export const Header: FC = () => {
	return (
		<AppBar
			position="fixed"
			enableColorOnDark
			sx={{
				[theme.breakpoints.down('sm')]: {
					position: 'unset',
				},
			}}>
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				<LinkStyled
					sx={{
						display: 'none',

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
						<LinkStyled href="#promo">Logo</LinkStyled>
					</Grid>
					<ListItem sx={{ p: 0 }}>
						<LinkStyled href="#about">О нас</LinkStyled>
					</ListItem>
					<ListItem sx={{ p: 0 }}>
						<LinkStyled href="#gallery">Галерея</LinkStyled>
					</ListItem>
					<ListItem sx={{ p: 0 }}>
						<LinkStyled href="#rooms">Номера</LinkStyled>
					</ListItem>
					<ListItem sx={{ p: 0 }}>
						<LinkStyled href="#contacts">Контакты</LinkStyled>
					</ListItem>
				</Grid>
				{/*<RadioGroup color={'secondary'} changeLang={changeLang} value={value} />*/}
			</Toolbar>
		</AppBar>
	);
};
