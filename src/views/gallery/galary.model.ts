import House1 from '../gallery/assets/House1.jpeg';
import House2 from '../gallery/assets/House2.jpeg';
import House3 from '../gallery/assets/House3.jpeg';
import Room1 from '../gallery/assets/Room1.jpeg';
import Room2 from '../gallery/assets/Room2.jpeg';
import Room3 from '../gallery/assets/Room3.jpeg';
import Room4 from '../gallery/assets/Room4.jpeg';
import Room5 from '../gallery/assets/Room5.jpeg';
import Room6 from '../gallery/assets/Room6.jpeg';

interface GalleryDataProps {
	title: string;
	image: string;
}

export const galleryData: GalleryDataProps[] = [
	{
		title: 'chalet',
		image: House1,
	},
	{
		title: 'chalet',
		image: House2,
	},
	{
		title: 'chalet',
		image: House3,
	},
	{
		title: 'chalet',
		image: Room1,
	},
	{
		title: 'chalet',
		image: Room2,
	},
	{
		title: 'chalet',
		image: Room3,
	},
	{
		title: 'chalet',
		image: Room4,
	},
	{
		title: 'chalet',
		image: Room5,
	},
	{
		title: 'chalet',
		image: Room6,
	},
];
