// 7.5 ООП в ES6 Задание 5.
class Appliance
{
  constructor(device, power)
  {
    this.device = device;
    this.power = power;
    this.OnOff = false;
  }
  
  connect() {
    this.OnOff = true;
    console.log(this.device + " is on!");
  }
  
  disconnect() {
    this.OnOff = false;
    console.log(this.device + " is off");
  }
  
}

function powerСonsumption()
  {
    console.log(`power consumption ${+computer.OnOff*computer.power + +illuminator.OnOff*illuminator.power} W`);
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