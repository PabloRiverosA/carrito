import Producto from "./Producto.mjs";
import Carrito from "./Carrito.mjs";

// Función para mostrar los productos
function mostrarProductos(productosDisponibles) {
  return productosDisponibles
    .map(
      (producto, index) =>
        `${index + 1}.- ${producto.mostrarInformacion()}`
    )
    .join("\n");
}

// Función para seleccionar un producto
function seleccionarProducto(productosDisponibles) {
  let seleccion;
  let productoSeleccionado = null;

  while (!productoSeleccionado) {
    seleccion = parseInt(
      prompt("Productos disponibles:\n" + mostrarProductos(productosDisponibles))
    );

    if (isNaN(seleccion) || seleccion < 1 || seleccion > productosDisponibles.length) {
      alert("Selección no válida. Por favor, elige un número del 1 al " + productosDisponibles.length);
    } else {
      productoSeleccionado = productosDisponibles[seleccion - 1];
    }
  }

  return productoSeleccionado;
}

// Función para pedir la cantidad del producto
function pedirCantidad() {
  let cantidad;

  while (true) {
    cantidad = parseInt(prompt("Ingresa la cantidad de unidades:"));
    if (!isNaN(cantidad) && cantidad > 0) {
      return cantidad;
    } else {
      alert("Cantidad no válida. Intenta nuevamente con un número mayor a 0.");
    }
  }
}

// Función para confirmar si el usuario desea continuar comprando
function preguntarContinuar() {
  const respuesta = prompt("¿Deseas seguir agregando productos? (s/n):").toLowerCase();
  return respuesta === "s";
}

// Función principal para gestionar la compra
function gestionarCompra() {
  const productosDisponibles = [
    new Producto("Leche", 1500),
    new Producto("Pan de Molde", 2000),
    new Producto("Cerveza", 1200),
    new Producto("Mermelada", 890),
    new Producto("Azúcar", 1300),
  ];

  const carrito = new Carrito();
  let continuar = true;

  while (continuar) {
    const productoSeleccionado = seleccionarProducto(productosDisponibles);
    const cantidadProducto = pedirCantidad();
    productoSeleccionado.cantidad = cantidadProducto; // Asignar cantidad al producto
    carrito.agregarProductos(productoSeleccionado);

    continuar = preguntarContinuar();
  }

  carrito.finalizarCompra();
}

gestionarCompra();
