import { PartialMonthlyMotel } from "./contracts/partialMonthlyMotel";
import { Room } from "./contracts/room";
import { isRoom } from "./typeGuards";
import { ValidMonths } from "./customTypes";
import { ValidRoomNumbers } from "./customTypes";
export class MonthlyMotel<T extends ValidMonths> extends PartialMonthlyMotel {
	private bookedRooms = new Map<string, string[]>();
	private alreadyAddedRooms = new Map<string, Room>();
	private totalBudget: number = 0;

	addRoom(room: unknown): string {
		if (!isRoom(room)) {
			return "Value was not a Room";
		}

		if (this.alreadyAddedRooms.has(room.roomNumber)) {
			return `Room '${room.roomNumber}' already exists.`;
		}

		this.alreadyAddedRooms.set(room.roomNumber, room);
		return `Room '${room.roomNumber}' added.`;
	}

	bookRoom(roomNumber: ValidRoomNumbers, bookedMonth: T): string {
		if (!this.alreadyAddedRooms.has(roomNumber)) {
			return `Room '${roomNumber}' does not exist.`;
		}

		const roomReservationsArray = this.bookedRooms.get(roomNumber);

		if (
			roomReservationsArray &&
			roomReservationsArray.includes(bookedMonth)
		) {
			return `Room '${roomNumber}' is already booked for '${bookedMonth}'.`;
		}

		if (!roomReservationsArray) {
			this.bookedRooms.set(roomNumber, []);
		}

		this.bookedRooms.get(roomNumber)!.push(bookedMonth);
		const currentRoomPrice =
			this.alreadyAddedRooms.get(roomNumber)!.totalPrice;
		this.totalBudget += currentRoomPrice;

		return `Room '${roomNumber}' booked for '${bookedMonth}'.`;
	}

	cancelBooking(roomNumber: ValidRoomNumbers, bookedMonth: T): string {
		if (!this.alreadyAddedRooms.has(roomNumber)) {
			return `Room '${roomNumber}' does not exist.`;
		}

		const roomReservationsArray = this.bookedRooms.get(roomNumber);

		if (
			roomReservationsArray &&
			!roomReservationsArray.includes(bookedMonth)
		) {
			return `Room '${roomNumber}' is not booked for '${bookedMonth}'.`;
		}

		const reservedMonthIndex = roomReservationsArray!.indexOf(bookedMonth);
		const currentRoomCancellationPrice =
			this.alreadyAddedRooms.get(roomNumber)!.cancellationPrice;

		roomReservationsArray?.splice(reservedMonthIndex, 1);

		this.totalBudget -= currentRoomCancellationPrice;

		return `Booking cancelled for Room '${roomNumber} for ${bookedMonth}'.`;
	}

	getTotalBudget(): string {
		return `${super.getTotalBudget()}\nTotal budget: $${this.totalBudget.toFixed(
			2
		)}`;
	}
}
