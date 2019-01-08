Function.prototype.myBind = function (context) {  
  const that = context;
  return () => {
    this.apply(that);
    };
  // return function () {
  //   debugger
  //   this.apply(that);

};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }

  // turnOn() {
  //   console.log(this.name);
  // }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"

