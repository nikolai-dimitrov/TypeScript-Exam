"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apartment = void 0;
class Apartment {
    roomNumber;
    numberOfGuests;
    _price;
    constructor(price, roomNumber, numberOfGuests) {
        this.price = price;
        this.roomNumber = roomNumber;
        this.numberOfGuests = numberOfGuests;
    }
    get totalPrice() {
        return this._price * this.numberOfGuests;
    }
    set price(val) {
        this._price = val;
    }
    // @decorator3
    get cancellationPrice() {
        return this.totalPrice * 0.8;
    }
}
exports.Apartment = Apartment;
//# sourceMappingURL=apartment.js.map