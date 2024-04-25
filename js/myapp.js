

// Datos de usuarios y conductores
const userData = [
    { id: 1, email: 'usuario@gmail.com', password: 'contraseña' },
];

const driverData = [
    { id: 1, email: 'conductor@gmail.com', password: 'contraseña' },
];

function loginUser(email, password) {
    // Verificar si el usuario está en los datos
    const user = userData.find(user => user.email === email && user.password === password);
    if (user) {
        
        localStorage.setItem('userType', 'user');
        localStorage.setItem('userId', user.id);
        
        window.location.href = 'dashboard_usuario.html';
    } else {
        document.getElementById('user-error').textContent = "Credenciales incorrectas";
    }
}


function loginDriver(email, password) {
    
    const driver = driverData.find(driver => driver.email === email && driver.password === password);
    if (driver) {
        
        localStorage.setItem('userType', 'driver');
        localStorage.setItem('userId', driver.id);
        
        window.location.href = 'dashboard_conductor.html';
    } else {
        document.getElementById('driver-error').textContent = "Credenciales incorrectas";
    }
}


const userLoginForm = document.getElementById('user-login');
const driverLoginForm = document.getElementById('driver-login');


userLoginForm.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    loginUser(email, password);
});


driverLoginForm.addEventListener('click', () => {
    const email = document.getElementById('driver-email').value;
    const password = document.getElementById('driver-password').value;
    loginDriver(email, password);
});
