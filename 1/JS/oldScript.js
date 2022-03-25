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

// Цикл в котором сначала делается кода, затем проиверяется условие

let num = 50;

do {
    console.log(num);
    num++;
} while (num < 55);

// break 
for (let i = 1; i < Infinity; i++) {
    if (i === 6) {
        break; // Цикл завершится
    }
    console.log(i);
}
// continue 
for (let i = 1; i < Infinity; i++) {
    if (i === 6) {
        continue; // 6 будет пропущена
    }
    console.log(i);
}

// Object.keys(personalMovieDB.movies).length подсчитывает количество ключей в масиве



let num1 = 20; // сначал функция ищет значени внутри себя затем на уровень выше

function showFirstMessage(text) { // text = то что в скобках присваевается
    console.log(`${text} `);
    let num1 = 30;
    console.log(num1);
}

showFirstMessage();
console.log(num1);

// function calc (a, b) {
//     return (a + b);
//     console.log('doesn work'); // unreacheble code после return код не выполняется
// }

// console.log(calc(12, 32));

function ret() {
    let num1 = 50;
    return num1;
}

const anotherNum1 = ret();
console.log(anotherNum1);

const logger = function() {
    console.log('hello');
}; // function expresion после функции точка запятой

// Стрелочная функция

const calc = (a, b) => a + b;
console.log( calc(5, 6) );

const calc2 = (a, b) => {
    console.log('1');
    return a + b;
};



