document.getElementById('mainForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const pais = document.getElementById('pais').value;
    const provincia = document.getElementById('provincia').value.trim();
    
    // Validaciones
    if (!nombre) {
        alert('El nombre es obligatorio');
        return;
    }
    
    if (!email) {
        alert('El email es obligatorio');
        return;
    }
    
    // Validació
 de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa u
 email válido');
        return;
    }
    
    if (!pais) {
        alert('El país es obligatorio');
        return;
    }
    
    if (!provincia) {
        alert('La provincia es obligatoria');
        return;
    }
    
    // Si todas las validaciones pasan
    alert('Formulario enviado correctamente');
    console.log({
        nombre,
        email,
        pais,
        provincia
    });
    
    // Aquí puedes agregar la lógica para enviar los datos al servidor
});