const MENUBUTTON = document.querySelector('.menu-label');           // Gets the first element with menu-label from DOM
const NAVIGATIONMENU = document.querySelector('.navigation-menu');  // Gets the first element with navigation-menu from DOM

MENUBUTTON.addEventListener('click', () =>                          // Adds a listener on MENUBUTTON to check for a click event
    {NAVIGATIONMENU.classList.toggle('responsive')}, false          // On click triggers callback funtion that adds responsive class 
);                                                                  // To NAVIGATIONMENU or removes it if it already has it
