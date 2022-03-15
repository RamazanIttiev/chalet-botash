import LocationImg from './assets/location.jpeg';
import HouseImg from './assets/location.jpeg';
import FacilitiesImg from './assets/facilities.jpeg';
import i18n from 'i18next';

interface ValuesDataProps {
  title: string;
  icon: string;
  description?: {
    title: string,
    text: string,
  }[];
}

export const valuesData: ValuesDataProps[] = [
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
        title: i18n.t('values.facilities.block.description.rooms.title'),
        text: i18n.t('values.facilities.block.description.rooms.text'),
      },
      {
        title: i18n.t('values.facilities.block.description.food.title'),
        text: i18n.t('values.facilities.block.description.food.text'),
      },
      {
        title: i18n.t('values.facilities.block.description.entertainment.title'),
        text: i18n.t('values.facilities.block.description.entertainment.text'),
      },
    ],
    icon: FacilitiesImg,
  },
];
