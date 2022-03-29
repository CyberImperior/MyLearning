useStrict();

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof str);
// console.log(typeof strObj);

// console.dir([1,2,3]);

// 

// Прототипы
const solder = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('hello');
    }
};

const solderJonh = {
    health: 100
};

// создание прототипов
Object.setPrototypeOf(solderJonh, solder);
// solderJonh.__proto__ = solder; // усталрело
// новый массив созданным прототипом на основе solder
const solderRuslan = Object.create(solder);

solderJonh.sayHello();
console.log(solderJonh.armor);



function useStrict() {
    'use strict';
    return true;
}