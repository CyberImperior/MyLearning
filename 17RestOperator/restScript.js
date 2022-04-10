// rest - оставшиейся переводится
// неизвестно поличество аргументов rest оператор как раз этим и занимается
// ...rest возвращает массив следующих аргументов
// rest собирает аргументы в массив

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage')

// параметры по умолчанию
function calcOrDouble(number, basis = 2) {
    // возвращается первое правдивое выражение
    // basis = basis || 2
    console.log(number * basis)
}

calcOrDouble(5)