import LocationImg from './assets/location.jpg';
import HouseImg from './assets/location.jpg';
import FacilitiesImg from './assets/facilities.jpg';
import i18next from 'i18next';

export interface AboutDataProps {
	title: string;
	icon: string;
	description?: {
		title: string;
		text: string;
	}[];
}

export const aboutData: AboutDataProps[] = [
	{
		title: 'location',
		icon: LocationImg,
	},
	{
		title: 'chalet',
		icon: HouseImg,
	},
	{
		title: 'facilities',
		description: [
			{
				title: i18next.t('values.facilities.block.description.rooms.title'),
				text: i18next.t('values.facilities.block.description.rooms.text'),
			},
			{
				title: i18next.t('values.facilities.block.description.food.title'),
				text: i18next.t('values.facilities.block.description.food.text'),
			},
			{
				title: i18next.t('values.facilities.block.description.entertainment.title'),
				text: i18next.t('values.facilities.block.description.entertainment.text'),
			},
		],
		icon: FacilitiesImg,
	},
];
