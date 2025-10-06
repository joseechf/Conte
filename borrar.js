
const productos = [
  { nombre: "Camiseta", color: "rojo", talla: "M", precio: 20 },
  { nombre: "Pantalón", color: "azul", talla: "L", precio: 40 },
  { nombre: "Gorra", color: "rojo", talla: "S", precio: 15 },
  { nombre: "Zapatos", color: "negro", talla: "M", precio: 50 },
];


function filtrarProductos(filtros) {
  return productos.filter(producto => {
    // Cada filtro se aplica solo si existe
    const cumpleColor = filtros.color ? producto.color === filtros.color : true;
    const cumpleTalla = filtros.talla ? producto.talla === filtros.talla : true;
    const cumplePrecio = filtros.precioMax ? producto.precio <= filtros.precioMax : true;

    // Solo devuelve los productos que cumplen **todos los filtros activos**
    return cumpleColor && cumpleTalla && cumplePrecio;
  });
}

// Ejemplos de uso
console.log(filtrarProductos({ color: "rojo" }));
console.log(filtrarProductos({ talla: "M", precioMax: 30 }));
console.log(filtrarProductos({}));
