import { getNombre, getColor, clearAll } from '../storage.js';

export function renderConfig(container) {
    const nombre = getNombre();
    const color = getColor();

    container.innerHTML = `
        <h2>Configuración</h2>
        <p>Aquí puedes borrar todos los datos guardados en la aplicación.</p>
        
        <h4>Datos guardados actualmente:</h4>
        <p>Nombre guardado: <strong>${nombre || '(ninguno)'}</strong></p>
        <p>
            Color actual: 
            <span style="background:${color}; padding: 3px 8px; border-radius: 4px; border: 1px solid #ccc;">
                ${color}
            </span>
        </p>

        <button id="btn-borrar">Borrar todos los datos</button>
    `;

    const btnBorrar = container.querySelector('#btn-borrar');

    btnBorrar.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres borrar todos tus datos? Esta acción no se puede deshacer.')) {
            clearAll();
            document.body.style.backgroundColor = '';
            location.hash = '#!/inicio';
        }
    });
}