import React, { FC, useRef } from 'react';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '../../components/Typography';
import { CurrentTabProps } from '../../models/active-tab.model';
import { contacts, socialLinks } from '../../mocks/contacts.mock';
import { useCustomIntersectionObserver } from 'src/hooks/intersectionObserver';

import { contactsStyle, socialMediaStyle } from './theme/footer.styled';

interface FooterProps extends CurrentTabProps {}

export const Footer: FC<FooterProps> = ({ currentTab, handleOnView }) => {
	const ref = useRef(null);

	useCustomIntersectionObserver(ref, currentTab, handleOnView);

	return (
		<Typography
			component="footer"
			marked="center"
			sx={{ backgroundColor: 'secondary.light', flexShrink: 0, scrollMarginTop: 64, pt: '32px' }}>
			<Grid container id="contacts" ref={ref}>
				<Grid
					item
					xs={12}
					sm={12}
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
						href="/"
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
							{contacts.map(({ title, link, description }) => {
								return (
									<Box
										key={title}
										component="a"
										target={'_blank'}
										href={
											title === 'Телефон'
												? `tel:${link}`
												: title === 'Почта'
												? `mailto:${link}`
												: link
										}
										sx={contactsStyle}>
										<div>{title}</div>
										<span>{description}</span>
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
								{socialLinks.map(({ title, link, icon }) => {
									return (
										<Box
											key={title}
											component="a"
											target={'_blank'}
											href={link}
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
				<Grid item xs={12} sm={12} md={6}>
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
