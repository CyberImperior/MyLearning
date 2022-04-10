window.addEventListener('DOMContentLoaded', () => { 
    const btnWhite = document.querySelector('.btn_white')
    const btnDark = document.querySelector('.btn_dark')
    const modal = document.querySelector('.modal')
    btnWhite.addEventListener('click', () => {
        modal.style.display = 'block';
    })
    modal.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('modal__close') ) {
            modal.style.display = 'none';
        }
    })
    btnDark.addEventListener('click', (e) => {
        modal.style.display = 'block';
    })



})