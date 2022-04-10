'use strict'
// функция конструктор работает без ретерна
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`)
    }
}

// прототип добаляется, но в объект не добавляется
User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`)
}

// в переменные возвращаются объекты с помощью функции конструктора
const ivan = new User('Ivan', 28)
const alex = new User ('Alex', 20)
ivan.exit()
ivan.hello()
alex.hello()

console.log(ivan)
console.log(alex)