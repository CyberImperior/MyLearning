useStrict();

function useStrict() {
    'use strict';
    return true;
}

let numberOfFilms = 0;

function writeNumbersOfFilms() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');
    personalMovieDB.count = numberOfFilms;
    showWhatViewerYou();
}

let personalMovieDB = { //DB - database
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function showWhatViewerYou() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман!');
    } else {
        alert('Произошла ошибка!');
    }
}

function writeMoviesAndGrades() {
    for (let i = 0; i <= 1; i++) {
        let movie = prompt('Один из последних просмотренных фильмов?'),
            grade = prompt('На сколько оцените его?');
        if (movie !== null && movie !== '' && movie.length < 50 && grade !== null && grade !== '' && grade.length < 50) {
            personalMovieDB.movies[movie] = grade;
            console.log(personalMovieDB);
        } else {
            i--;
        }
    }
}

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log('Нет прав доступа');
    }
}

function writeYourGenres() {
    for (let i = 0; i <= 2; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
        personalMovieDB.genres.push(genre);
    }
}


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/



// Код возьмите из предыдущего домашнего задания