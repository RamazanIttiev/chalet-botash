export interface RoomCardProps {
	id?: number;
	title: string;
	images: { url: string }[];
	price: number;
	description: string;
}

export interface RoomsProps {
	data: RoomCardProps[];
}
