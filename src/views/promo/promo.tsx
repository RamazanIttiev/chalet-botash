import React, { FC, useEffect, useState } from 'react';
import Typography from '../../components/Typography';
import { PromoLayout } from './promo-layout';
import { airtableBase } from '../../app';
import { mapPromoData } from '../../services/mappers';

interface PromoProps {
	handleOnView: (tabId: string) => void;
	currentTab: string;
}

export interface PromoData {
	image: string;
	title: string;
	subtitle: string;
}

export const Promo: FC<PromoProps> = ({ currentTab, handleOnView }) => {
	const [data, setData] = useState<PromoData>();

	useEffect(() => {
		airtableBase('Promo')
			.select({
				view: 'Grid view',
			})
			.eachPage(records => {
				// @ts-ignore
				return setData(mapPromoData(records[0].fields));
			});
	}, []);

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
		</PromoLayout>
	);
};
