// Función para añadir productos al carrito
function addToCart(productId) {
    console.log('Producto ' + productId + ' añadido al carrito');
    // Simulación de acción: en un entorno real, se añadiría a un carrito
}

// Validación y envío del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Aquí iría el código para enviar el formulario al servidor
        alert('Formulario enviado con éxito');
    } else {
        alert('Por favor, rellene todos los campos');
    }
});
