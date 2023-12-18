$(document).ready(function () {
    // Inicializar DataTable
    $('#productTable').DataTable();

    // Datos de ejemplo
    var data = [
        { nombre: 'Producto 1', precio: '$10.00', enlace: 'https://example.com/product1', imagen: 'imagen1.jpg' },
        { nombre: 'Producto 2', precio: '$20.00', enlace: 'https://example.com/product2', imagen: 'imagen2.jpg' },
        // Agrega más productos según sea necesario
    ];

    // Inicializar modal
    $('.modal').modal();
});

// Función para mostrar el modal con la imagen
function showModal(image) {
    $('#modalImage').attr('src', image);
    $('#imageModal').modal('open');
}
