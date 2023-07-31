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
      sendSuccessResponse(res, allTransacciones, "No hay Transacciones", 204);
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
      sendSuccessResponse(res, null, "No Existe esa Transaccion", 404);
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
      sendSuccessResponse(res, null, "Transaccion no encontrada", 404);
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
      sendSuccessResponse(res, null, "Transanccion no encontrada", 404);
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
