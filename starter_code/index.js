const Elevator = require('./elevator.js');
const Person = require('./person.js');


let elevator = new Elevator();
intervalId = elevator.start();

elevator.stop(intervalId);

// elevator.floorUp();
elevator.floorDown();
