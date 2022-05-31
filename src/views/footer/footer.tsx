import React, { FC, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import { airtableBase } from '../../app';
import { FooterData } from './footer.model';
import Typography from '../../components/Typography';
import { mapContactsData } from '../../services/mappers';
import { CurrentTabProps } from '../../models/active-tab.model';
import { useCustomIntersectionObserver } from '../../hooks/intersectionObserver';

import { contactsStyle, socialMediaStyle } from './theme/footer.styled';

export const Footer: FC<CurrentTabProps> = ({ currentTab, handleOnView }) => {
	const [data, setData] = useState<FooterData[]>([]);
	const socialsLinks = data.slice(3);

	const ref = useRef(null);

	useCustomIntersectionObserver(ref, currentTab, handleOnView);

	useEffect(() => {
		airtableBase('Contacts')
			.select({
				view: 'Grid view',
			})
			.eachPage(records => {
				// @ts-ignore
				return setData(mapContactsData(records));
			});
	}, [data.length]);

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
						pt: '81px',
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
							{data.map(({ title, linkTitle, text }) => {
								return (
									<Box
										component="a"
										target={'_blank'}
										href={
											title === 'Телефон'
												? `tel:${linkTitle}`
												: title === 'Почта'
												? `mailto:${linkTitle}`
												: linkTitle
										}
										sx={contactsStyle}>
										<div>{title}</div>
										<span>{text}</span>
									</Box>
								);
							})}
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
								{socialsLinks.map(({ title, linkTitle, icon }) => {
									return (
										<Box
											component="a"
											target={'_blank'}
											href={linkTitle}
											sx={{
												...socialMediaStyle,
											}}>
											<img className={'linkIcon'} src={icon} alt={title} />
											{/*<Box className={'linkTextGroup'} sx={{ display: 'flex', alignItems: 'center' }}>*/}
											{/*	<ArrowBack sx={{ fontSize: '16px', mr: 1, background: 'none' }} />*/}
											{/*	<span>WhatsApp</span>*/}
											{/*</Box>*/}
										</Box>
									);
								})}
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
