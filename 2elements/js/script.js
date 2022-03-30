function useStrict() {
'use strict';
}
useStrict();

// получаем в переменную элемент коллекции html
const box = document.getElementById('box');

console.log(box);

// получили псевдомассив html коллекцию по тегам. Важно если содержится 1 элемент все равно получаем html коллекцию, а не отдельный элемент
const btns = document.getElementsByTagName('button');
console.log(btns[1]);

// полученик элементов через класс
const circles = document.getElementsByClassName('circle');
console.log(circles[0]);

// получение любого селектора по синтаксису css
const hearts = document.querySelectorAll('.heart');
console.log(hearts);

// поочередно выводит массив элементов html
hearts.forEach(item => {
   // console.log(item);
});

// выводит только первый элемент селектора
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);