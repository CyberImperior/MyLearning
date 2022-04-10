'use strict';

const box = document.querySelector('.box')
const btn = document.querySelector('button')

// можем получить ширину и высоту модального окна
const width = box.clientWidth;
const height = box.clientHeight;

// значение как в css
const offsetWidth = box.offsetWidth;
const offsetHeight = box.offsetHeight;

// полный размер контента с учетом скрола
const scrollWidth = box.scrollWidth;
const scrollHeight = box.scrollHeight;

console.log(scrollWidth, scrollHeight)

btn.addEventListener('click', () => {
    //box.style.height = box.scrollHeight + 'px'
    console.log(box.scrollTop) // показывает сколько пикслей отскролили
})

// показывает координаты элемента HTML
console.log(box.getBoundingClientRect())

// получает все вычисленные стили редактировать нельзя
const style = window.getComputedStyle(box) // вторым аргументом можено написать псевдостили чтобы их получить

console.log(style.margin)

// чтобы у документа получить допустим scroll top нужно делать так
console.log(document.documentElement.scrollTop)

// сколит от текущего положения по осям х и у
window.scrollBy(0, 400)

// сколит в определенную точку
window.scrollTo(0, 400)