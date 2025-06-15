"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorator1 = decorator1;
exports.decorator2 = decorator2;
exports.decorator3 = decorator3;
exports.decorator4 = decorator4;
exports.decorator5 = decorator5;
function decorator1(constructor) { }
// get total price air conditioned
function decorator2(target, methodName, descriptor) {
    const originalMethod = descriptor.get;
    descriptor.get = function () {
        let originalPrice = originalMethod?.call(this);
        return originalPrice * 1.2;
    };
    return descriptor;
}
// get cancelled air conditioned
function decorator3(target, methodName, descriptor) {
    const originalMethod = descriptor.get;
    descriptor.get = function () {
        let originalPrice = originalMethod?.call(this);
        return originalPrice * 1.2;
    };
    return descriptor;
}
// set price price air conditioned
function decorator4(target, methodName, parameterIndex) {
    console.log(target.setPrice());
}
function decorator5(constructor) {
    class DecoratedPartialMonthlyMotel extends constructor {
        static MotelName = 'Monthly Motel';
    }
    return DecoratedPartialMonthlyMotel;
}
//# sourceMappingURL=decorators.js.map