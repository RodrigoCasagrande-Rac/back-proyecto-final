const express = require("express");
const {
  obtenerTodosLosProductos,
  obtenerUnProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} = require("../controllers/productos.controllers");
const router = express.Router();

//obtener todos los productos
router.get("/", obtenerTodosLosProductos);

//obtener un producto
router.get("/:id", obtenerUnProducto);

//crear un producto
router.post("/", crearProducto);

//actualizar producto
router.put("/:id", actualizarProducto);

//eliminar producto
router.delete("/:id", eliminarProducto);

module.exports = router;
