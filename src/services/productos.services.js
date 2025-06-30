let productos = [
  {
    id: 1,
    nombre: "coca-cola",
    precio: 2500,
    descripcion: "la numero uno",
  },
];

const obtenerTodosLosProductosArray = () => {
  return {
    productos,
    statusCode: 200,
  };
};

const obtenerUnProductoPorIdArray = (idProducto) => {
  const producto = productos.find((prod) => prod.id === Number(idProducto));
  if (!producto) {
    return {
      mensaje: "Producto no encontrado",
      statusCode: 404,
    };
  }
  return {
    producto,
    statusCode: 200,
  };
};

const crearNuevoProductoArray = (body) => {
  const { nombre, precio, descripcion } = body;

  const nuevoProducto = {
    id: productos[productos.length - 1]?.id + 1 || 1,
    nombre,
    precio,
    descripcion,
  };
  productos.push(nuevoProducto);
  return {
    mensaje: "Producto creado correctamente",
    statusCode: 201,
  };
};

const actualizarProductoArray = (idProducto, body) => {
  const productoIndex = productos.findIndex(
    (prod) => prod.id === Number(idProducto)
  );
  if (productoIndex === -1) {
    return {
      mensaje: "Producto no encontrado",
      statusCode: 404,
    };
  }
  productos[productoIndex] = { id: Number(idProducto), ...body };
  return {
    mensaje: "Producto actualizado correctamente",
    statusCode: 200,
  };
};

const eliminarProductoArray = (idProducto) => {
  const productoIndex = productos.findIndex(
    (prod) => prod.id === Number(idProducto)
  );
  if (productoIndex === -1) {
    return {
      mensaje: "Producto no encontrado",
      statusCode: 404,
    };
  }
  // Si el producto existe, lo eliminamos
  productos.splice(productoIndex, 1);
  if (productos.length === 0) {
    return {
      mensaje: "No hay productos para eliminar",
      statusCode: 400,
    };
  } else if (productos.length === 1) {
    return {
      mensaje: "Producto eliminado correctamente, no quedan productos",
      statusCode: 200,
    };
  }
  return {
    mensaje: "Producto eliminado correctamente",
    statusCode: 200,
  };
};

module.exports = {
  obtenerTodosLosProductosArray,
  obtenerUnProductoPorIdArray,
  crearNuevoProductoArray,
  actualizarProductoArray,
  eliminarProductoArray,
};
