useStrict();
// usestrict не позволяет задавать переменную без ключевого слова
function useStrict() {
    'use strict';
    return true;
}

let number = 5;
const leftBorderWidth = 1;
number = 10;

// Интерполяция
console.log(`Число равно ${number}`);

// let работает только впеределах фигурных кавычек
const obj = {
    a: 50
};

obj.a = 10;
console.log(obj.a);
let date = 23;
console.log(date);

{
    let result = 50;
}

console.log(`Тип null ${typeof null}`);
console.log(`Тип undefined ${typeof undefined}`);
console.log(`Тип NaN ${typeof NaN}`);

const obj1 = {
    name: 'Ruslan',
    age: 24,
    inMarried: false
};

// // способы обращения к параметрам свойств объектов
// console.log(obj1.name);
// console.log(obj1['name']);

let arr = [1, 2, 4, {}];
console.log(arr[0]); // return 1

// foo так функции называются которые показывают функционал

// // return false или true
// const result = confirm('хочешь секс?');

const answers = [];

answers[0] = 'yes';
answers[1] = 'no';
answers[2] = 'maybe';

console.log(answers);

console.log(null == undefined); // true

console.log(2 + 3 + '2'); // 52 строка
console.log('2' + 3 + 2); // 232 строка
console.log( Math.pow(2, 30) );

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

let jack = 3 ? 32 ? 33 : 33: 33;