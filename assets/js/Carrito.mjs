class Carrito {
  constructor() {
    this.productos = [];
  }

  agregarProductos(producto) {
    // Verificar si el producto ya existe en el carrito
    const productoExistente = this.productos.find(p => p.nombre === producto.nombre);
    if (productoExistente) {
      productoExistente.cantidad += producto.cantidad; // Aumenta la cantidad del producto existente
      alert(`${producto.cantidad} ${producto.nombre}(s) agregado(s) al carrito. Total ahora: ${productoExistente.cantidad}`);
    } else {
      this.productos.push(producto); // Agregar producto nuevo
      alert(`${producto.cantidad} ${producto.nombre}(s) agregado(s) al carrito.`);
    }
  }

  calcularTotalCompra() {
    return this.productos.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
  }

  finalizarCompra() {
    if (this.productos.length === 0) {
      alert("No hay productos en el carrito.");
      return;
    }

    const total = this.calcularTotalCompra();
    const detalleCompra = this.detalleCompra();
    alert(
      `Detalle de la compra:\n${detalleCompra}El total de su compra es ${total.toLocaleString()}\n¡Muchas gracias por su compra!`
    );
  }

  detalleCompra() {
    let detalle = "";
    this.productos.forEach((producto) => {
      detalle += `Producto: ${producto.nombre} - Precio: ${producto.getPrecioFormateado()} - Cantidad: ${producto.cantidad}\n`;
    });
    return detalle;
  }
}

export default Carrito;
