"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyMotel = void 0;
const partialMonthlyMotel_1 = require("./contracts/partialMonthlyMotel");
const typeGuards_1 = require("./typeGuards");
class MonthlyMotel extends partialMonthlyMotel_1.PartialMonthlyMotel {
    bookedRooms = new Map();
    alreadyAddedRooms = new Map();
    totalBudget = 0;
    addRoom(room) {
        if (!(0, typeGuards_1.isRoom)(room)) {
            return "Value was not a Room";
        }
        if (this.alreadyAddedRooms.has(room.roomNumber)) {
            return `Room '${room.roomNumber}' already exists.`;
        }
        this.alreadyAddedRooms.set(room.roomNumber, room);
        return `Room '${room.roomNumber}' added.`;
    }
    bookRoom(roomNumber, bookedMonth) {
        if (!this.alreadyAddedRooms.has(roomNumber)) {
            return `Room '${roomNumber}' does not exist.`;
        }
        const roomReservationsArray = this.bookedRooms.get(roomNumber);
        if (roomReservationsArray &&
            roomReservationsArray.includes(bookedMonth)) {
            return `Room '${roomNumber}' is already booked for '${bookedMonth}'.`;
        }
        if (!roomReservationsArray) {
            this.bookedRooms.set(roomNumber, []);
        }
        this.bookedRooms.get(roomNumber).push(bookedMonth);
        const currentRoomPrice = this.alreadyAddedRooms.get(roomNumber).totalPrice;
        this.totalBudget += currentRoomPrice;
        return `Room '${roomNumber}' booked for '${bookedMonth}'.`;
    }
    cancelBooking(roomNumber, bookedMonth) {
        if (!this.alreadyAddedRooms.has(roomNumber)) {
            return `Room '${roomNumber}' does not exist.`;
        }
        const roomReservationsArray = this.bookedRooms.get(roomNumber);
        if (roomReservationsArray &&
            !roomReservationsArray.includes(bookedMonth)) {
            return `Room '${roomNumber}' is not booked for '${bookedMonth}'.`;
        }
        const reservedMonthIndex = roomReservationsArray.indexOf(bookedMonth);
        const currentRoomCancellationPrice = this.alreadyAddedRooms.get(roomNumber).cancellationPrice;
        roomReservationsArray?.splice(reservedMonthIndex, 1);
        this.totalBudget -= currentRoomCancellationPrice;
        return `Booking cancelled for Room '${roomNumber} for ${bookedMonth}'.`;
    }
    getTotalBudget() {
        return `${super.getTotalBudget()}\nTotal budget: $${this.totalBudget.toFixed(2)}`;
    }
}
exports.MonthlyMotel = MonthlyMotel;
//# sourceMappingURL=monthlyMotel.js.map