import { getNombre, getColor, setNombre, setColor } from '../storage.js';

export function renderPerfil(container) {
    const nombreActual = getNombre();
    const colorActual = getColor();

    container.innerHTML = `
        <h2>Perfil</h2>
        <p>Completa tus preferencias y guarda para persistirlas.</p>
        
        <label for="in-nombre">Nombre:</label><br>
        <input id="in-nombre" type="text" value="${nombreActual}" placeholder="Tu nombre..."><br><br>
        
        <label for="in-color">Color de fondo:</label><br>
        <input id="in-color" type="color" value="${colorActual}"><br><br>
        
        <button id="btn-guardar">Guardar</button>
    `;

    const btnGuardar = container.querySelector('#btn-guardar');
    btnGuardar.addEventListener('click', () => {
        const nuevoNombre = container.querySelector('#in-nombre').value.trim();
        const nuevoColor = container.querySelector('#in-color').value;

        setNombre(nuevoNombre);
        setColor(nuevoColor);

        document.body.style.backgroundColor = nuevoColor;

        alert('¡Preferencias guardadas!');
    });
}