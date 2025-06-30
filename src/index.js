require("./db/config.db");
const express = require("express");
const morgan = require("morgan");
const app = express();
const morgan = require("morgan");

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//rutas
app.use("/productos", require("./routes/productos.routes"));

app.listen(process.env.PORT, () => {
  console.log("Servidor prendido en puerto: ", process.env.PORT);
});
