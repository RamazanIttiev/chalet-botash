import React, { FC, useEffect, useState } from 'react';
import Typography from '../../components/Typography';
import { PromoLayout } from './promo-layout';
import { airtableBase } from '../../app';
import { mapPromoData } from '../../services/mappers';

interface PromoProps {
	handleOnView: (tabId: string) => void;
	currentTab: string;
}

interface PromoDataProps {
	alt: string;
	image: string;
	title: string;
	subtitle: string;
}

export const Promo: FC<PromoProps> = ({ currentTab, handleOnView }) => {
	const [data, setData] = useState<PromoDataProps>();

	useEffect(() => {
		if (data === undefined) {
			airtableBase('Promo')
				.select({
					view: 'Grid view',
				})
				.eachPage(records => {
					// @ts-ignore
					return setData(mapPromoData(records)[0]);
				});
		}
	}, [data]);

	return (
		<PromoLayout
			currentTab={currentTab}
			handleOnView={handleOnView}
			sxBackground={{
				backgroundImage: `url(${data?.image})`,
				backgroundPosition: 'center',
			}}>
			<Typography color="inherit" align="center" component="h1" variant="h2" marked="center">
				{data?.title}
			</Typography>
			<Typography color="inherit" align="center" component="h2" variant="h5" sx={{ mb: 4, mt: 4 }}>
				{data?.subtitle}
			</Typography>
			{/*<Button*/}
			{/*	href="#rooms"*/}
			{/*	sx={{*/}
			{/*		color: '#fff',*/}
			{/*		border: '1px solid',*/}
			{/*		padding: '8px 16px',*/}
			{/*		background: 'rgba(255,255,255,.2)',*/}
			{/*		transition: 'background 0.5s',*/}

			{/*		'&hover': {*/}
			{/*			background: 'transparent',*/}
			{/*		},*/}
			{/*	}}>*/}
			{/*	К номерам*/}
			{/*</Button>*/}
		</PromoLayout>
	);
};
