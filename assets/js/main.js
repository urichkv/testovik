let burgerImg = document.querySelector('.header-burger__img')
let burgerMenu = document.querySelector('.header-burger__menu')
let firstHeaderForm = document.querySelector('.first-header__form')
let firstHeaderUnderForm = document.querySelector('.first-header__underform')
let secondHeaderForm = document.querySelector('.second-header__form')
let secondHeaderUnderForm = document.querySelector('.second-header__underform')

function info() {
    burgerImg.addEventListener('click', () => {
        burgerMenu.classList.toggle('active')
    })

    window.addEventListener('click', (event) => {
        if (!event.target.closest('.header-burger__menu') && !event.target.closest('.header-burger__img') && burgerMenu.classList.contains('active')) {
            burgerMenu.classList.remove('active');
        }
    })

    window.addEventListener('scroll', () => {
        if (burgerMenu.classList.contains('active')) {
            burgerMenu.classList.remove('active');
        }
    })

    firstHeaderForm.addEventListener('click', () => {
        firstHeaderUnderForm.classList.toggle('enabled')
    })

    secondHeaderForm.addEventListener('click', () => {
        secondHeaderUnderForm.classList.toggle('turn')
    })
}
info()