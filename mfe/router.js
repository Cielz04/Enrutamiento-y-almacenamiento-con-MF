import { renderInicio } from './mfe-inicio.js';
import { renderPerfil } from './mfe-perfil.js';
import { renderConfig } from './mfe-config.js';

import { setVista } from '../storage.js';

const routes = {
    'inicio': renderInicio,
    'perfil': renderPerfil,
    'config': renderConfig
};

function resolveRoute() {
    // Obtener el hash de la URL actual. Si no hay, usar '#!/inicio' por defecto.
    const hash = location.hash || '#!/inicio';

    // Limpiar el hash para obtener el nombre de la ruta (ej. 'inicio').
    const name = hash.replace('#!/', '') || 'inicio';

    // Buscar la función de renderizado en nuestro objeto de rutas.
    // Si la ruta no existe (ej. #!/otracosa), redirigir a 'inicio'.
    const renderFunction = routes[name] || routes['inicio'];

    // Obtener el contenedor principal de la aplicación.
    const appContainer = document.getElementById('app');
    
    // Limpiar el contenido anterior antes de renderizar el nuevo.
    appContainer.innerHTML = '';

    // Ejecutar la función de renderizado, pasándole el contenedor donde debe "dibujarse".
    renderFunction(appContainer);

    // Guardar la vista actual en SessionStorage para cumplir con los requisitos.
    setVista(name);
}

window.addEventListener('hashchange', resolveRoute);
window.addEventListener('DOMContentLoaded', resolveRoute);