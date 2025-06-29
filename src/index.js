require("./db/config.db");
const express = require("express");
const app = express();
const morgan = require("morgan");

//middlewares
app.use(express.json());

//rutas
app.use("/productos", require("./routes/productos.routes"));

app.listen(process.env.PORT, () => {
  console.log("Servidor prendido en puerto: ", process.env.PORT);
});
