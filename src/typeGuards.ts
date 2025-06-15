import { Room } from "./contracts/room";

export const isRoom = (room: any): room is Room => {
	let validRoomNumbers: string[] = ["A01", "A02", "A03", "B01", "B02", "B03"];


	if (
		room !== null &&
		typeof room === "object" &&
		"totalPrice" in room &&
		typeof room.totalPrice === "number" &&
		"cancellationPrice" in room &&
		typeof room.cancellationPrice === "number" &&
		"roomNumber" in room &&
		validRoomNumbers.includes((room as any).roomNumber)
	) {
		return true;
	} else {
		return false;
	}
};
