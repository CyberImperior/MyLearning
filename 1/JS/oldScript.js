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



useStrict();

let str = 'teSt';
const arr1 = [1,2,3];

const testObj = {
    name: 'russel',
    lastName: 'Crown'
};

console.log(testObj.name);
console.log(str.length); // length это свойство

console.dir(Number);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';
console.log(fruit.indexOf('f')); // вернет 5, если нет буквы то вернет -1

const logg = 'hi world';
console.log(logg.slice(3, 8)); // обрежет и вернет world  последняя буква не включается
console.log(logg.slice(-5, -1)); // worl

console.log(logg.substring(3,8)); // тоже что и slice только без отрицательных значений

const testNum = '12.25px';
console.log(parseInt(testNum)); // 12
console.log(parseFloat(testNum)); // 12.2

useStrict();


function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

// callback это функция, которая должна быть выполнена, когда предыдущая функция завершила свое выполенние
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
function done() {
    console.log('Я прошел этот урок');
}
learnJS('JavaScript', done);

// let ObjConstructor = new Object(); // синтаксис "конструктор объекта"
// let ObjLiteral = {};  // синтаксис "литерал объекта"

useStrict();

let options ={
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'solid',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Тест');
    }
};
options.makeTest();
console.log('1232'.length); // Прототип
// Диструктуризация важно 
const {border, bg} = options.colors;
console.log(border); 
// ВАЖНО ЧТО ТАК МОЖНО console.log(options['colors']['bg']);
//delete options.name;

//console.log(options);

function showPropsAndParams() {
for (let key in options) {
    if (typeof options[key] == 'object') {
        for (let key2 in options[key]) {
            console.log(`Свойство ${key2} имеет значение ${options[key][key2]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`); // с точкой не работает
    }
}}

// Считает количество свойств у объекта
function countObjectProps(object) {
    let count = 0;
    for (let i in object) {
        count++;
    }
    return console.log(count);
}

console.log(Object.keys(options)); // возращает массив ключей
console.log(Object.keys(options).length); // возращает количество ключей

// Как lenght соотносится с индексами lenght = последний индекс + 1
const array = [1, 2, 3, 4, 8, 6];

const str1 = prompt('', '');
const products = str1.split(', ');
// Функция для каждого элемента массива
array.forEach(function(item, i, array) {
    console.log(`${i}: ${item} внутри массива ${array}`);
});


array[99]=0; // Образуются пустые элементы масива
console.log(array);

array.push(10); // Добавляется элемент в конец
array.pop(); // Удаляет последний элемент
array.unshift(5); // Добавляет элемент в начало, ИНДЕКСЫ СДВИГАЮТСЯ
array.shift(); // Удаляет первый элемент, ИНДЕКСЫ СДВИГАЮТСЯ

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// перебирает каждый элемент в массиве in перебирает индексы of сами элементы массива 
// Отличия от .forEach мы можем использовать break и continue
for (let value of array) {
    console.log(value);
}

const str11 = prompt('', '');
const products1 = str11.split(', '); // Делит строку на массив по тому что в скобках
products1.sort(); // Сортирует элементы как строки по буквам
console.log(products1.join(' и ')); // Соединят элементы массива по тому что в скобках

// Как lenght соотносится с индексами lenght = последний индекс + 1

array.sort(); // Сортирует числа построчно
array.sort(compareNum); // Нормальная сортировка чисел
console.log(array); 

function compareNum(a, b) {
    return a - b;
}

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj3 = {
    a: 5,
    b: 1
};

const copy = obj3; // Передача по ссылке меняться будет, если модифицировать будет модифицироваться весь объект

copy.a = 10;

console.log(obj3.a);

// Цикл для задачи копии объекта (NewObject[i] - задает ключ) (для поверхностной копии)
function copyObject(object) {
    let NewObject = {};
    for (let i in object) {
        NewObject[i] = object[i];
    }
    return NewObject;
}

const addObj = {
    d: 17,
    e: 20
};

const obj5 = {
    a: 5,
    b: 1,
    colors: {
        border: 'solid',
        bg: 'red'
    }
};

// Соединение объектов
console.log(Object.assign(obj5, addObj));

// Отдельная копия объекта
const cloneObj = Object.assign({}, addObj);

// Создание копии массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();


// Соединение массивов оператор разворота
const video = ['youtube', 'vimeo', 'rutuve'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];              

// Оператор разворота, вычленяет аргументы для функции
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const valABC = [2, 3, 5];
log(...valABC);

// Spread - оператор разворота поверхностно копирует массив и объект
const arraySpread = ['a', 'b'];
const newArraySpread = [...arraySpread];
const spreadObject = {
    one: 1,
    two: 2,
};
//const newSpreadObj = {...spreadObject};











function useStrict() {
    'use strict';
    return true;
}



















































































































































