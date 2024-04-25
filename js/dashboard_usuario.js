

document.addEventListener('DOMContentLoaded', function() {
    
    const userId = localStorage.getItem('userId');

    const viajes = [
        { id: 1, duracion: '1 hora', fecha: '2024-04-25', origen: 'A', destino: 'B', conductor: 'Conductor 1' },
        { id: 2, duracion: '2 horas', fecha: '2024-04-24', origen: 'B', destino: 'C', conductor: 'Conductor 2' },
        { id: 3, duracion: '3 horas', fecha: '2024-04-23', origen: 'C', destino: 'D', conductor: 'Conductor 3' },
        { id: 4, duracion: '4 horas', fecha: '2024-04-22', origen: 'D', destino: 'E', conductor: 'Conductor 4' },
        { id: 5, duracion: '5 horas', fecha: '2024-04-21', origen: 'E', destino: 'F', conductor: 'Conductor 5' },
        { id: 6, duracion: '6 horas', fecha: '2024-04-20', origen: 'F', destino: 'G', conductor: 'Conductor 6' },
        { id: 7, duracion: '7 horas', fecha: '2024-04-19', origen: 'G', destino: 'H', conductor: 'Conductor 7' },
        { id: 8, duracion: '8 horas', fecha: '2024-04-18', origen: 'H', destino: 'I', conductor: 'Conductor 8' },
        { id: 9, duracion: '9 horas', fecha: '2024-04-17', origen: 'I', destino: 'J', conductor: 'Conductor 9' },
        { id: 10, duracion: '10 horas', fecha: '2024-04-16', origen: 'J', destino: 'K', conductor: 'Conductor 10' }
    ];

    // Mostrar los últimos 4 viajes del usuario
    const ultimosViajes = viajes.slice(0, 4); // Obtener los primeros 4 elementos del array

    ultimosViajes.forEach(viaje => {
        // Crear elementos HTML para mostrar la información del viaje
        const viajeElement = document.createElement('div');
        viajeElement.innerHTML = `
            <p><strong>Duración del viaje:</strong> ${viaje.duracion}</p>
            <p><strong>Fecha:</strong> ${viaje.fecha}</p>
            <p><strong>Origen:</strong> ${viaje.origen}</p>
            <p><strong>Destino:</strong> ${viaje.destino}</p>
            <p><strong>Conductor:</strong> ${viaje.conductor}</p>
        `;
        document.getElementById('ultimos-viajes').appendChild(viajeElement);
    });

    // Manejar evento de clic en el botón "Ver más"
    document.getElementById('ver-mas').addEventListener('click', function() {
        // Mostrar los siguientes 4 viajes (puedes ajustar la cantidad según sea necesario)
        for (let i = 4; i < viajes.length; i++) {
            const viaje = viajes[i];
            // Crear elementos HTML para mostrar la información del viaje
            const viajeElement = document.createElement('div');
            viajeElement.innerHTML = `
                <p><strong>Duración del viaje:</strong> ${viaje.duracion}</p>
                <p><strong>Fecha:</strong> ${viaje.fecha}</p>
                <p><strong>Origen:</strong> ${viaje.origen}</p>
                <p><strong>Destino:</strong> ${viaje.destino}</p>
                <p><strong>Conductor:</strong> ${viaje.conductor}</p>
            `;
            document.getElementById('ultimos-viajes').appendChild(viajeElement);
        }
        // Ocultar el botón "Ver más" después de cargar todos los viajes
        document.getElementById('ver-mas').style.display = 'none';
    });
});


// Función para cerrar sesión
function logout() {
    localStorage.removeItem('userType');
    localStorage.removeItem('userId');
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
    window.location.href = 'index.html';
}