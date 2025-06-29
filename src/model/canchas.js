import { Schema, model } from "mongoose";

//id, descripcion, precio, tipo, estado
const CanchaSchema = Schema(
  {
    descripcion: {
      type: String,
      required: true,
      trim: true,
    },

    precio: {
      type: Number,
      required: true,
    },

    estado: {
      type: String,
      required: true,
      enum: ["Disponible", "Ocupada", "En mantenimiento"],
    },
    tipo: {
      type: String,
      enum: ["Fútbol 5", "Fútbol 7", "Fútbol 11"],
      required: true,
      default: "Fútbol 5",
    },
  },
  {
    timestamps: true,
  }
);

const Cancha = model("Cancha", CanchaSchema);

export default Cancha;

/* Para probar Postman envia este json:
{
    "descripcion": "Cancha 1",
    "precio": 100,
    "estado": "Disponible"
}
*/
