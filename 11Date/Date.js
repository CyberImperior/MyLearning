'use strict';

const now = new Date();
//new Date.parse('2022-04-08'); // разницы со строчкой сверху никакой нет
// год всегда четырехзначный возвращаются цифры
console.log(now.getFullYear());
console.log(now.getMonth()); // месяцы -1
console.log(now.getDate()); // дата нормально
console.log(now.getDay()); // отсчет с воскресенья
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

console.log(now.getUTCHours()); // получить дату по UTC