// первый параметр функция, второе задержка, третий параметры функции неограниченное количество
const timerId = setTimeout(function(text) {
    console.log(text);
}, 2000, 'hello');

// функция без скобок, задается через переменную чтобы бла возможност отключить
const timerId1 = setTimeot(logger, 2000);

clearInterval(timerId1);

function logger () {
    console.log('text');
}
let timerId3;
let i = 0;

btn.addEventListener('click', () => {
    timerId3 = setInterval(logger, 500);
    
})

function logger () {
    if (i === 3) {
        clearInterval(timerId3);
    }
    console.log('text');
    i++;

}

// рекурсивный set timeout, каботает как setInterval
let id = setTimeout(function log() {
    console.log('hi');
    id = setTimeout(log, 500)
}, 500);