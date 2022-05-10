const boton = document.querySelector('#funcionalidad');

boton.addEventListener('click',() => { //si presionamos el boton vera si tiene la clase dark y si no la tiene se la pondra
    document.body.classList.toggle('dark');
    boton.classList.toggle('active');
})
