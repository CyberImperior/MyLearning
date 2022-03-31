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
    //   liMovies = document.createElement('li'),
    //   divMovies = document.createElement('div'),
      ulMovies  = document.querySelector('.promo__interactive-list');

// liMovies.classList.add('promo__interactive-item');
// divMovies.classList.add('delete');
// liMovies.append(divMovies);
// ulMovies.append(liMovies);


movieDB.movies.sort();
movieDB.movies.forEach((item, i) => {
    ulMovies.innerHTML += `<li class="promo__interactive-item">${i+1}. ${item}
    <div class="delete"></div>
</li>`;
    console.log(item);

});
console.log(promoAdvImg);



promoAdvImg.forEach(item => {
    item.remove();
});

promoGenre.textContent = 'Драма';

promoBg.style.cssText = 'background: url("img/bg.jpg") center  no-repeat; background-size: cover';
console.log(promoBg);
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */




