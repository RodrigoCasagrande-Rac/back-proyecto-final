import Cancha from "../model/canchas.js";

const obtenerTodasLasCanchas = async () => {
  try {
    const canchas = await Cancha.find();
    return { data: canchas, statusCode: 200 };
  } catch (error) {
    return { data: { message: "Error al obtener canchas" }, statusCode: 500 };
  }
};

const crearNuevaCancha = async ({ descripcion, precio, estado }) => {
  if (!descripcion || !precio || !estado) {
    return { data: { message: "Faltan datos" }, statusCode: 400 };
  }

  try {
    const cancha = new Cancha({ descripcion, precio, estado });
    await cancha.save();
    return { data: cancha, statusCode: 201 };
  } catch (error) {
    return { data: { message: "Error al crear la cancha" }, statusCode: 500 };
  }
};

const actualizarCanchaPorId = async (id, { descripcion, precio, estado }) => {
  if (!descripcion || !precio || !estado) {
    return { data: { message: "Faltan datos" }, statusCode: 400 };
  }

  try {
    const cancha = await Cancha.findById(id);
    if (!cancha) {
      return { data: { message: "Cancha no encontrada" }, statusCode: 404 };
    }

    const canchaActualizada = await Cancha.findByIdAndUpdate(
      id,
      { descripcion, precio, estado },
      { new: true }
    );

    return { data: canchaActualizada, statusCode: 200 };
  } catch (error) {
    return {
      data: { message: "Error al actualizar la cancha" },
      statusCode: 500,
    };
  }
};

const eliminarCanchaPorId = async (id) => {
  try {
    const cancha = await Cancha.findById(id);
    if (!cancha) {
      return { data: { message: "Cancha no encontrada" }, statusCode: 404 };
    }

    await Cancha.findByIdAndDelete(id);
    return {
      data: { message: "Cancha eliminada correctamente" },
      statusCode: 200,
    };
  } catch (error) {
    return {
      data: { message: "Error al eliminar la cancha" },
      statusCode: 500,
    };
  }
};

module.exports = {
  obtenerTodasLasCanchas,
  crearNuevaCancha,
  actualizarCanchaPorId,
  eliminarCanchaPorId,
  Cancha,
};
