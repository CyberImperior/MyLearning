window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabParent = document.querySelector('.tabheader__items')

    // работа с табами
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade')
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        })  
    }
    // значение по умолчанию
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
   hideTabContent();
   showTabContent();
    // делегирование событий через родительский элемент
   tabParent.addEventListener('click', event => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            }) 
        }
   })
 



});