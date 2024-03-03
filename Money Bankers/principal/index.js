const botonMenu = document.querySelector('.boton-menu');
const menuDesplegable = document.querySelector('.menu-desplegable');

botonMenu.addEventListener('click', () => {
  menuDesplegable.classList.toggle('activo');
});

