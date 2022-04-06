// делегирование событий вешает одно и тоже событие на несклько элементов с помощью условий
// назначается для родителя

const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (event) => {
    // event.target проверяет события для элемента НТМL, некоторые элементы не имеют событий например <br>
    // target содержит в себе ClassList
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('hello');
    }
    // if (event.target && event.target.classList.contains('blue')) {
    //     console.log('hello');
    // }
    // matches совпадения по классу и тегу
    // if (event.target && event.target.matches('button.red')) {
    //     console.log('hello');
    // }

});

// здесь не работает следующая кнопка
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('hello');
//     });
// });

// делегирование делает так, что событие работает даже если после него добавили следующий элемент
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);