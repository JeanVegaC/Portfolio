/* ================ SHOW MODAL ==================== */

const buttons = document.querySelectorAll('.show-more'),
    cards = document.querySelectorAll('.card'),
    modal = document.querySelectorAll('.service-modal'),
    buttonsClose = document.querySelectorAll('.modal-icon-close'),
    serviceOverlay = document.querySelector('.service-overlay'),
    body = document.getElementById('body');


/* ======= OPEN MODAL ======= */
buttons.forEach((e, i, a) => {
    e.addEventListener('click', () => {
        serviceOverlay.classList.add('show-overlay');  
        modal[i].classList.add('show-modal');
        body.classList.add('no-scroll');
    })
})

/* ====== CLOSE MODAL ======= */
buttonsClose.forEach((e, i, a) => {
    e.addEventListener('click', () => {
        modal[i].classList.remove('show-modal');
        console.log('Entre');
        serviceOverlay.classList.remove('show-overlay');
        body.classList.remove('no-scroll');
    })
})

/* ========= SHOW NAV ========= */

let ancho = document.documentElement.clientWidth;
const links = document.querySelector('.links');

const navButton = document.querySelector('.nav-icon-toggle'),
    navLinks = document.querySelector('.nav-links'),
    navButtonClose = document.querySelector('.nav-icon-close');

navButton.addEventListener('click', () => {
    navLinks.classList.add('show-nav');
})

navButtonClose.addEventListener('click', () => {
    navLinks.classList.remove('show-nav');
})

