import React, { FC } from 'react';
import { AppBar, Box, Link, Toolbar } from '@mui/material';
import RadioGroup from '../components/RadioGroup';
import { LanguageModal } from '../modals/language.modal';

export const Header: FC<LanguageModal> = ({ value, changeLang }) => {
	return (
		<AppBar position="fixed" enableColorOnDark>
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', width: '50%', alignItems: 'baseline' }}>
					<Link
						variant="h6"
						underline="none"
						color="inherit"
						href="#home"
						sx={{ fontSize: 24, letterSpacing: 4, cursor: 'pointer' }}>
						Logo
					</Link>
					<Link
						underline="none"
						color="inherit"
						href="#about"
						sx={{
							fontSize: 16,
							letterSpacing: 4,
							cursor: 'pointer',
						}}>
						О нас
					</Link>
					<Link
						underline="none"
						color="inherit"
						href="#gallery"
						sx={{ m: '0 32px', fontSize: 16, letterSpacing: 4, cursor: 'pointer' }}>
						Галерея
					</Link>
					<Link
						underline="none"
						color="inherit"
						href="#contacts"
						sx={{ m: '0 32px', fontSize: 16, letterSpacing: 4, cursor: 'pointer' }}>
						Контакты
					</Link>
				</Box>
				<RadioGroup color={'secondary'} changeLang={changeLang} value={value} />
			</Toolbar>
		</AppBar>
	);
};
