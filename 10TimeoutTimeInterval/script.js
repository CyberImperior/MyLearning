// первый параметр функция, второе задержка, третий параметры функции неограниченное количество
const timerId = setTimeout(function(text) {
    console.log(text);
}, 2000, 'hello');

// функция без скобок
const timerId1 = setTimeot(logger, 2000);
function logger () {
    console.log('text');
}