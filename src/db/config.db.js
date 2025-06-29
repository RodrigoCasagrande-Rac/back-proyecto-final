const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_ACCESS)
  .then(() => console.log("Conectado a la base de datos"))
  .catch((error) =>
    console.error("Error al conectar a la base de datos:", error)
  );
