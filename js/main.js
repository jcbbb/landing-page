(() => {
    const hamburger = document.querySelector('.nav__menu-icon');
    const nav = document.querySelector('.nav__links');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
})();
