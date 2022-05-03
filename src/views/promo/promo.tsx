import React, { FC } from 'react';
import Typography from '../../components/Typography';
import { PromoLayout } from './promo-layout';
import PromoBgr from './assets/PromoBgr.jpeg';

interface PromoProps {
	handleOnView: (tabId: string) => void;
	currentTab: string;
}

export const Promo: FC<PromoProps> = ({ currentTab, handleOnView }) => {
	return (
		<PromoLayout
			currentTab={currentTab}
			handleOnView={handleOnView}
			sxBackground={{
				backgroundImage: `url(${PromoBgr})`,
				backgroundPosition: 'center',
			}}>
			{/* Increase the network loading priority of the background image. */}
			{/*<img style={{ display: 'none' }} src={PromoBgr} alt="increase priority" />*/}
			<Typography color="inherit" align="center" component="h1" variant="h2" marked="center">
				Гостевой дом Chalet Botash
			</Typography>
			<Typography color="inherit" align="center" component="h2" variant="h5" sx={{ mb: 4, mt: 4 }}>
				Приглашаем Вас почувствовать знаменитое кавказское гостеприимство, вдохнуть чистый, горный воздух и на
				время забыть про городскую суету у Нас в гостевом доме Chalet Botash
			</Typography>
		</PromoLayout>
	);
};
