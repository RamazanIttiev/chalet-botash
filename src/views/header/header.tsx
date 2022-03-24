import React, { FC } from 'react';
import { AppBar, Box, Link, Toolbar } from '@mui/material';

import './header.css';

export const Header: FC = () => {
	return (
		<AppBar position="fixed" enableColorOnDark>
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				<Box
					sx={{
						m: 0,
						p: 0,
						display: 'flex',
						justifyContent: 'space-between',
						width: '50%',
						alignItems: 'baseline',
					}}>
					<Link
						variant="h6"
						underline="none"
						color="inherit"
						href="#promo"
						sx={{
							position: 'relative',
							fontSize: 24,
							letterSpacing: 4,
							cursor: 'pointer',
							'&::after': {
								display: 'none',
							},
						}}>
						Logo
					</Link>
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
						}}>
						Галерея
					</Link>
					<Link
						underline="none"
						color="inherit"
						href="#rooms"
						sx={{
							p: '20px',
							fontSize: 16,
							letterSpacing: 4,
							position: 'relative',
							cursor: 'pointer',
						}}>
						Номера
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
						}}>
						Контакты
					</Link>
				</Box>
				{/*<RadioGroup color={'secondary'} changeLang={changeLang} value={value} />*/}
			</Toolbar>
		</AppBar>
	);
};
