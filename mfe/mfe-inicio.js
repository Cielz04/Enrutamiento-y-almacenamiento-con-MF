import { getNombre, getColor } from '../storage.js';

export function renderInicio(container) {
    
    const nombre = getNombre();
    const color = getColor();

    document.body.style.backgroundColor = color;

    container.innerHTML = `
        <h2>Inicio</h2>
        <p>Bienvenido${nombre ? ` <strong>${nombre}</strong>` : ''}!</p>
        <p>
            Color de fondo actual: 
            <span style="background:${color}; padding: 3px 8px; border-radius: 4px; border: 1px solid #ccc;">
                ${color}
            </span>
        </p>
        <p>Usa el menú para navegar a Perfil o Config.</p>
    `;
}