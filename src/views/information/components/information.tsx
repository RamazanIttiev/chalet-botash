import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Trans, useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';
import Typography from '../../../components/Typography';
import { CustomAccordion } from './information-accordion';
import { InformationDataProps } from '../information.model';

interface ServicesProps {
	information: InformationDataProps[];
}

export const Services: FC<ServicesProps> = ({ information }) => {
	const { t } = useTranslation();

	return (
		<React.Fragment>
			{information.length !== 0 &&
				information.map(({ title, icon, description }, index) => {
					return (
						<Grid
							item
							key={index}
							xs={12}
							md={9}
							sx={{
								display: 'flex',
								alignItems: 'end',
								justifyContent: 'space-between',
								flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
							}}>
							<Box
								component={'img'}
								src={icon}
								alt={title}
								sx={{
									width: 200,
									height: 200,
									borderRadius: '100%',
								}}
							/>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									ml: index % 2 === 0 ? 6 : 'none',
									mr: index % 2 === 0 ? 'none' : 6,
								}}>
								<Typography variant="h6" sx={{ my: 5 }}>
									<Trans i18nKey={`values.${title}.block.title`}>{t(`values.${title}.block.title`)}</Trans>
								</Typography>
								{title !== 'facilities' ? (
									<Typography variant="h5" fontSize={16} lineHeight={1.6} textAlign={'center'}>
										<Trans i18nKey={`values.${title}.block.text`}>{t(`values.${title}.block.text`)}</Trans>{' '}
									</Typography>
								) : (
									description?.map(({ title, text }, index) => {
										return <CustomAccordion key={index} title={title} text={text} />;
									})
								)}
							</Box>
						</Grid>
					);
				})}
		</React.Fragment>
	);
};
