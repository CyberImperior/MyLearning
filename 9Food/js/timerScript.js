// в консоли нельзя прописать функции
window.addEventListener('DOMContentLoaded', () => {
    const deadline = '2022-04-11' // инпуты возвращают дату в виде такой строки
    // remaining - остаток
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()) // количество миллисекунд
        const days = Math.floor(t / (1000 * 60 * 60 * 24))
        const hours = Math.floor((t / (1000 * 60 * 60) % 24))
        const minutes = Math.floor((t / (1000 * 60) % 60))
        const seconds = Math.floor((t / 1000) % 60)
        
        // вернется объект
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

        // set - установить
        function setClock(selector, endtime) {
            const timer = document.querySelector(selector)
            const days = timer.querySelector('#days')
            const hours = timer.querySelector('#hours')
            const minutes = timer.querySelector('#minutes')
            const seconds = timer.querySelector('#seconds')
            const timeInterval = setInterval(updateClock, 1000);

            // функция инициализации, чтобы сразу был правильно выставленный обратный отсчет
            updateClock();

            function updateClock() {
                const t = getTimeRemaining(endtime)

                days.innerHTML = getZero(t.days)
                hours.innerHTML = getZero(t.hours)
                minutes.innerHTML = getZero(t.minutes)
                seconds.innerHTML = getZero(t.seconds)
                if (t.total <= 0) {
                    clearInterval(timeInterval)
                }
            }
        }
        setClock('.timer', deadline);
    

})