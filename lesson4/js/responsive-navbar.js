const MENUBUTTON = document.querySelector('.menu-label');
const NAVIGATIONMENU = document.querySelector('.navigation-menu');

MENUBUTTON.addEventListener('click', () => 
    {NAVIGATIONMENU.classList.toggle('responsive')}, false
);
