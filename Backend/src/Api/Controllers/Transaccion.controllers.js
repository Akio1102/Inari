import transaccionesService from "../Services/TransaccionService.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/sendResponse.js";

const getAllTransacciones = async (req, res) => {
  try {
    const allTransacciones = await transaccionesService.getAllTransacciones();
    if (allTransacciones.length > 0) {
      sendSuccessResponse(res, allTransacciones, "Transacciones encontradas");
    } else {
      sendErrorResponse(res, "No hay Transacciones", 404);
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const getOneTransaccion = async (req, res) => {
  try {
    const OneTransaccion = await transaccionesService.getOneTransaccion(
      req.params.transaccionId
    );
    if (OneTransaccion) {
      sendSuccessResponse(res, OneTransaccion, "Transaccion encontrada");
    } else {
      sendErrorResponse(res, "No Existe esa Transaccion", 404);
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createNewTransaccion = async (req, res) => {
  try {
    const createdTransaccion = await transaccionesService.createNewTransaccion(
      req.body
    );
    sendSuccessResponse(res, createdTransaccion, "Transaccion Creada", 201);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateOneTransaccion = async (req, res) => {
  try {
    const updatedTransaccion = await transaccionesService.updateOneTransaccion(
      req.params.transaccionId,
      req.body
    );
    if (updatedTransaccion) {
      sendSuccessResponse(res, updatedTransaccion, "Transaccion Actualizada");
    } else {
      sendErrorResponse(res, "Transaccion no encontrada", 404);
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteOneTransaccion = async (req, res) => {
  try {
    const deletedTransaccion = await transaccionesService.deleteOneTransaccion(
      req.params.transaccionId
    );
    if (deletedTransaccion) {
      sendSuccessResponse(res, deletedTransaccion, "Transanccion Eliminada");
    } else {
      sendErrorResponse(res, "Transanccion no encontrada", 404);
    }
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
