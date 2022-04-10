'use strict'

// классы это красивая обертка функций конструкторов или синтаксический сахар
// названия классов всегда начинаются с большой буквы
// свойства и параметры записываются с помощью конструктора
// методы записываются как функция только без стрелок и ключевого слова function
// методы вроде как задаются прототипированно
// класс это концепция
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

// иерархия классов  (ключевое слова extends - наследование)
// super() вызывает тоже самое что было у родителя
// super() всегда ставится в начале конструктора
class ColoredRectangleWithText extends Rectangle  {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text
        this.bgColor = bgColor
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет ${this.bgColor}`)
    }
}

const div = new ColoredRectangleWithText(25, 10, 'hello', 'red')
div.showMyProps()
console.log(div.calcArea())


// экземпляр концепции
const square = new Rectangle(10, 5)
const long = new Rectangle(20, 100)

// console.log(Rectangle)
// console.log(square.calcArea())
// console.log(long.calcArea())

