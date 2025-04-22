// 
"use strict";

let menu = document.getElementById('menu');
let nav = document.getElementById('navbar');

menu.addEventListener('click', () => {
    nav.classList.toggle('show');
});

