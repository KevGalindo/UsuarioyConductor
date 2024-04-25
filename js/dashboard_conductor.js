// dashboard.js
// dashboard_conductor.js

document.addEventListener('DOMContentLoaded', function() {
    // Simular datos de usuarios y montos de viajes (reemplaza esto con tu propia lógica de obtención de datos)
    const usuarios = [
        { id: 1, nombre: 'Usuario 1', viajes: 10 },
        { id: 2, nombre: 'Usuario 2', viajes: 8 },
        { id: 3, nombre: 'Usuario 3', viajes: 6 },
        { id: 4, nombre: 'Usuario 4', viajes: 4 },
        { id: 5, nombre: 'Usuario 5', viajes: 2 }
    ];

    const montoTotal = 500; // Simular monto total de viajes

    // Mostrar la lista de usuarios que más abordaron el vehículo
    const usuariosAbordaronContainer = document.getElementById('usuarios-abordaron');
    usuariosAbordaronContainer.innerHTML = ''; // Limpiar contenido actual

    usuarios.forEach(usuario => {
        // Crear elementos HTML para mostrar la información del usuario
        const usuarioElement = document.createElement('div');
        usuarioElement.innerHTML = `
            <p><strong>Nombre:</strong> ${usuario.nombre}</p>
            <p><strong>Viajes:</strong> ${usuario.viajes}</p>
        `;
        usuariosAbordaronContainer.appendChild(usuarioElement);
    });

    // Mostrar el monto total de los viajes realizados
    const montoTotalContainer = document.getElementById('monto-total');
    montoTotalContainer.innerHTML = `<p><strong>Monto Total:</strong> ${montoTotal}</p>`;
    
    // Manejar evento de clic en el botón "Salir"
    document.getElementById('salir').addEventListener('click', function() {
        // Limpiar el localStorage y redirigir al usuario a la página de inicio de sesión
        localStorage.removeItem('userId');
        window.location.href = 'index.html';
    });
});

// Función para cerrar sesión
function logout() {
    // Eliminar el userType y userId del localStorage
    localStorage.removeItem('userType');
    localStorage.removeItem('userId');
    // Redirigir al index del login
    window.location.href = 'index.html';
}

// Obtener referencias a los elementos del DOM
const logoutButtonUser = document.getElementById('logout-user');
const logoutButtonDriver = document.getElementById('logout-driver');

// Manejar evento de clic en el botón de salir para usuarios
if (logoutButtonUser) {
    logoutButtonUser.addEventListener('click', () => {
        logout();
    });
}

// Manejar evento de clic en el botón de salir para conductores
if (logoutButtonDriver) {
    logoutButtonDriver.addEventListener('click', () => {
        logout();
    });
}

// Verificar si el usuario está logueado
if (!localStorage.getItem('userType')) {
    // Redirigir al index del login si no está logueado
    window.location.href = '../index.html';
}