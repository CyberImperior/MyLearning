const 
btn = document.querySelectorAll('button'),
overlay = document.querySelector('.overlay');


// неверная запись обработчика событий второе событие заменяет первое, нет возможности удалить
// {btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second click');
// };}


// верная запись, первый аргумент колбек функции всегда ивент
// btn.addEventListener('click', () => {
//     alert('Click');
// });

let i = 0;
const delEvent = (e) => {
    console.log(e.type);
    console.log(e.currentTarget);    
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('mouseenter', delEvent);
    // }
};


// для каждой кнопки будет только один клик
btn.forEach((item) => {
    item.addEventListener('click', delEvent, {once: true});
});

// сначала действие срабатывает на вложеном элементе, чтобы все отображались currentTarget, всплытие
// btn.addEventListener('click', delEvent);
// overlay.addEventListener('click', delEvent);


// отмена перехода по ссылки
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});
