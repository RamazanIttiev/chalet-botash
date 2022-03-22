import React, { FC } from 'react';
import { AppBar, Box, Link, Toolbar } from '@mui/material';
import Scrollspy from 'react-scrollspy';

export const Header: FC = () => {
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
					<Scrollspy items={['about', 'gallery', 'contacts']} currentClassName="is-current">
						<Link
							underline="none"
							color="inherit"
							href="#about"
							sx={{
								p: '20px',
								fontSize: 16,
								letterSpacing: 4,
								position: 'relative',
								cursor: 'pointer',
								'&::after': {
									content: '""',
									position: 'absolute',
									width: '90%',
									height: '3px',
									background: '#fff',
									color: '#fff',
									display: 'block',
									marginTop: '8px',
									right: '50%',
									transform: 'translate(50%)',
								},
							}}>
							О нас
						</Link>
						<Link
							underline="none"
							color="inherit"
							href="#gallery"
							sx={{
								p: '20px',
								fontSize: 16,
								letterSpacing: 4,
								position: 'relative',
								cursor: 'pointer',
								'&::after': {
									content: '""',
									position: 'absolute',
									width: '90%',
									height: '3px',
									background: '#fff',
									color: '#fff',
									display: 'block',
									marginTop: '8px',
									right: '50%',
									transform: 'translate(50%)',
								},
							}}>
							Галерея
						</Link>
						<Link
							underline="none"
							color="inherit"
							href="#contacts"
							sx={{
								p: '20px',
								fontSize: 16,
								letterSpacing: 4,
								position: 'relative',
								cursor: 'pointer',
								'&::after': {
									content: '""',
									position: 'absolute',
									width: '90%',
									height: '3px',
									background: '#fff',
									color: '#fff',
									display: 'block',
									marginTop: '8px',
									right: '50%',
									transform: 'translate(50%)',
								},
							}}>
							Контакты
						</Link>
					</Scrollspy>
				</Box>
				{/*<RadioGroup color={'secondary'} changeLang={changeLang} value={value} />*/}
			</Toolbar>
		</AppBar>
	);
};
