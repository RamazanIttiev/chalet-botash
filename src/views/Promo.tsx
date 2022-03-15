import React from 'react';
import Typography from '../components/Typography';
import PromoLayout from './PromoLayout';
import HeroBgr from '../assets/road-street-highway-travel.jpeg';

export const Promo = () => {
	return (
		<PromoLayout
			sxBackground={{
				backgroundImage: `url(${HeroBgr})`,
				backgroundColor: '#7fc7d9', // Average color of the background image.
				backgroundPosition: 'center',
			}}>
			{/* Increase the network loading priority of the background image. */}
			<img style={{ display: 'none' }} src={HeroBgr} alt="increase priority" />
			<Typography color="inherit" align="center" variant="h2" marked="center">
				Гостевой дом Chalet Botash
			</Typography>
			<Typography color="inherit" align="center" variant="h5" sx={{ mb: 4, mt: 4 }}>
				Приглашаем Вас почувствовать знаменитое кавказское гостеприимство, вдохнуть чистый, горный воздух и на время
				забыть про городскую суету у Нас в гостевом доме Chalet Botash
			</Typography>
			<Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
				Discover the experience
			</Typography>
		</PromoLayout>
	);
};
