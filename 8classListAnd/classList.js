const btns = document.querySelectorAll('button');

// classList.length показывает количество класов 
console.log(btns[0].classList.length);
// item показывает сам класс (item - пункт)
console.log(btns[0].classList.item(1));
// добавляет класс к элементу, селектор указывается без синтаксиса
console.log(btns[0].classList.add('red', 'someClass'));
// добавляет класс элемента
console.log(btns[0].classList.remove('red'));
// тоглит класс (если есть на элемента будет убран, если нету добавлен), взвращает тру или фолс
console.log(btns[0].classList.toggle('red'));
// возвращает фолс или тру, показывает содержится ли класс в элементе
if (btns[1].classList.contains('red')) {
    console.log('red');
}


btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
});

// выводит все классы как одну строку (устарел)
console.log(btns[0].className);