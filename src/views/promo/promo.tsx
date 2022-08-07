import React, { FC } from 'react';
import Typography from '../../components/Typography';
import { PromoLayout } from './promo-layout';
import { promoMock } from '../../mocks/promo.mock';

interface PromoProps {
	handleOnView: (tabId: string) => void;
	currentTab: string;
}

interface PromoDataProps {
	image: string;
	title: string;
	subtitle: string;
}

export const Promo: FC<PromoProps> = ({ currentTab, handleOnView }) => {
	const { title, subtitle, image }: PromoDataProps = promoMock;
	return (
		<PromoLayout
			currentTab={currentTab}
			handleOnView={handleOnView}
			sxBackground={{
				backgroundImage: `url(${image})`,
				backgroundPosition: 'center',
			}}>
			<Typography color="inherit" align="center" component="h1" variant="h2" marked="center">
				{title}
			</Typography>
			<Typography color="inherit" align="center" component="h2" variant="h5" sx={{ mb: 4, mt: 4 }}>
				{subtitle}
			</Typography>
		</PromoLayout>
	);
};
