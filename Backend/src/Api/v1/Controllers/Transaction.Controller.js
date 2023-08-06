import transaccionesService from "../Services/Transaction.js";
import { sendErrorResponse, handleResponse } from "../Helpers/sendResponse.js";

const getAllTransacciones = async (req, res) => {
  try {
    const { id } = req.user;
    const allTransancciones = await transaccionesService.getAllTransacciones(
      id
    );
    handleResponse(res, allTransancciones);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const getOneTransaccion = async (req, res) => {
  try {
    const { transaccionId } = req.params;
    const OneTransaccion = await transaccionesService.getOneTransaccion(
      transaccionId
    );
    handleResponse(res, OneTransaccion);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createNewTransaccion = async (req, res) => {
  try {
    const { id } = req.user;
    const { categoria, tipo, monto, fecha } = req.body;

    const data = {
      usuario: id,
      categoria,
      tipo,
      monto,
      fecha,
    };

    const createdTransaccion = await transaccionesService.createNewTransaccion(
      data
    );
    handleResponse(res, createdTransaccion);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateOneTransaccion = async (req, res) => {
  try {
    const { id } = req.user;
    const { categoria, tipo, monto, fecha } = req.body;

    const data = {
      usuario: id,
      categoria,
      tipo,
      monto,
      fecha,
    };
    const { transaccionId } = req.params;
    const updatedUsuario = await transaccionesService.updateOneTransaccion(
      transaccionId,
      data
    );
    handleResponse(res, updatedUsuario);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteOneTransaccion = async (req, res) => {
  try {
    const { transaccionId } = req.params;
    const deletedTransaccion = await transaccionesService.deleteOneTransaccion(
      transaccionId
    );
    handleResponse(res, deletedTransaccion);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export default {
  getAllTransacciones,
  getOneTransaccion,
  createNewTransaccion,
  updateOneTransaccion,
  deleteOneTransaccion,
};
