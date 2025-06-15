export function decorator1<T extends abstract new (...args: any[]) => {}>(constructor: T){}

// get total price air conditioned
export function decorator2(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.get;

    descriptor.get = function() {
        let originalPrice = originalMethod?.call(this);
        return originalPrice * 1.2;
    }
     
    return descriptor;
}
// get cancelled air conditioned
export function decorator3(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.get;

    descriptor.get = function() {
        let originalPrice = originalMethod?.call(this);
        return originalPrice * 1.2;
    }
     
    return descriptor;
}

// set price price air conditioned
export function decorator4(target: any, methodName: string, parameterIndex:number) {}
export function decorator5<T extends abstract new (...args: any[]) => {}>(constructor: T) {
    abstract class DecoratedPartialMonthlyMotel extends constructor {
        public static readonly  MotelName: string = 'Monthly Motel'
    }

    return DecoratedPartialMonthlyMotel;
}