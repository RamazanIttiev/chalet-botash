import React, { FC } from 'react';
import Typography from '../../components/Typography';
import { PromoLayout } from './promo-layout';
import PromoBgr from './assets/PromoBgr.jpeg';

export const Promo: FC<{ handleOnView: (tabId: string) => void; activeTab: string }> = ({
	activeTab,
	handleOnView,
}) => {
	return (
		<PromoLayout
			activeTab={activeTab}
			handleOnView={handleOnView}
			sxBackground={{
				backgroundImage: `url(${PromoBgr})`,
				backgroundColor: '#7fc7d9', // Average color of the background image.
				backgroundPosition: 'center',
			}}>
			{/* Increase the network loading priority of the background image. */}
			<img style={{ display: 'none' }} src={PromoBgr} alt="increase priority" />
			<Typography color="inherit" align="center" variant="h2" marked="center">
				Гостевой дом Chalet Botash
			</Typography>
			<Typography color="inherit" align="center" variant="h5" sx={{ mb: 4, mt: 4 }}>
				Приглашаем Вас почувствовать знаменитое кавказское гостеприимство, вдохнуть чистый, горный воздух и на
				время забыть про городскую суету у Нас в гостевом доме Chalet Botash
			</Typography>
		</PromoLayout>
	);
};
