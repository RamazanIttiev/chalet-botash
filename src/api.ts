import { FieldSet, Records } from 'airtable';

type AirtableParams = {
	tableName: string;
};

export async function fetchAirtableRecords({ tableName }: AirtableParams): Promise<Records<FieldSet>> {
	const query = new URLSearchParams();

	const url = `https://api.airtable.com/v0/appODUEXCW5oqxyCY/${tableName}?${query.toString()}`;

	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_PRIVATE_KEY}`,
		},
	});

	if (!response.ok) {
		throw new Error(`Airtable API error: ${response.status} ${response.statusText}`);
	}

	const data = await response.json();

	return data.records;
}
