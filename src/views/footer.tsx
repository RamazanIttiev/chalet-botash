import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Instagram, Telegram, WhatsApp } from '@mui/icons-material';
import { FormControlLabel, FormGroup, Radio, RadioGroup } from '@mui/material';
import Typography from '../components/Typography';
import { changeLanguage } from 'i18next';

const iconStyle = {
	width: 48,
	height: 48,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'warning.main',
	color: 'black',
	mr: 1,
	'&:hover': {
		backgroundColor: 'warning.dark',
	},
};

export const Footer = () => {
	const [value, setValue] = useState(localStorage.getItem('i18nextLng'));

	const handleChange = (event: { target: HTMLInputElement }) => {
		setValue(event.target.value);
	};

	const handleClick = (language: string) => {
		changeLanguage(language);
	};

	return (
		<Typography component="footer" marked="center" sx={{ backgroundColor: 'secondary.light', flexShrink: 0 }}>
			<Grid container>
				<Grid item xs={12} sm={6} md={6} display={'flex'} alignItems={'center'}>
					<Grid container spacing={4} sx={{ p: '24px 0', alignItems: 'center', flexDirection: 'column' }}>
						<Grid item xs={12} sm={3} md={6} display={'flex'} justifyContent={'center'}>
							<Box component="a" target={'_blank'} href="https://wa.me/89214425044" sx={iconStyle}>
								<WhatsApp />
							</Box>
							<Box
								component="a"
								target={'_blank'}
								href="https://instagram.com/ibra_botashev?utm_medium=copy_link"
								sx={iconStyle}>
								<Instagram />
							</Box>
							<Box component="a" target={'_blank'} href="https://t.me/Ibotashev" sx={iconStyle}>
								<Telegram />
							</Box>
						</Grid>
						<Grid item xs={12} sm={3} md={6}>
							<Typography variant="h6" marked="center" textAlign="center" gutterBottom>
								Language
							</Typography>
							<FormGroup>
								<RadioGroup
									defaultValue={value}
									value={value}
									onChange={handleChange}
									sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
									<FormControlLabel value="ru" onClick={() => handleClick('ru')} control={<Radio />} label="Rus" />
									<FormControlLabel value="en" onClick={() => handleClick('en')} control={<Radio />} label="Eng" />
								</RadioGroup>
							</FormGroup>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					{/*<Box sx={{ position: 'relative', overflow: 'hidden' }}>*/}
					{/*	<Link*/}
					{/*		href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"*/}
					{/*		sx={{ color: '#eee', fontSize: '12px', position: 'absolute', top: 0 }}>*/}
					{/*		Яндекс Карты*/}
					{/*	</Link>*/}
					{/*	<Link*/}
					{/*		href="https://yandex.ru/maps/?ll=42.683177%2C43.274920&mode=routes&rtext=~43.272964%2C42.682418&rtt=auto&ruri=~&utm_medium=mapframe&utm_source=maps&z=16.54"*/}
					{/*		sx={{ color: '#eee', fontSize: '12px', position: 'absolute', top: 14 }}>*/}
					{/*		Баксанское ущелье — Яндекс Карты*/}
					{/*	</Link>*/}
					{/*</Box>*/}
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.9938868203412!2d42.68075131539982!3d43.27250388498218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfa9555d3e71ae999!2zNDPCsDE2JzIxLjAiTiA0MsKwNDAnNTguNiJF!5e0!3m2!1sru!2sru!4v1647419800631!5m2!1sru!2sru"
						width="100%"
						height="450"
						style={{ border: 0 }}
						allowFullScreen={true}
						loading="lazy"
					/>
				</Grid>
			</Grid>
		</Typography>
	);
};
