useStrict();

function useStrict() {
    'use strict';
    return true;
}

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB.count);
if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман!');
} else {
    alert('Произошла ошибка!');
}

for (let i = 0; i <= 1; i++) {
    let movie = prompt('Один из последних просмотренных фильмов?'),
        grade = prompt('На сколько оцените его?');
    if (movie !== null && movie !== '' && movie.length < 50 && grade !== null && grade !== '' && grade.length < 50) {
        personalMovieDB.movies[movie] = grade;
        console.log(personalMovieDB);
    } else {
        i--;
    } // Если через точку то выведется movie вместо значения переменной
}
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/




// Код возьмите из предыдущего домашнего задания