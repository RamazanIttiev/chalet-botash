import { FieldSet, Records } from 'airtable';

export const mapGalleryData = (galleryData: Records<FieldSet>) =>
	galleryData.map(({ fields }) => ({
		id: fields.id,
		title: fields.title,
		image: fields.image && fields.image[0].url,
	}));

export const mapRoomsData = (galleryData: Records<FieldSet>) =>
	galleryData.map(({ fields }) => ({
		id: fields.id,
		title: fields.title,
		price: fields.price,
		description: fields.description,
		image: fields.image && fields.image[0].url,
	}));
