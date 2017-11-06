class Elevator {
  constructor(){
    this.floor      = 2;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
      return setInterval(() => {
       this.update();}, 1000);
   }

  stop(id) {
    setTimeout (() => {
      if(this.requests.length === 0){
        clearInterval(id);
      }
    });
  }

  update() {
      this.log();
      if(this.requests !==0){
        this.floor = this.requests[this.requests.length-1];
        console.log(this.floor);;

      }

   }
  _passengersEnter(person) {
      if(this.waitingList.length > 0){
        this.passengers.push(person);
        console.log(this.passengers);
        this.waitingList.pop(person);
        console.log(this.waitingList);
        this.requests.push(person.destinationFloor);
        console.log(this.requests);
        console.log(person.name + " has entered the elevator");
      }
   }
  _passengersLeave(person) {
      if(person.destinationFloor === this.floor){
        this.passengers.pop(person);
        console.log(person.name + " has left the elevator");
      }
   }

  floorUp() {
    if(this.floor < this.MAXFLOOR){
    this.floor +=1;
    console.log(this.floor);
  }else{
    console.log("You're at the top floor");
  }
   }

  floorDown() {
    if(this.floor > 0){
    this.floor -=1;
    console.log(this.floor);
  }else{
    console.log("You're at the lowest floor");
  };
}
  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }


  log() {
    if(this.floor === undefined){
  console.log("direction " + this.direction + " floor " + 0);
}else{
  console.log("direction " + this.direction + " floor " + this.floor); }
}
}

module.exports = Elevator;
