function useStrict() {
    'use strict';
}
useStrict();



const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      wrapper = document.querySelector('.wrapper'),
      circles = document.getElementsByClassName('circle'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
//box.style.backgroundColor = 'blue';
//box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius= '100%';
circles[1].style.backgroundColor = 'red';

// цикл практически никогда не используется
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'black';
}

// цикл который используюется
hearts.forEach(item => {
    item.style.backgroundColor = 'black';
});

// создает элемент html
const div = document.createElement('div');

// создание элемента без оболочки тега редко используется
const text = document.createTextNode('Я тут был');

// перемещает селектор класса к элементу html
div.classList.add('black');

// перемещает элемент в конец тега
document.body.append(div);

// перемещает элемент в конец селектора 
wrapper.append(div);

// перемещает элемент в начало селектора 
wrapper.prepend(div);

// перемещает элемент перед элемента селектора 
hearts[1].before(div);

// перемещает элемент после элемента селектора 
hearts[1].after(div);

// удаляет элемент
circles[0].remove();

// заменяет элемент  
hearts[0].replaceWith(circles[0]);

// добавляет html структуру в блок
div.innerHTML = '<h1>hello</h1>';

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');

// добавляет только текст в тело тега
// div.textContent = 'hi';