const burger = document.querySelector('.btn--burger');
const closeBtn = document.querySelector('.btn--close');
const mobileNav = document.querySelector('.mobile-nav')

burger.addEventListener('click', (e) => {
    let closeBtnClassList = closeBtn.classList;
    closeBtnClassList.add('btn--active');
    closeBtnClassList.remove('btn--inactive');
    mobileNav.classList.remove('display-none');
    burger.classList.add('btn--inactive');
})

closeBtn.addEventListener('click', (e) => {
    let burgerClassList = burger.classList;
    burgerClassList.add('btn--active');
    burgerClassList.remove('btn--inactive');

    mobileNav.classList.add('display-none');
    closeBtn.classList.add('btn--inactive');
})

