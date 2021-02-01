const showMenu = document.getElementById('show');
const menu = document.getElementById('menu');
const hideMenu = document.getElementById('hide');

showMenu.addEventListener('click', () => {
  menu.classList.remove('out');
  menu.classList.remove('hide');
  menu.classList.add('fade');
})
hideMenu.addEventListener('click', () => {
  menu.classList.remove('fade');
  menu.classList.add('out');
  
  setTimeout(() => {
    menu.classList.add('hide');
  }, 500)
})