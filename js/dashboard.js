let btn_menu = document.querySelector('.menu');
let btn_close = document.querySelector('.close');
let aside = document.querySelector('aside');



btn_menu.addEventListener('click', function (event) {
    event.preventDefault();
    aside.style.display = "block";
    aside.style.animation = "slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both";
});


btn_close.addEventListener('click', function (event) {
    event.preventDefault();
    aside.style.animation = "slide-in-exit 2s ease";
});
