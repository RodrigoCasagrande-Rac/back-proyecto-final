const {
  obtenerTodosLosProductosArray,
  actualizarProductoArray,
  crearNuevoProductoArray,
  eliminarProductoArray,
  obtenerUnProductoPorIdArray,
} = require("../services/productos.services");

const obtenerTodosLosProductos = (req, res) => {
  const { productos, statusCode } = obtenerTodosLosProductosArray(req.body);
  res.status(statusCode).json({ productos });
};

const obtenerUnProducto = (req, res) => {
  const { producto, statusCode } = obtenerUnProductoPorIdArray(req.params.id);
  res.status(statusCode).json({ producto });
};

const crearProducto = (req, res) => {
  const { msg, statusCode } = crearNuevoProductoArray(req.body);
  res.status(statusCode).json({ msg });
};

const actualizarProducto = (req, res) => {
  const { msg, statusCode } = actualizarProductoArray(req.params.id, req.body);
  res.status(statusCode).json({ msg });
};

const eliminarProducto = (req, res) => {
  const { msg, statusCode } = eliminarProductoArray(req.params.id);
  res.status(statusCode).json({ msg });
};

module.exports = {
  obtenerTodosLosProductos,
  obtenerUnProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};
