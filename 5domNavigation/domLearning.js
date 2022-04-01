// все элементы html
console.log(document.head);
console.log(document.documentElement);

// получаем псевдомасив нод лист (все комменты и переносы входят), все узлы
console.log(document.body.childNodes);

// получаем первый и последний нод элементы
console.log(document.body.firstChild);
console.log(document.body.lastChild);

// получаем первый и последний дочерние элементы 
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

// получаем первого родителя ноду
console.log(document.querySelector('#current').parentNode);
// получение следующего родителя ноду
console.log(document.querySelector('#current').parentNode.parentNode);

// получаем первого родителя ноду
console.log(document.querySelector('#current').parentElement);
// получение следующего родителя ноду
console.log(document.querySelector('#current').parentElement.parentElement);

// получение элемента по атрибуту тега
console.log(document.querySelector('[data-current="3"]'));

// получение следующей и предыдущей ноды
console.log(document.querySelector('[data-current="3"]').nextSibling);
console.log(document.querySelector('[data-current="3"]').previousSibling);

// получение следующого и предыдущего элемента
console.log(document.querySelector('[data-current="3"]').nextElementSibling);
console.log(document.querySelector('[data-current="3"]').previousElementSibling);
