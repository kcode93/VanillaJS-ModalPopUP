const toggle = document.querySelector('#toggle');
const close = document.querySelector('#close');
const open = document.querySelector('#open');
const modal = document.querySelector('#modal');

//toggle nav
toggle.addEventListener('click', ()=>
    document.body.classList.toggle('show-nav')
);