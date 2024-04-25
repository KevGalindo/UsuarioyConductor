
document.addEventListener('DOMContentLoaded', function() {
    const usuarios = [
        { id: 1, nombre: 'Usuario 1', viajes: 10 },
        { id: 2, nombre: 'Usuario 2', viajes: 8 },
        { id: 3, nombre: 'Usuario 3', viajes: 6 },
        { id: 4, nombre: 'Usuario 4', viajes: 4 },
        { id: 5, nombre: 'Usuario 5', viajes: 2 }
    ];

    const montoTotal = 500; 


    const usuariosAbordaronContainer = document.getElementById('usuarios-abordaron');
    usuariosAbordaronContainer.innerHTML = ''; 

    usuarios.forEach(usuario => {
       
        const usuarioElement = document.createElement('div');
        usuarioElement.innerHTML = `
            <p><strong>Nombre:</strong> ${usuario.nombre}</p>
            <p><strong>Viajes:</strong> ${usuario.viajes}</p>
        `;
        usuariosAbordaronContainer.appendChild(usuarioElement);
    });

    
    const montoTotalContainer = document.getElementById('monto-total');
    montoTotalContainer.innerHTML = `<p><strong>Monto Total:</strong> ${montoTotal}</p>`;
    
   
    document.getElementById('salir').addEventListener('click', function() {
   
        localStorage.removeItem('userId');
        window.location.href = 'index.html';
    });
});

function logout() {
    
    localStorage.removeItem('userType');
    localStorage.removeItem('userId');
    // Redirigir al index del login
    window.location.href = 'index.html';
}


const logoutButtonUser = document.getElementById('logout-user');
const logoutButtonDriver = document.getElementById('logout-driver');


if (logoutButtonUser) {
    logoutButtonUser.addEventListener('click', () => {
        logout();
    });
}


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
