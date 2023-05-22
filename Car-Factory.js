// Made a class called car
class Car {
    // constructor for the car class 
    constructor(make, model, year) {
        // made property of car 
        this.make = make;
        // made model property of car
        this.model = model;
        // made year property of car 
        this.year = year;
    }
    // Method to get the description of the car
    getDescription() {
        return 'Car: ${this.make} ${this.model}, Year: ${this.year}';
    }
}

// Made a new class called ElectricCar that extends the Car class ('extends' uses and keeps the objects of car)
class ElectricCar extends Car {
    // constructer for the ElectricCar class
    constructor(make, model, year, range) {
        // calls the constructor of the Car class ('super' uses the constructor of the Car class)
        super(make, model, year,);
        // made range property of electric car
        this.range = range; 
    }
}