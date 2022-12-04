// 7.3 Прототип и конструктор объекта Задание 4.
function Appliance(device, power) {
  this.device = device;
  this.power = power;
  this.OnOff = false;
}

const illuminator = new Appliance('illuminator', 10);
illuminator.light = function() {
  if (illuminator.OnOff) {
    console.log("light")
  } else {
    console.log("dark")
  }
}

const computer = new Appliance('computer', 250);
computer.sound = function() {
  if (computer.OnOff) {
    console.log("Sings a song I'm the operator with my pocket calculator))")
  } else {
    console.log("Silence")
  }
}

Appliance.prototype.connect = function() {
  this.OnOff = true;
  console.log(this.device + " is on");  
}

Appliance.prototype.disconnect = function() {
  this.OnOff = false;
  console.log(this.device + " is off");
}

function powerСonsumption () {
    console.log(`power consumption ${+computer.OnOff*computer.power + +illuminator.OnOff*illuminator.power} W`);
}

powerСonsumption();

illuminator.light();
computer.sound();

illuminator.connect();
powerСonsumption();

computer.connect();
powerСonsumption();

illuminator.light();
computer.sound();

computer.disconnect();
powerСonsumption();
computer.sound();

powerСonsumption();