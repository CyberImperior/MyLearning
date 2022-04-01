function useStrict() {
    'use strict';
}
useStrict();
// код сработает только после загрузки DOM структуры
document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "логан",
            "лига справедливости",
            "ла-ла лэнд",
            "одержимость",
            "скотт Пилигрим против...",
            "триггер",
            "побег из курятника",
            "алкашка"
        ]
    };

    const promoAdvImg = document.querySelectorAll('.promo__adv img'),
        promoGenre = document.querySelector('.promo__genre'),
        promoBg = document.querySelector('.promo__bg'),
        MovieList = document.querySelector('.promo__interactive-list'),
        buttonAddMovie = document.querySelector('.add').querySelector('button'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 15) {
                newFilm = `${newFilm.slice(0, 16)}...`;
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, MovieList);
        }
        event.target.reset();
    });

    function createMovieList(films, parent) {
        parent.innerHTML = '';

        films.forEach((film, i) => {
            parent.innerHTML += `
                    <li class="promo__interactive-item">${i+1}. ${film}
                        <div class="delete"></div>
                    </li>
                `;
        });
        document.querySelector('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                films.splice(i, 1);
            });
        });
    }

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        promoGenre.textContent = 'Драма';
        promoBg.style.cssText = 'background: url("img/bg.jpg") center  no-repeat; background-size: cover';
    };

    const sortArr = (arr) => {
        arr.sort();
    };
    sortArr(movieDB.movies);
    deleteAdv(promoAdvImg);
    makeChanges();
    createMovieList(movieDB.movies, MovieList);









});


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