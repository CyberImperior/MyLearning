// touchstart // палец консулся
// touchmove // каждый раз когда палец двигается
// touched // палец отпустился
// touchenter // палец зашел на границу элемента
// touchleave // палец ушел за пределы границы элемента
// touchcancel // 


// используют для свайпов и для зумов

// всегда начинать с этого
window.addEventListener('DOMContentLoaded', () => {
    
    const box = document.querySelector('.box');
    
    box.addEventListener('touchstart', (e) => {
        e.preventDefault(); // всегда рекомендуется для мобил
        console.log('Start');
        console.log(e.changedTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault(); // всегда рекомендуется для мобил
        // получаем координату х
        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault(); // всегда рекомендуется для мобил
        console.log('End');
    });

    // свойства для ивента
    //touches количество пальцев на экране
    //targetTouches прикосновения, которые взаимодействуют конктретно с эементом
    //changedTouches список пальцев, которые учавствуют в текущем событии
});