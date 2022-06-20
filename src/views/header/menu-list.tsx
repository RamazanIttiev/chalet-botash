import React, { FC } from 'react';
import { List, ListItem } from '@mui/material';
import { LinkStyled } from './theme/header.styled';

interface MenuListProps {
	isDesktop: boolean;
	currentTab: string;
	toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const MenuList: FC<MenuListProps> = ({ currentTab, isDesktop, toggleDrawer }) => {
	return (
		<List
			sx={
				isDesktop
					? {
							width: '55%',
							display: 'flex',
					  }
					: {
							p: 2,
							color: '#fff',
							background: '#28282a',
					  }
			}>
			<ListItem sx={{ p: 0 }}>
				<LinkStyled onClick={toggleDrawer(false)} $currentTab={currentTab === 'about'} href="#about">
					О нас
				</LinkStyled>
			</ListItem>
			<ListItem sx={{ p: 0 }}>
				<LinkStyled onClick={toggleDrawer(false)} $currentTab={currentTab === 'gallery'} href="#gallery">
					Галерея
				</LinkStyled>
			</ListItem>
			<ListItem sx={{ p: 0 }}>
				<LinkStyled onClick={toggleDrawer(false)} $currentTab={currentTab === 'rooms'} href="#rooms">
					Номера
				</LinkStyled>
			</ListItem>
			<ListItem sx={{ p: 0 }}>
				<LinkStyled onClick={toggleDrawer(false)} $currentTab={currentTab === 'contacts'} href="#contacts">
					Контакты
				</LinkStyled>
			</ListItem>
		</List>
	);
};
