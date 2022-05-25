import React, { FC, useRef } from 'react';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '../../components/Typography';
import { CurrentTabProps } from '../../models/active-tab.model';
import { Instagram, Telegram, WhatsApp } from '@mui/icons-material';
import { useCustomIntersectionObserver } from '../../hooks/intersectionObserver';

import { contactsStyle, socialMediaStyle } from './theme/footer.styled';

export const Footer: FC<CurrentTabProps> = ({ currentTab, handleOnView }) => {
	const ref = useRef(null);

	useCustomIntersectionObserver(ref, currentTab, handleOnView);

	return (
		<Typography component="footer" marked="center" sx={{ backgroundColor: 'secondary.light', flexShrink: 0 }}>
			<Grid container id="contacts" ref={ref}>
				<Grid
					item
					xs={12}
					sm={6}
					md={6}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						p: '81px 0',
						position: 'relative',
					}}>
					<Link
						variant="h6"
						underline="none"
						color="inherit"
						href="#home"
						sx={{ fontSize: 24, letterSpacing: 4, cursor: 'pointer', textAlign: 'center' }}>
						Chalet Botash
					</Link>
					<Box
						sx={{
							alignItems: 'center',
							display: 'flex',
							justifyContent: 'space-between',
							width: '80%',
							mt: '48px',
						}}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'baseline',
								justifyContent: 'center',
							}}>
							<Box component="a" target={'_blank'} href="tel:89214425044" sx={contactsStyle}>
								<div>Телеофн:</div>
								<span>8 (921) 44-250-44</span>
							</Box>
							<Box component="a" target={'_blank'} href="mailto:botashev01@mail.ru" sx={contactsStyle}>
								<div>Почта:</div>
								<span>botashev01@mail.ru</span>
							</Box>
							<Box
								component="a"
								target={'_blank'}
								href="https://www.google.com/maps/@43.2725,42.682944,16z?hl=ru"
								sx={contactsStyle}>
								<div>Адрес:</div>
								<span>Нейтрино, Кабардино-Балкарская Республика</span>
							</Box>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									position: 'absolute',
									bottom: '24px',
									right: '50%',
									transform: 'translate(50%)',
								}}>
								<Box
									component="a"
									target={'_blank'}
									href="https://wa.me/+79214425044"
									sx={{
										...socialMediaStyle,
									}}>
									<WhatsApp className={'linkIcon'} sx={{ mr: 1 }} />
									{/*<Box className={'linkTextGroup'} sx={{ display: 'flex', alignItems: 'center' }}>*/}
									{/*	<ArrowBack sx={{ fontSize: '16px', mr: 1, background: 'none' }} />*/}
									{/*	<span>WhatsApp</span>*/}
									{/*</Box>*/}
								</Box>
								<Box
									component="a"
									target={'_blank'}
									href="https://instagram.com/ibra_botashev?utm_medium=copy_link"
									sx={{
										...socialMediaStyle,
									}}>
									<Instagram className={'linkIcon'} sx={{ mr: 1 }} />
									{/*<Box className={'linkTextGroup'} sx={{ display: 'flex', alignItems: 'center' }}>*/}
									{/*	<ArrowBack sx={{ fontSize: '16px', mr: 1, background: 'none' }} />*/}
									{/*	<span>Instagram</span>*/}
									{/*</Box>*/}
								</Box>
								<Box
									component="a"
									target={'_blank'}
									href="https://t.me/Ibotashev"
									sx={{
										...socialMediaStyle,
									}}>
									<Telegram className={'linkIcon'} sx={{ mr: 1 }} />
									{/*<Box className={'linkTextGroup'} sx={{ display: 'flex', alignItems: 'center' }}>*/}
									{/*	<ArrowBack sx={{ fontSize: '16px', mr: 1, background: 'none' }} />*/}
									{/*	<span>Telegram</span>*/}
									{/*</Box>*/}
								</Box>
							</Box>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.9938868203412!2d42.68075131539982!3d43.27250388498218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfa9555d3e71ae999!2zNDPCsDE2JzIxLjAiTiA0MsKwNDAnNTguNiJF!5e0!3m2!1sru!2sru!4v1647419800631!5m2!1sru!2sru"
						width="100%"
						height="450"
						style={{ border: 0 }}
						allowFullScreen={true}
						loading="lazy"
						title={'Chalet_Botash_location'}
					/>
				</Grid>
			</Grid>
		</Typography>
	);
};
