import React, { FC, useEffect, useState } from 'react';
import Typography from '../../components/Typography';
import { PromoLayout } from './promo-layout';
import { mapPromoData } from '../../services/mappers';
import { fetchAirtableRecords } from '../../api';

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
		const fetchPromoData = async () => {
			try {
				const records = await fetchAirtableRecords({
					tableName: 'Promo',
				});

				setData(mapPromoData(records[0].fields));
			} catch (error) {
				console.error('Error fetching promo data:', error);
			}
		};

		fetchPromoData().catch(console.error);
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
