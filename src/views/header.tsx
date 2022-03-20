import React, { FC } from 'react';
import { AppBar, Box, Link, Toolbar } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import RadioGroup from '../components/RadioGroup';
import { LanguageModal } from '../modals/language.modal';

export const Header: FC<LanguageModal> = ({ value, changeLang }) => {
	const { t } = useTranslation();

	return (
		<AppBar position="fixed" enableColorOnDark>
			<Toolbar>
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
				<RadioGroup color={'secondary'} changeLang={changeLang} value={value} />
			</Toolbar>
		</AppBar>
	);
};
