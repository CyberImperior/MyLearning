function useStrict() {
    'use strict';
}
useStrict();

// defer и Async это атребуты тегов
// deftr позвояет скрипту, который расположен над HTML версткой выполниться после построения верстки
// defer загружает скрипт в фоновом режиме, срабатывает только после построения dom дерева
// defer грузит скрипты по очедери

// async скрипты никого не ждут и ст
// async какой скрипт первый обработался тот и запустится
// DOM это объектная модель HTML
const p = document.querySelectorAll('p');
console.log(p);

// добавления скрипта через, js по умолчанию async
function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript('test.js');
loadScript('some.js');
