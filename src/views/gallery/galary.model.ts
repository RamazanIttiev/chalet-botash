import House1 from '../gallery/assets/house1.jpeg';
import House2 from '../gallery/assets/house2.jpeg';
import House3 from '../gallery/assets/house4.jpeg';
import House4 from '../gallery/assets/house4.jpeg';
import House5 from '../gallery/assets/house5.jpeg';
import House6 from '../gallery/assets/house6.jpeg';
import House7 from '../gallery/assets/house7.jpg';
import Room1 from '../gallery/assets/room1.jpeg';
import Room2 from '../gallery/assets/room2.jpeg';
import Room3 from '../gallery/assets/room3.jpeg';
import Room4 from '../gallery/assets/room4.jpeg';
import Room5 from '../gallery/assets/room5.jpeg';

export interface GalleryDataProps {
	image: string;
	title: string;
	width: string;
}

export const galleryData: GalleryDataProps[] = [
	{
		image: House1,
		title: 'Chalet Botash',
		width: '40%',
	},
	{
		image: House2,
		title: 'Chalet Botash',
		width: '20%',
	},
	{
		image: House3,
		title: 'Chalet Botash',
		width: '40%',
	},
	{
		image: House4,
		title: 'Chalet Botash',
		width: '38%',
	},
	{
		image: House5,
		title: 'Chalet Botash',
		width: '38%',
	},
	{
		image: House6,
		title: 'Chalet Botash',
		width: '24%',
	},
	{
		image: House7,
		title: 'Chalet Botash',
		width: '40%',
	},
	{
		image: Room1,
		title: 'Chalet Botash',
		width: '40%',
	},
	{
		image: Room2,
		title: 'Chalet Botash',
		width: '40%',
	},
	{
		image: Room3,
		title: 'Chalet Botash',
		width: '40%',
	},
	{
		image: Room4,
		title: 'Chalet Botash',
		width: '40%',
	},
	{
		image: Room5,
		title: 'Chalet Botash',
		width: '40%',
	},
];
