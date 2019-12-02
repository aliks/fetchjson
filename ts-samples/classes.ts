class Vehicle {

    constructor(public color: string) { }

    protected honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle('red');
// not allowed
// vehicle.honk();

class Car extends Vehicle {
    
    constructor (public wheels: number,
        color: string) {
        super(color);
    }
    
    private drive(): void {
        console.log('vroom');
    }
    startDriving(): void {
        this.drive();
        this.honk()
    }
}

const car = new Car(1, 'red');
car.startDriving();