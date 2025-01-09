import { FieldSet, Records } from 'airtable';
import { AboutData } from '../views/about/about.model';
import { GalleryData } from '../views/gallery/galary.model';
import { PromoData } from '../views/promo/promo';

export const mapGalleryData = (data: Records<FieldSet>) =>
	data.map(
		({ fields }) =>
			({
				id: fields.id,
				title: fields.title,
				image: fields.image && fields.image[0].url,
			} as GalleryData),
	);

export const mapAboutData = (data: Records<FieldSet>) =>
	data.map(
		({ fields }) =>
			({
				id: fields.id,
				title: fields.title,
				description: fields.description,
				image: fields.image && fields.image[0].url,
			} as AboutData),
	);

export const mapContactsData = (data: Records<FieldSet>) =>
	data.map(({ fields }) => ({
		link: fields.link,
		title: fields.title,
		description: fields.description,
	}));

export const mapSocialsData = (data: Records<FieldSet>) =>
	data.map(({ fields }) => ({
		link: fields.link,
		title: fields.title,
		color: fields.color,
		icon: fields.icon && fields.icon[0].url,
	}));

export const mapPromoData = (data: FieldSet) =>
	({
		title: data.title,
		subtitle: data.subtitle,
		image: data.image && data.image[0].url,
	} as PromoData);

export const mapRoomsData = (data: Records<FieldSet>) =>
	data.map(({ fields }) => ({
		id: fields.id,
		title: fields.title,
		price: fields.price,
		description: fields.description,
		images: fields.image && fields.image,
	}));
