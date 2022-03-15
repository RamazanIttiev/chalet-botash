import React from 'react';
import { AppBar, Link, Toolbar } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<React.Fragment>
			<AppBar position="fixed">
				<Toolbar sx={{ justifyContent: 'center' }}>
					<Link
						onClick={handleClick}
						variant="h6"
						underline="none"
						color="inherit"
						sx={{ fontSize: 24, letterSpacing: 4, cursor: 'pointer' }}>
						<Trans i18nKey="title">{t('title')}</Trans>
					</Link>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</React.Fragment>
	);
};
