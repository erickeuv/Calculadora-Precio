// Precio base 
const precio = 400000;

// Obtener elementos del DOM
const cantidadElement = document.querySelector('.cantidad');
const precioInicialElement = document.querySelector('.precio-inicial');
const valorTotalElement = document.querySelector('.valor-total');
const btnIncrementar = document.querySelector('button:nth-of-type(1)');
const btnDecrementar = document.querySelector('button:nth-of-type(2)');

// Variables de estado
let cantidad = 0;

// Inicializar valores en el DOM
precioInicialElement.textContent = precio;
cantidadElement.textContent = cantidad;
valorTotalElement.textContent = '0';

// Función para actualizar la cantidad y el total
function actualizarCantidadYTotal() {
    cantidadElement.textContent = cantidad;
    const total = cantidad * precio;
    valorTotalElement.textContent = total;
}

// Función para incrementar la cantidad
btnIncrementar.addEventListener('click', function () {
    cantidad++;
    actualizarCantidadYTotal();
});

// Función para decrementar la cantidad (con límite mínimo de 0)
btnDecrementar.addEventListener('click', function () {
    if (cantidad > 0) {
        cantidad--;
        actualizarCantidadYTotal();
    }
});