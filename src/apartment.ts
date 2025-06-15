import { Room } from "./contracts/room";
import { ValidRoomNumbers } from "./customTypes";

export class Apartment implements Room {
	roomNumber: ValidRoomNumbers;
	private numberOfGuests: number;
    private _price!:number;

	constructor(
		price: number,
		roomNumber: ValidRoomNumbers,
		numberOfGuests: number
	) {
		this.price = price;
		this.roomNumber = roomNumber;
		this.numberOfGuests = numberOfGuests;
	}

	public get totalPrice(): number {
		return this._price * this.numberOfGuests;
	}

    public set price(val:number) {
        this._price = val;
    }

	// @decorator3
	public get cancellationPrice(): number {
		return this.totalPrice * 0.8;
	}
}
