window.addEventListener('DOMContentLoaded', () => { 
  const modalTrigger = document.querySelectorAll('[data-modal]')
  const modal = document.querySelector('.modal')
  const modalCloseBtn = document.querySelector('[data-close]')

    function openModal() {
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
        
    }
    modalTrigger.forEach(item => {
        item.addEventListener('click', e => {
         
            modal.classList.add('show')
            modal.classList.remove('hide')
            document.body.style.overflow = 'hidden'
            clearInterval(modalTimerId)
        })
    })
   

    modalCloseBtn.addEventListener('click', closeModal)

    // закрытие диалогового окна нажатием всюду кроме диалогового окна
    modal.addEventListener('click', e => {
        if (e.target === modal) {
            closeModal()
        }
    })
    function closeModal() {
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }

    // закрытие окна на клавишу Escape
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal()
        }
    })

    const modalTimerId = setTimeout(openModal, 5000);

    function showModalByScroll() {
         //window.scrollY  это уже прокрученная ччасть документа

        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal()
            // один раз вылазит модальное окно только
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

    // не забывать {once: true}
    // открывает модальное окно при полной прокрутке вниз
    window.addEventListener('scroll', showModalByScroll)
})