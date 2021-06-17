window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const logo = document.getElementsByClassName('arrow')[0];

    if (scrollPos >= 100) logo.classList.add('arrow--scrolled');
    else logo.classList.remove('arrow--scrolled');
});
