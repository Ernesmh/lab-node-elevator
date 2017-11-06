class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";
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
   }
  _passengersEnter() { }
  _passengersLeave() { }

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
    this.floor +=1;
    console.log(this.floor);
  }else{
    console.log("You're at the top floor");
  };

  call(person) {
    this.requests.push(person);
  }


  log() {
  console.log("direction " + this.direction + " floor" + this.floor); }
}

module.exports = Elevator;
