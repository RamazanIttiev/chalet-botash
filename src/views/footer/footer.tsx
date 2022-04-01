import React, { FC, useRef } from 'react';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ActiveTabProps } from '../../models';
import Typography from '../../components/Typography';
import { Instagram, Telegram, WhatsApp } from '@mui/icons-material';
import { useCustomIntersectionObserver } from '../../hooks/intersectionObserver';

import { iconStyle } from './theme/footer.styled';

export const Footer: FC<ActiveTabProps> = ({ activeTab, handleOnView }) => {
	const ref = useRef(null);

	useCustomIntersectionObserver(ref, activeTab, handleOnView);

	return (
		<Typography component="footer" marked="center" sx={{ backgroundColor: 'secondary.light', flexShrink: 0 }}>
			<Grid container id="contacts" ref={ref}>
				<Grid item xs={12} sm={6} md={6} display={'flex'} alignItems={'center'}>
					<Grid container spacing={4} sx={{ p: '24px 0', alignItems: 'center', flexDirection: 'column' }}>
						<Grid item xs={12} sm={3} md={6}>
							<Link
								variant="h6"
								underline="none"
								color="inherit"
								href="#home"
								sx={{ fontSize: 24, letterSpacing: 4, cursor: 'pointer' }}>
								Logo
							</Link>
						</Grid>
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
					</Grid>
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
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
