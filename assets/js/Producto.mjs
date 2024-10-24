class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = 0; // Inicializamos la cantidad en 0
    }
  
    // Método para obtener el precio formateado
    getPrecioFormateado() {
      return `$${this.precio.toLocaleString()}`;
    }
  
    // Método para mostrar información del producto
    mostrarInformacion() {
      return `${this.nombre} - ${this.getPrecioFormateado()}`;
    }
  }
  
  export default Producto;
  