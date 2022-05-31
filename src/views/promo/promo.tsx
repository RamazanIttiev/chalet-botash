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
				Гостевой дом Chalet Botash
			</Typography>
			<Typography color="inherit" align="center" component="h2" variant="h5" sx={{ mb: 4, mt: 4 }}>
				Приглашаем вас почувствовать знаменитое кавказское гостеприимство, вдохнуть чистый, горный воздух и на
				время забыть про городскую суету у нас в гостевом доме Chalet Botash
			</Typography>
		</PromoLayout>
	);
};
