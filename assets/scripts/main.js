const open_nav = document.querySelector('#open_nav');
const close_nav = document.querySelector('#close_nav');
const nav_modalo = document.querySelector('#ham-nav-modal_container');

open_nav.addEventListener('click', () => {
  nav_modalo.classList.add('show');
  open_nav.style.visibility = "hidden";
});

close_nav.addEventListener('click', () => {
  nav_modalo.classList.remove('show');
  open_nav.style.visibility = "visible";
});