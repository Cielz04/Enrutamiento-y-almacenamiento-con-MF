// Obtiene el nombre del usuario. Si no existe, devuelve una cadena vacía.
export const getNombre = () => localStorage.getItem('nombreUsuario') || '';

// Guarda el nombre del usuario.
export const setNombre = (v) => localStorage.setItem('nombreUsuario', v);

// Obtiene el color de fondo. Si no existe, devuelve blanco por defecto.
export const getColor = () => localStorage.getItem('colorFondo') || '#ffffff';

// Guarda el color de fondo.
export const setColor = (v) => localStorage.setItem('colorFondo', v);

/**
 * Funciones para interactuar con SessionStorage (se limpia al cerrar la sesión)
 */

// Guarda la última vista visitada en la sesión actual.
export const setVista = (ruta) => sessionStorage.setItem('vistaActual', ruta);

// Obtiene la última vista visitada.
export const getVista = () => sessionStorage.getItem('vistaActual');

/**
 * Función para limpiar ambos almacenamientos.
 */
export const clearAll = () => {
    localStorage.clear();
    sessionStorage.clear();
};