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
	const socialsLinks = data.slice(4);

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
								paddingBottom: '16px',
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
									margin: '0 auto',
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
										</Box>
									);
								})}
							</Box>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<iframe
						src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=151156063035"
						style={{
							width: '100%',
							height: '100%',
							minHeight: '500px',
						}}
						frameBorder="0"
						allowFullScreen={true}
						title={'Chalet_Botash_location'}
					/>
				</Grid>
			</Grid>
		</Typography>
	);
};
