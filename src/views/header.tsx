import React, { useState } from 'react';
import { AppBar, Box, FormControlLabel, FormGroup, Link, Radio, RadioGroup, Toolbar } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

export const Header = () => {
	const { t } = useTranslation();

	const [value, setValue] = useState(localStorage.getItem('i18nextLng'));

	const handleChange = (event: { target: HTMLInputElement }) => {
		setValue(event.target.value);
	};

	const changeLang = (language: string) => {
		changeLanguage(language);
	};

	return (
		<AppBar position="fixed">
			<Toolbar
				sx={{
					display: 'grid',
					gridTemplateColumns: ' 35% 49% 15%',
				}}>
				<Link
					variant="h6"
					underline="none"
					color="inherit"
					href="#home"
					sx={{ fontSize: 24, letterSpacing: 4, cursor: 'pointer' }}>
					<Trans i18nKey="title">{t('title')}</Trans>
				</Link>
				<Box sx={{ justifyContent: 'space-between' }}>
					<Link
						underline="none"
						color="inherit"
						href="#about"
						sx={{
							m: '0 32px',
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
				<FormGroup>
					<RadioGroup
						defaultValue={value}
						value={value}
						onChange={handleChange}
						sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
						<FormControlLabel value="ru" onClick={() => changeLang('ru')} control={<Radio />} label="Rus" />
						<FormControlLabel value="en" onClick={() => changeLang('en')} control={<Radio />} label="Eng" />
					</RadioGroup>
				</FormGroup>
			</Toolbar>
		</AppBar>
	);
};
