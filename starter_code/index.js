const Elevator = require('./elevator.js');
const Person = require('./person.js');


let elevator = new Elevator();
intervalId = elevator.start();
let person = new Person("Julia", 0, 5);

elevator.stop(intervalId);

elevator.floorUp();
elevator.update();
elevator.floorDown();
elevator.call(person);

elevator._passengersEnter(person);

elevator._passengersLeave(person);
