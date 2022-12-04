// 7.3 Прототип и конструктор объекта Задание 2.
let qualifier = (str, obj) => str in obj;

let devices = {
    phone: "Samsung",
    tablet: "iPad",
    laptop: "Dell",  
    }

console.log(qualifier("comp", devices));
console.log(qualifier("phone", devices));
