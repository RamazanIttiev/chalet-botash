export interface RoomCardProps {
	id?: number;
	title: string;
	image: string;
	price: number;
	description: string;
}

export interface RoomsProps {
	data: RoomCardProps[];
}
