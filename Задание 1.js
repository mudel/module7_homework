// 7.3 Прототип и конструктор объекта Задание 1.
function printer(obj) {
	for ( let key in obj) {
		if (obj.hasOwnProperty(key)) {console.log(key+" "+obj[key])}
	}
}
let devices = {
    phone: "Samsung",
    tablet: "iPad",
    laptop: "Dell",  
  }

printer(devices);
