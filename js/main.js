const burger = document.querySelector('.menu__burger-btn');
const menu = document.querySelector('.menu__hidden');
const wrapper = document.querySelector('.wrapper');

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');
    menu.classList.toggle('show');
    wrapper.classList.toggle('hidden');
});
