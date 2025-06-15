"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRoom = void 0;
const isRoom = (room) => {
    let validRoomNumbers = ["A01", "A02", "A03", "B01", "B02", "B03"];
    if (room !== null &&
        typeof room === "object" &&
        "totalPrice" in room &&
        typeof room.totalPrice === "number" &&
        "cancellationPrice" in room &&
        typeof room.cancellationPrice === "number" &&
        "roomNumber" in room &&
        validRoomNumbers.includes(room.roomNumber)) {
        return true;
    }
    else {
        return false;
    }
};
exports.isRoom = isRoom;
//# sourceMappingURL=typeGuards.js.map