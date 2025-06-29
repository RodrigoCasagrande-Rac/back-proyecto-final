import {
  obtenerTodasLasCanchas,
  crearNuevaCancha,
  actualizarCanchaPorId,
  eliminarCanchaPorId,
} from "../services/canchas.service.js";

const traerCanchas = async (req, res) => {
  const { data, statusCode } = await obtenerTodasLasCanchas();
  res.status(statusCode).json(data);
};

const crearCancha = async (req, res) => {
  const { data, statusCode } = await crearNuevaCancha(req.body);
  res.status(statusCode).json(data);
};

const actualizarCancha = async (req, res) => {
  const { data, statusCode } = await actualizarCanchaPorId(
    req.params.id,
    req.body
  );
  res.status(statusCode).json(data);
};

const eliminarCancha = async (req, res) => {
  const { data, statusCode } = await eliminarCanchaPorId(req.params.id);
  res.status(statusCode).json(data);
};

export { traerCanchas, crearCancha, actualizarCancha, eliminarCancha };
