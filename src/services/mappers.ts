import { FieldSet, Records } from 'airtable';

export const mapAboutData = (aboutData: Records<FieldSet>) =>
	aboutData.map(({ fields }) => ({
		id: fields.id,
		title: fields.title,
		text: fields.description,
		image: fields.image && fields.image[0].url,
	}));

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

export const mapContactsData = (contactsData: Records<FieldSet>) =>
	contactsData.map(({ fields }) => ({
		text: fields.text,
		icon: fields.icon && fields.icon[0].url,
		title: fields.title,
		linkTitle: fields.linkTitle,
	}));
