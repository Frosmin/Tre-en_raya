document.addEventListener('DOMContentLoaded', function() {
    // Obtener el botón con id "0"
    const celda0 = document.getElementById('0');
    
    // Agregar un event listener para el evento click
    if (celda0) {
        celda0.addEventListener('click', function() {
            console.log('Has presionado la celda con id 0');
        });
    } else {
        console.error('No se encontró el elemento con id 0');
    }
});