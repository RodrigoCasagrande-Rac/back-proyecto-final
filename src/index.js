const express = require("express");
const app = express();
const port = 3001;

//middlewares
app.use(express.json());

//rutas
app.use("/productos", require("./routes/productos.routes"));

app.listen(port, () => {
  console.log("Servidor prendido en puerto: ", port);
});
