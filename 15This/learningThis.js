'use strict'
// контекст вызова this
// если просто вызвать this то он будет ссылаться на объект window
// если использовать строгий режим this будет undefined
// если функция запускается внутри функции контекст ее вызова не меняется

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this)
        return a + b
    }
    console.log(sum())
}
//showThis(4, 5)


// this этот тот объект в котором находится this
// контест у методов объекта - сам объект
// контекст вызова у функций внутри метода window или undefined
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this)
        }
        shout()
    }
}
//obj.sum()


// здесь вместо this будет новый объект который мы создаем
// this в конструкторах и классах это новый экземпляр объекта
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`)
    }
}

// в переменные возвращаются объекты с помощью функции конструктора
const ivan = new User('Ivan', 28)


// привязка функции к объекту?
function sayName(surname) {
    console.log(this)
    console.log(this.name + surname)
}

const user = {
    name: 'Ruslan'
}

// call и apply одно и тоже только синтаксис разный у аргументов
sayName.call(user, 'Smith')
sayName.apply(user, ['Smith'])

function count(num) {
    console.log(this)
    return this * num
}

// double новая фукнкция с жестко привязанным контекстом, в данном случае this = 2
// ручная привязка this call, applay, bind
const double = count.bind(2)
console.log(double(3))
console.log(double(13))

const btn = document.querySelector('button')

// контекст вызова равен объекту btn, колбек записан в классическом решиме
// если будет стрелочная функция то this будет равен window или undefined
btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red'
})

// у стрелочной функции нет контекста вызова, она берет свой контекст у родителя
// this вернет объект в котором он находится, при стрелочной функции в методе
const obj1 = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this)
        }
        say()
    }
}

obj1.sayNumber()

// возвращает без return
const triple = a =>  a * 3

console.log(triple(5))