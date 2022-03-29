useStrict();

function useStrict() {
    'use strict';
    return true;
}

let numberOfFilms = 0;

const personalMovieDB = { //DB - database
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    writeNumbersOfFilms: function () {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');
        if (personalMovieDB.checkInputText(numberOfFilms)) {
            personalMovieDB.count = numberOfFilms;
            personalMovieDB.showWhatViewerYou();
        } else {
            numberOfFilms = 0;
            alert('Неккоректное значение');
            personalMovieDB.writeNumbersOfFilms();
        }
    },
    showWhatViewerYou: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман!');
        } else {
            alert('Произошла ошибка, в ввели не число!');
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log('Нет прав доступа');
        }
    },
    writeMoviesAndGrades: function () {
        for (let i = 0; i <= 1; i++) {
            let movie = prompt('Один из последних просмотренных фильмов?'),
                grade = prompt('На сколько оцените его?');
            if (personalMovieDB.checkInputText(movie) && personalMovieDB.checkInputText(grade)) {
                personalMovieDB.movies[movie] = grade;
                console.log(personalMovieDB);
            } else {
                alert('Неккоректное значение');
                i--;
            }
        }
    },
    checkInputText: function (inputText) {
        if (inputText !== undefined && inputText !== null && inputText !== '') {
            return true;
        } else {
            return false;
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i <= 2; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
            if (personalMovieDB.checkInputText(genre)) {
                personalMovieDB.genres.push(genre);
            } else {
                alert('Неккоректное значение');
                i--;
            }
        }
        personalMovieDB.genres.forEach(function (item, i) {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });

    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === true) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

};




/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


// Код возьмите из предыдущего домашнего задания