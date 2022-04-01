function useStrict() {
    'use strict';
}
useStrict();

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Триггер",
        "Побег из курятника",
        "Алкашка"
    ]
};

const promoAdvImg = document.querySelectorAll('.promo__adv img'),
    promoGenre = document.querySelector('.promo__genre'),
    promoBg = document.querySelector('.promo__bg'),
    ulMovies = document.querySelector('.promo__interactive-list'),
    buttonAddMovie = document.querySelector('.add').querySelector('button');

movieDB.movies.forEach((itemShower, iShower) => {
    movieDB.movies.sort();
    ulMovies.innerHTML += `<li class="promo__interactive-item">${iShower+1}. ${itemShower}
    <div class="delete"></div>
</li>`;
});
promoAdvImg.forEach(item => {
    item.remove();
});

promoGenre.textContent = 'Драма';

promoBg.style.cssText = 'background: url("img/bg.jpg") center  no-repeat; background-size: cover';

buttonAddMovie.addEventListener('click', e => {
    e.preventDefault();
    if (document.querySelector('[type="checkbox"]').checked) {
        let addMovieValue = document.querySelector('.adding__input').value;
        console.log(addMovieValue);
        console.log(addMovieValue.length);
        if (addMovieValue.length <= 21) {
            movieDB.movies.push(addMovieValue);
            movieDB.movies.sort();
        } else {
            movieDB.movies.push(addMovieValue.slice(0, 21) + '...');
            movieDB.movies.sort();
        }
        console.log('Добавлено в избраное');
    } else {
        let addMovieValue = document.querySelector('.adding__input').value;
        console.log(addMovieValue);
        console.log(addMovieValue.length);
        if (addMovieValue.length <= 21) {
            movieDB.movies.push(addMovieValue);
            movieDB.movies.sort();
        } else {
            movieDB.movies.push(addMovieValue.slice(0, 21) + '...');
            movieDB.movies.sort();
        }
        console.log(movieDB);
    }
});

const getDeleteMovie = document.querySelectorAll('.delete');
getDeleteMovie.forEach((item, index) => {
    getDeleteMovie[index].addEventListener('click', e => {
        getDeleteMovie[index].parentElement.remove();
        getDeleteMovie[index].remove();
        movieDB.movies.splice(index, 1);
        console.log(movieDB);
    });
});
console.log();

// getDeleteMovie.addEventListener('click', e => {

// });


/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


// Возьмите свой код из предыдущей практики