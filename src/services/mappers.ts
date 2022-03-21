import { FieldSet, Records } from 'airtable';

export const mapAboutData = (aboutData: Records<FieldSet>) =>
	aboutData.map(({ fields }) => ({
		id: fields.id,
		title: fields.title,
		text: fields.description,
		image: fields.image && fields.image[0].url,
	}));
