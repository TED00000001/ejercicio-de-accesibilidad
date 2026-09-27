const body = document.body;
const btnContraste = document.getElementById('btn-contraste');
const btnMas = document.getElementById('btn-mas');
const textoPrincipal = document.getElementById('texto-principal');
const imagenTi = document.getElementById('imagen-ti');
const avisos = document.getElementById('avisos');

let fontSize = 16;

btnContraste.addEventListener('click', () => {
const activo = body.classList.toggle('alto-contraste');
btnContraste.setAttribute('aria-pressed', activo);
avisos.textContent = "Alto contraste activado";
});

btnMas.addEventListener('click', () => {
fontSize += 2;
textoPrincipal.style.fontSize = fontSize + "px";
avisos.textContent = "Tamaño de fuente aumentado a " + fontSize + " píxeles";
});

imagenTi.addEventListener('click', () => {
const zoomed = imagenTi.classList.toggle('imagen-zoom');
if (zoomed) {
avisos.textContent = "Imagen ampliada";
} else {
avisos.textContent = "Imagen en tamaño normal";
}
});